import os
import secrets
import smtplib
import time
from collections import defaultdict, deque
from email.message import EmailMessage
from pathlib import Path
from typing import Annotated

from fastapi import FastAPI, Header, HTTPException, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr, Field, field_validator
from starlette.middleware.base import BaseHTTPMiddleware


def csv_env(name: str, default: str) -> list[str]:
    return [item.strip() for item in os.getenv(name, default).split(',') if item.strip()]


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(min_length=10, max_length=5000)
    website: str = Field(default='', max_length=200)

    @field_validator('name')
    @classmethod
    def sanitize_name(cls, value: str) -> str:
        # Strip newlines and carriage returns to prevent SMTP header injection
        sanitized = value.replace('\r', '').replace('\n', '').strip()
        if len(sanitized) < 2:
            raise ValueError('Name must contain at least 2 characters')
        return sanitized


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Enforce max content length to protect against memory exhaustion / large body DoS
        content_length = request.headers.get('content-length')
        if content_length:
            try:
                if int(content_length) > 65536:  # 64 KB limit
                    return Response(content="Payload too large", status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE)
            except ValueError:
                pass

        response = await call_next(request)
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['X-Frame-Options'] = 'DENY'
        response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
        response.headers['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=()'
        response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'
        response.headers['X-XSS-Protection'] = '1; mode=block'
        return response


app = FastAPI(docs_url=None if os.getenv('DISABLE_API_DOCS', 'true').lower() == 'true' else '/docs', redoc_url=None)
app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=csv_env('ALLOWED_ORIGINS', 'http://localhost:5173'),
    allow_credentials=False,
    allow_methods=['GET', 'POST'],
    allow_headers=['Content-Type', 'X-Resume-Token'],
    max_age=600,
)

requests_by_ip: dict[str, deque[float]] = defaultdict(deque)
RATE_LIMIT = 5
RATE_WINDOW_SECONDS = 15 * 60
MAX_TRACKED_IPS = 5000


def get_client_ip(request: Request) -> str:
    # Check trusted proxy headers before socket host
    for header in ('cf-connecting-ip', 'x-real-ip'):
        ip = request.headers.get(header)
        if ip:
            return ip.split(',')[0].strip()
    forwarded = request.headers.get('x-forwarded-for')
    if forwarded:
        return forwarded.split(',')[0].strip()
    return request.client.host if request.client else 'unknown'


def check_rate_limit(client_ip: str) -> None:
    now = time.monotonic()

    # Prune stale entries if tracking table grows large
    if len(requests_by_ip) > MAX_TRACKED_IPS:
        stale_keys = [k for k, q in requests_by_ip.items() if not q or (now - q[-1] > RATE_WINDOW_SECONDS)]
        for k in stale_keys:
            requests_by_ip.pop(k, None)

    request_times = requests_by_ip[client_ip]
    while request_times and now - request_times[0] > RATE_WINDOW_SECONDS:
        request_times.popleft()
    if len(request_times) >= RATE_LIMIT:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail='Too many requests. Please wait a few minutes before trying again.',
            headers={'Retry-After': str(RATE_WINDOW_SECONDS)},
        )
    request_times.append(now)


def send_contact_email(payload: ContactRequest) -> None:
    required_settings = ['SMTP_HOST', 'SMTP_USERNAME', 'SMTP_PASSWORD', 'CONTACT_RECIPIENT']
    if any(not os.getenv(setting) for setting in required_settings):
        raise HTTPException(status_code=503, detail='Contact service is not configured')

    clean_name = ''.join(c for c in payload.name if c.isprintable() and c not in '\r\n')
    message = EmailMessage()
    message['Subject'] = f"Portfolio contact from {clean_name}"
    message['From'] = os.getenv('SMTP_FROM', os.environ['SMTP_USERNAME'])
    message['To'] = os.environ['CONTACT_RECIPIENT']
    message['Reply-To'] = payload.email
    message.set_content(f"Name: {payload.name}\nEmail: {payload.email}\n\n{payload.message}")

    try:
        with smtplib.SMTP(os.environ['SMTP_HOST'], int(os.getenv('SMTP_PORT', '587')), timeout=10) as smtp:
            smtp.starttls()
            smtp.login(os.environ['SMTP_USERNAME'], os.environ['SMTP_PASSWORD'])
            smtp.send_message(message)
    except (OSError, smtplib.SMTPException) as error:
        raise HTTPException(status_code=503, detail='Message delivery is temporarily unavailable') from error


@app.get('/health')
def health() -> dict[str, str]:
    return {'status': 'ok'}


@app.post('/api/contact', status_code=status.HTTP_202_ACCEPTED)
def contact(payload: ContactRequest, request: Request) -> dict[str, str]:
    # Honeypot check - silently return accepted to confuse spam scrapers
    if payload.website.strip():
        return {'message': 'Message received'}
    check_rate_limit(get_client_ip(request))
    send_contact_email(payload)
    return {'message': 'Message received'}


@app.get('/api/resume')
def resume(x_resume_token: Annotated[str | None, Header()] = None):
    expected_token = os.getenv('RESUME_ACCESS_TOKEN')
    # Use secrets.compare_digest for constant-time comparison against timing attacks
    if not expected_token or not x_resume_token or not secrets.compare_digest(x_resume_token, expected_token):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Not found')

    private_dir = (Path(__file__).parent / 'private').resolve()
    resume_path = (private_dir / 'Sravan_Resume.pdf').resolve()
    # Path traversal check
    if not resume_path.is_relative_to(private_dir) or not resume_path.is_file():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Not found')
    return FileResponse(resume_path, media_type='application/pdf', filename='Sravan_Resume.pdf')

