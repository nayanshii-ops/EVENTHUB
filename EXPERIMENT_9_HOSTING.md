# Experiment 9 — Hosting the Website with Domain Registration

**Aim:** Host a React.js website on GitHub Pages (free hosting) and connect a custom domain.

## Part A — Push the React app to GitHub
```bash
# inside exp03_react_homepage (or the EventHub frontend)
git init
git add .
git commit -m "Experiment 9: React homepage"
git branch -M main
git remote add origin https://github.com/<your-username>/eventhub-homepage.git
git push -u origin main
```

## Part B — Deploy to GitHub Pages (Vite + gh-pages)
```bash
npm install gh-pages --save-dev
```
`package.json` (already added in exp03_react_homepage):
```json
"homepage": "https://<your-username>.github.io/eventhub-homepage",
"scripts": { "build": "vite build", "predeploy": "npm run build", "deploy": "gh-pages -d dist" }
```
`vite.config.js` → `base: "/eventhub-homepage/"` and use `<BrowserRouter basename="/eventhub-homepage">` (or `HashRouter`) so React Router works on Pages.
```bash
npm run deploy          # builds and pushes the dist/ folder to the gh-pages branch
```
GitHub → repository → Settings → Pages → Source: `gh-pages` branch → Save.
Live URL: `https://<your-username>.github.io/eventhub-homepage/`

## Part C — Domain registration & DNS
1. Buy a domain (GoDaddy / Namecheap / Hostinger / BigRock), e.g. `eventhub-college.com`.
2. In the domain's DNS panel add:
   - `A` records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` record `www` → `<your-username>.github.io`
3. GitHub → Settings → Pages → *Custom domain* → `www.eventhub-college.com` → Save → tick **Enforce HTTPS** (free Let's Encrypt certificate — links to Experiment 10).
4. Add a `public/CNAME` file containing `www.eventhub-college.com` so the domain survives redeploys.

## Result
The React homepage is reachable at the GitHub Pages URL and, after DNS propagation (5 min – 24 h), at the custom `.com` domain over HTTPS.
The full EventHub project is likewise hosted at: https://event-ticketing-hub-10.preview.emergentagent.com
