# Portfolio API

FastAPI service for the portfolio contact form and protected resume endpoint.

## Local setup

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn main:app --reload --port 8000
```

Set real SMTP values in `backend/.env`. Keep `.env` and `backend/private/Sravan_Resume.pdf` out of Git.

## Deployment

Deploy this directory as a Hugging Face Docker Space. Add the `.env.example` values as Space secrets/variables, set `ALLOWED_ORIGINS` to the deployed frontend URL, and upload the resume into `backend/private/Sravan_Resume.pdf` through the private deployment workflow.

The frontend uses `VITE_API_URL` to call `/api/contact`. The resume endpoint requires the server-side `X-Resume-Token` header and is not linked publicly by the frontend.
