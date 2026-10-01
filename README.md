# EventHub — Event Registration Website (Experiment 9)

> **Aim:** Host a React.js website on GitHub Pages and connect a custom domain with SSL.  
> **Course:** Advanced Web Technology (SBL-AWT) — Experiment 9  
> **Author:** `nayanshii-ops`

---

## 🚀 Live Demo
- **GitHub Pages:** [https://nayanshii-ops.github.io/EVENTHUB/](https://nayanshii-ops.github.io/EVENTHUB/)

---

## 📋 Features
- **Event Registration Form:**
  - Full Name, Email, Phone number, and College / Organization inputs.
  - Category selection: Student Pass, Professional Delegate, VIP Access.
  - Multi-track interest tags (Web & Cloud, AI/ML, Cybersecurity, React).
  - Client-side validation with instant inline error feedback.
- **Dynamic Ticket Pass Generator:**
  - Generates a styled digital admission ticket with unique Registration ID (`EH9-XXXXXX`).
  - QR Code verification simulation and issued timestamp.
  - Print / Save Ticket support with custom `@media print` styling.
- **Experiment 9 Hosting Guide:**
  - Built-in documentation covering GitHub remote setup, Vite configuration, GitHub Pages deployment, and DNS record settings (`A` and `CNAME` records).

---

## 🛠️ Tech Stack & Components
- **Framework:** React 19 + Vite 6
- **Deployment:** `gh-pages`
- **Components:**
  - `Navbar.jsx`: Brand header & tab navigation.
  - `EventBanner.jsx`: Event metadata & highlight cards.
  - `RegistrationForm.jsx`: Controlled form with validation.
  - `TicketConfirmation.jsx`: Modal ticket view & print support.
  - `HostingGuide.jsx`: Step-by-step Experiment 9 lab manual guide.
  - `Footer.jsx`: Attribution & repository details.

---

## 💻 Local Development
```bash
# Install dependencies
npm install

# Start development server (Port 3009)
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 🌐 Experiment 9: Hosting & DNS Configuration

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Experiment 9: EventHub React Registration Website"
git branch -M main
git remote add origin https://github.com/nayanshii-ops/EVENTHUB.git
git push -u origin main
```

### 2. Deploy to GitHub Pages
```bash
npm run deploy
```

### 3. Custom Domain DNS Setup
If connecting a custom domain (e.g. `eventhub-college.com`), add the following DNS records:

| Record Type | Host | Target / IP Value |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `nayanshii-ops.github.io` |

In GitHub Repository: **Settings** → **Pages** → Enter custom domain → Enable **Enforce HTTPS**.
