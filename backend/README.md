# Portfolio API

FastAPI service for the portfolio contact form and protected resume endpoint.

## Local setup

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
python -m uvicorn main:app --reload --port 8000
```

Set real SMTP values in `backend/.env`. Keep `.env` and `backend/private/Sravan_Resume.pdf` out of Git.

## Deployment

Deploy this directory as a Render Web Service using the included Dockerfile. Render should expose port `7860`. Add the `.env.example` values as environment variables and set `ALLOWED_ORIGINS` to the deployed frontend URL.

The Docker image includes the `private/` directory, but the resume is intentionally excluded from Git. Provide `private/Sravan_Resume.pdf` through a secure deployment process if the protected resume endpoint is needed.

The frontend uses `VITE_API_URL` to call `/api/contact`. The resume endpoint requires the server-side `X-Resume-Token` header and is not linked publicly by the frontend.
