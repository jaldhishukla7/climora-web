# 🌦️ Climora Web

> A modern, responsive climate and weather platform built with Next.js 16, TypeScript, and a rich component ecosystem.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)

---

## 🌍 Overview

**Climora Web** is a full-featured climate and weather web application designed for modern browsers. It delivers real-time weather data, rich UI components, and a seamless user experience powered by a cutting-edge frontend stack.

---

## ✨ Features

- 🌡️ Real-time weather & climate data visualization
- 📊 Interactive charts with Recharts
- 🎨 Beautiful UI with Radix UI primitives & shadcn/ui
- 🌙 Dark / Light mode with `next-themes`
- 📱 Fully responsive — mobile-first design
- ♿ Accessible components via Radix UI
- 🔔 Toast notifications with Sonner
- 📅 Date-range picking with React Day Picker
- 🧩 Modular, reusable component architecture
- ⚡ Optimized performance with Next.js 16 App Router

---

## 🛠️ Tech Stack

| Category       | Technology                          |
|----------------|-------------------------------------|
| Framework      | Next.js 16 (App Router)             |
| Language       | TypeScript 5.7                      |
| Styling        | Tailwind CSS 4.x, tw-animate-css    |
| UI Components  | Radix UI, shadcn/ui, Lucide Icons   |
| Charts         | Recharts 2.15                       |
| Forms          | React Hook Form + Zod validation    |
| Carousel       | Embla Carousel React                |
| Analytics      | Vercel Analytics                    |
| Package Manager| pnpm / npm                          |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **pnpm** (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jaldhishukla7/climora-web.git
cd climora-web

# Install dependencies (using pnpm - recommended)
pnpm install

# Or using npm
npm install
```

### Running the Development Server

```bash
# Using pnpm
pnpm dev

# Using npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 📁 Project Structure

```
climora-web/
├── app/                    # Next.js App Router pages & layouts
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable UI components
│   └── ui/                 # shadcn/ui base components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions & helpers
├── public/                 # Static assets (images, icons, etc.)
├── styles/                 # Additional stylesheets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── components.json         # shadcn/ui component registry
└── package.json            # Project dependencies & scripts
```

---

## 📜 Scripts

| Script        | Description                            |
|---------------|----------------------------------------|
| `pnpm dev`    | Start development server on port 3000  |
| `pnpm build`  | Build production bundle                |
| `pnpm start`  | Start production server                |
| `pnpm lint`   | Run ESLint code linting                |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'feat: add your feature'`
4. **Push** to your branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Jaldhi Shukla**  
GitHub: [@jaldhishukla7](https://github.com/jaldhishukla7)

---

<p align="center">Made with ❤️ using Next.js & Tailwind CSS</p>
