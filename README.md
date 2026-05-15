<div align="center">

# 🌦️ Climora Web

**A modern climate & weather web platform built for the future.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

[Live Demo](#) · [Report Bug](https://github.com/jaldhishukla7/climora-web/issues) · [Request Feature](https://github.com/jaldhishukla7/climora-web/issues)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Pages & Components](#-pages--components)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🌍 About the Project

**Climora Web** is a full-featured climate and weather web application designed for modern audiences. Built on the **Next.js 16 App Router**, it delivers blazing-fast performance, a stunning UI, and a seamless experience across all devices.

Whether you're looking for real-time climate insights, product information about HVAC systems, or sustainability-focused solutions — Climora has it all in one sleek, accessible interface.

---

## ✨ Features

- 🌡️ **Climate & Weather Visualization** — Rich data displays and interactive charts
- 🏭 **Industry Solutions** — Tailored information for Chemical, Pharma, Food, Data Centers, and more
- 🛒 **Product Showcase** — AHU, FCU, Air Washers, Dehumidifiers, and other HVAC products
- 🌱 **Sustainability Focus** — Eco-conscious design highlighting green energy solutions
- 🌙 **Dark / Light Mode** — Seamless theme switching with `next-themes`
- 📊 **Interactive Charts** — Powered by Recharts 2.15
- 📱 **Fully Responsive** — Mobile-first, works on all screen sizes
- ♿ **Accessible** — WCAG-compliant UI via Radix UI primitives
- 🔔 **Toast Notifications** — Elegant alerts via Sonner
- 📅 **Date Range Picker** — React Day Picker integration
- 🧩 **Modular Architecture** — Reusable, composable components throughout
- ⚡ **Optimized Performance** — Next.js Image Optimization, lazy loading, and more

---

## 🛠️ Tech Stack

| Category        | Technology                                   |
|-----------------|----------------------------------------------|
| **Framework**   | Next.js 16 (App Router)                      |
| **Language**    | TypeScript 5.7                               |
| **Styling**     | Tailwind CSS 4.x + tw-animate-css            |
| **UI Library**  | Radix UI + shadcn/ui                         |
| **Icons**       | Lucide React                                 |
| **Charts**      | Recharts 2.15                                |
| **Forms**       | React Hook Form + Zod validation             |
| **Carousel**    | Embla Carousel React                         |
| **Theming**     | next-themes                                  |
| **Analytics**   | Vercel Analytics                             |
| **Pkg Manager** | pnpm (recommended) / npm                     |

---

## 📄 Pages & Components

### Pages
| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Products, Industries, Sustainability, Testimonials |
| `/contact` | Contact page with form and company details |

### Components
| Component | Description |
|-----------|-------------|
| `Navbar` | Responsive navigation with mobile menu |
| `Hero` | Full-screen hero section with image carousel |
| `About` | Company overview and mission section |
| `Products` | HVAC product grid with images |
| `Industries` | Industry-specific solution cards |
| `Sustainability` | Green energy & eco highlights |
| `Testimonials` | Customer testimonials carousel |
| `WhyClimora` | Key differentiators and value props |
| `Footer` | Links, social media, and legal info |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** ≥ 18.x — [Download](https://nodejs.org)
- **pnpm** (recommended) — Install with `npm install -g pnpm`
- **Git** — [Download](https://git-scm.com)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jaldhishukla7/climora-web.git

# 2. Navigate into the project
cd climora-web

# 3. Install dependencies (pnpm recommended)
pnpm install

# Or with npm
npm install
```

### Running Locally

```bash
# Start the development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates on file changes.

---

## 📁 Project Structure

```
climora-web/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, theme provider)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global CSS styles
│   └── contact/
│       └── page.tsx              # Contact page
│
├── components/                   # Shared UI components
│   ├── navbar.tsx                # Navigation bar
│   ├── footer.tsx                # Site footer
│   ├── hero.tsx                  # Hero section
│   ├── about.tsx                 # About section
│   ├── products.tsx              # Products grid
│   ├── industries.tsx            # Industries section
│   ├── sustainability.tsx        # Sustainability section
│   ├── testimonials.tsx          # Testimonials carousel
│   ├── why-climora.tsx           # Why Climora section
│   ├── theme-provider.tsx        # Theme context provider
│   └── ui/                       # shadcn/ui base components (40+ components)
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts             # Mobile breakpoint detection
│   └── use-toast.ts              # Toast notification hook
│
├── lib/                          # Utility functions
│   └── utils.ts                  # cn() and helper utilities
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── products/             # Product images (9 images)
│   │   ├── industries/           # Industry images (6 images)
│   │   └── hero-*.jpg            # Hero carousel images
│   └── icon.svg                  # App icon
│
├── styles/
│   └── globals.css               # Additional global styles
│
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS configuration
└── package.json                  # Dependencies & scripts
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
# NEXT_PUBLIC_SITE_URL=https://climora.vercel.app
```

> No environment variables are required to run the project locally in its current state.

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server (port 3000) |
| `pnpm build` | Build optimized production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint for code quality |

---

## 🤝 Contributing

Contributions are what make open source amazing! Here's how to get started:

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes (use Conventional Commits)
   ```bash
   git commit -m 'feat: add AmazingFeature'
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

### Commit Convention
We follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Code style changes (formatting, etc.)
- `refactor:` — Code refactoring
- `chore:` — Build process or tool changes

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.

---

## 👤 Author

**Jaldhi Shukla**

[![GitHub](https://img.shields.io/badge/GitHub-jaldhishukla7-181717?style=flat&logo=github)](https://github.com/jaldhishukla7)

---

## ⭐ Show Your Support

If you find this project useful, please consider giving it a **⭐ star** on GitHub — it means a lot!

---

<div align="center">

Made with ❤️ using **Next.js** & **Tailwind CSS**

</div>
