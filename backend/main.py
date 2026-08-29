import os
import smtplib
import time
from collections import defaultdict, deque
from email.message import EmailMessage
from pathlib import Path
from typing import Annotated

from fastapi import FastAPI, Header, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr, Field
from starlette.middleware.base import BaseHTTPMiddleware


def csv_env(name: str, default: str) -> list[str]:
    return [item.strip() for item in os.getenv(name, default).split(',') if item.strip()]


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(min_length=10, max_length=5000)
    website: str = Field(default='', max_length=200)


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['X-Frame-Options'] = 'DENY'
        response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
        response.headers['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=()'
        return response


app = FastAPI(docs_url=None if os.getenv('DISABLE_API_DOCS', 'true').lower() == 'true' else '/docs', redoc_url=None)
app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=csv_env('ALLOWED_ORIGINS', 'http://localhost:5173'),
    allow_credentials=False,
    allow_methods=['GET', 'POST'],
    allow_headers=['Content-Type', 'X-Resume-Token'],
)

requests_by_ip: dict[str, deque[float]] = defaultdict(deque)
RATE_LIMIT = 5
RATE_WINDOW_SECONDS = 15 * 60


def check_rate_limit(client_ip: str) -> None:
    now = time.monotonic()
    request_times = requests_by_ip[client_ip]
    while request_times and now - request_times[0] > RATE_WINDOW_SECONDS:
        request_times.popleft()
    if len(request_times) >= RATE_LIMIT:
        raise HTTPException(status_code=status.HTTP_429_TOO_MANY_REQUESTS, detail='Too many requests')
    request_times.append(now)


def send_contact_email(payload: ContactRequest) -> None:
    required_settings = ['SMTP_HOST', 'SMTP_USERNAME', 'SMTP_PASSWORD', 'CONTACT_RECIPIENT']
    if any(not os.getenv(setting) for setting in required_settings):
        raise HTTPException(status_code=503, detail='Contact service is not configured')

    message = EmailMessage()
    message['Subject'] = f"Portfolio contact from {payload.name}"
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
    if payload.website:
        return {'message': 'Message received'}
    check_rate_limit(request.client.host if request.client else 'unknown')
    send_contact_email(payload)
    return {'message': 'Message received'}


@app.get('/api/resume')
def resume(x_resume_token: Annotated[str | None, Header()] = None):
    expected_token = os.getenv('RESUME_ACCESS_TOKEN')
    if not expected_token or x_resume_token != expected_token:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Not found')

    resume_path = Path(__file__).parent / 'private' / 'Sravan_Resume.pdf'
    if not resume_path.is_file():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Not found')
    return FileResponse(resume_path, media_type='application/pdf', filename='Sravan_Resume.pdf')
