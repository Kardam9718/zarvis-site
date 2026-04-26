# zarvis.tech — Premium Portfolio (GitHub Pages Ready)

Production-ready Next.js + Tailwind + Framer Motion portfolio for **Harsh Kardam**.

## Features
- Dark futuristic design (glassmorphism + neon accents)
- Fully responsive mobile-first SPA
- Smooth Framer Motion animations
- Direct WhatsApp conversion CTAs
- GitHub Pages + GitHub Actions automatic deployment
- No third-party hosting platform required

## 1) Upload to GitHub
Create repository: `zarvis-site` under `Kardam9718`, then push this project.

## 2) Enable GitHub Pages
- Go to **Repository → Settings → Pages**
- Set **Source = GitHub Actions**

The included workflow will auto-build and deploy on every push to `main`.

## 3) Custom Domain
`public/CNAME` is already set to:

`zarvis.tech`

In your DNS provider, point domain to GitHub Pages:
- A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- CNAME for `www` → `kardam9718.github.io`

## 4) Local Development
```bash
npm install
npm run dev
```

## Notes
- `next.config.ts` includes static export config for GitHub Pages.
- `repoName` is set to `zarvis-site`. Keep repo name same for zero changes.