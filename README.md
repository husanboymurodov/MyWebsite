# Husan Boymurodov | Software Engineer Portfolio

A modern, high-performance portfolio website built with **React**, **TypeScript**, and **Vite**. This site showcases my engineering projects, professional experience, and technical skills.

## 🚀 Recent Updates
- **New Projects Integrated**: Added FitHub (Full-Stack Fitness Tracker) and OrderSmart (ML Delivery Predictor).
- **UI/UX Optimization**: Implemented smooth hover animations, soft shadows, and a modern "badge" style for hero callouts.
- **Branding**: Customized the "HB" logo and favicon to match a consistent professional identity.
- **Deployment Ready**: Fully configured for Google Cloud Run with multi-stage Docker builds.

## 🛠️ Tech Stack
- **Frontend**: React 19, TypeScript, Vanilla CSS (Modern CSS variables)
- **Tooling**: Vite, ESLint
- **Deployment**: Docker, Google Cloud Run

## 📁 Key Projects
1. **FitHub**: Full-stack MERN application for fitness tracking. Includes Interactive dashboards (Chart.js) and external API integrations.
2. **OrderSmart**: Machine Learning dashboard using XGBoost to predict delivery timings, deployed via Hugging Face.
3. **Customer Churn Prediction**: Classification model for telecom retention analysis.

## 💻 Local Development

1. **Clone and Install**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## ☁️ Deployment (Google Cloud Run)

This project is containerized using Docker for easy deployment to GCP.

1. **Build and Deploy**:
   ```bash
   gcloud run deploy portfolio-website \
     --source . \
     --region asia-southeast1 \
     --allow-unauthenticated
   ```

---
*Built with ❤️ by Husan Boymurodov.*
