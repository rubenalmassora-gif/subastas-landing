# Subastas Landing

This is the landing page for Subastas IA Pro, separated from the main application.

## Overview

This project contains:
- Landing page with product information and pricing
- Legal pages (Terms of Service, Privacy Policy, Legal Notice)
- Redirect functionality to the main app for login

## Development

```bash
npm install
npm run dev
```

The landing page runs on port 5174 by default.

## Routing

When users click "Iniciar Sesión", they are redirected to:
- Development: `http://localhost:5173` (main app)
- Production: `https://app.subastasiapro.com` (main app)

## Project Structure

```
src/
├── lib/
│   └── creditPacks.ts     # Credit pack data (mock)
├── pages/
│   ├── LandingPage.tsx    # Main landing page
│   ├── TermsOfService.tsx # Terms of service
│   ├── PrivacyPolicy.tsx  # Privacy policy
│   └── LegalNotice.tsx    # Legal notice
├── App.tsx                # Main app with routing
├── main.tsx               # Entry point
└── index.css              # Tailwind styles
```

## Build

```bash
npm run build
```

Outputs to `dist/` directory for deployment.