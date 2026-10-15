# Sravan Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. The contact form uses the FastAPI service in `backend/`.

## Local development

Frontend:

```powershell
cd frontend
npm install
npm run dev
```

Backend:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
Copy-Item .env.example .env
python -m uvicorn main:app --reload --port 8000
```

Set SMTP values in `backend/.env`. Set `frontend/.env.local` to point the form at the API:

```env
VITE_API_URL=http://localhost:8000
```

## Checks

```powershell
cd frontend
npm run build
npm run lint
```

```powershell
cd backend
python -m pip check
```

## Vercel deployment (Frontend)

The repository is configured to build cleanly on Vercel either from the repository root or with `frontend` set as the Root Directory:

### Option A: Standard Vercel Root Directory (Recommended)
1. In your Vercel Project, go to **Settings** > **General** > **Root Directory**.
2. Click **Edit**, type `frontend`, and click **Save**.
3. Framework Preset will automatically detect **Vite**, with build command `npm run build` and output directory `dist`.
4. In **Settings** > **Environment Variables**, set:
   - `VITE_API_URL`: Your backend API URL (e.g. `https://your-backend.onrender.com`).
5. Trigger a Redeploy.

### Option B: Monorepo Root Deployment
- A root [vercel.json](file:///vercel.json) and root [package.json](file:///package.json) are provided with build commands that automatically install and build the frontend from the root directory.

## Render deployment (Backend)

Deploy the two parts as services in the same Render project:

1. Create a **Web Service** from `backend/`, choose Docker, and expose port `7860`. Its Dockerfile already starts Uvicorn on `0.0.0.0:7860`.
2. Create a **Static Site** from `frontend/` with build command `npm install && npm run build` and publish directory `dist`.
3. Set the frontend `VITE_API_URL` to the backend Render URL.
4. Set the backend `ALLOWED_ORIGINS` to the frontend URL and configure the SMTP variables from `backend/.env.example`.

The contact form works on Render when those environment variables are configured. The protected resume endpoint also requires `RESUME_ACCESS_TOKEN` and a securely supplied `backend/private/Sravan_Resume.pdf`; the PDF is intentionally excluded from Git.

