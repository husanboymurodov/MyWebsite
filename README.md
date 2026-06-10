# Husan Boymurodov | Software Engineer Portfolio

A modern, high-performance portfolio website built with **React**, **TypeScript**, and **Vite**. Showcases engineering projects, professional experience, certifications, and technical skills.

## Recent Updates
- **New Project**: Instagram Viewer & Blocker — Chrome/Firefox extension published on Chrome Web Store and Mozilla Add-ons.
- **Experience**: Added Software Engineer Intern role at Artiselite Sdn Bhd (May 2026 – Present).
- **Certifications**: New section for licenses and certifications (Claude Code 101, Anthropic).
- **Projects**: Removed role/date topline from project cards for cleaner layout.
- **Skills**: Added Amazon Web Services (AWS) and Clean Coding.

## Tech Stack
- **Frontend**: React 19, TypeScript, Vanilla CSS (CSS variables)
- **Tooling**: Vite, ESLint
- **Deployment**: Docker, Google Cloud Run

## Projects
1. **Instagram Viewer & Blocker**: Chrome/Firefox extension to view profiles and block any Instagram account, bypassing block relationships via anonymous API fallbacks.
2. **FitHub**: Full-stack MERN fitness tracker with Chart.js dashboards and external API integrations.
3. **OrderSmart**: XGBoost ML dashboard to predict food delivery timings, deployed on Hugging Face.
4. **Customer Churn Prediction**: Classification model for telecom retention analysis.

## Local Development

1. **Install**:
   ```bash
   npm install
   ```

2. **Dev server**:
   ```bash
   npm run dev
   ```

3. **Production build**:
   ```bash
   npm run build
   ```

## Deployment (Google Cloud Run)

```bash
gcloud run deploy portfolio-website \
  --source . \
  --region asia-southeast1 \
  --allow-unauthenticated
```

---
*Built by Husan Boymurodov.*
