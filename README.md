# Sidra Foundation — Official Web Platform

A modern, high-performance, built with Next.js 16 App Router, React 19, Lenis smooth scrolling, Motion animations, and CSS Modules.

---

##  Features & Motion Architecture

- **Awwwards-Level Motion & Typography**: Staggered character and word reveals via `SplitText`, magnetic interactive elements (`Magnetic`), viewport scroll reveals (`ScrollReveal`), and micro-interactions (`ClickSpark`).
- **Smooth Inertial Scrolling**: Native-feel 60fps smooth scrolling powered by `@studio-freight/lenis`.
- **Full App Router Experience**:
  - **Home (`/`)**: Impact counter stats, flagship initiatives, departments showcase, community gallery, vision philosophy, and dynamic donation CTA.
  - **About (`/about`)**: Organizational history, core mission, timeline, and leadership vision.
  - **Departments (`/departments` & `/departments/[slug]`)**: Dynamic catalog of educational and community initiatives with static pre-rendering (`generateStaticParams`).
  - **Donate (`/donate`)**: Interactive pledge selection with customizable donor frequencies, amounts, and secure checkout experience.
  - **News & Media (`/news` & `/news/safe-water-mission`)**: Editorial stories with social share capabilities and related content carousels.
- **Responsive & Accessible**: Strict semantic HTML structure, contrast compliance, and full mobile adaptability.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack / Webpack SSG) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | Vanilla CSS Modules & CSS Custom Properties Design Tokens |
| **Motion & Animation** | [Motion](https://motion.dev/) (Framer Motion v14) & [GSAP 3](https://greensock.com/gsap/) |
| **Smooth Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) |
| **Image Optimization** | [Sharp](https://sharp.pixelplumbing.com/) & Next.js Image Optimization |

---

##  Project Structure

```text
sidra/
├── public/
│   ├── assets/              # Optimized WebP assets and SVG icons
│   └── favicon.ico
├── src/
│   ├── app/                 # Next.js App Router routes & pages
│   │   ├── about/           # About page
│   │   ├── departments/     # Departments catalog & dynamic [slug] route
│   │   ├── donate/          # Donation page
│   │   ├── news/            # News hub & editorial articles
│   │   ├── globals.css      # Core tokens, reset, typography & fluid scales
│   │   ├── layout.tsx       # Root layout with font configuration & providers
│   │   └── page.tsx         # Homepage view
│   ├── components/
│   │   ├── about/           # About-specific components
│   │   ├── departments/     # Department template components
│   │   ├── donate/          # Donation calculator & modals
│   │   ├── layout/          # Header, Footer, PageTransition & ScrollToTop
│   │   ├── news/            # Story cards & article headers
│   │   ├── providers/       # Lenis SmoothScrollProvider
│   │   ├── sections/        # Homepage landing sections
│   │   └── ui/              # Button, Magnetic, SplitText, CountUp, ClickSpark
│   ├── config/              # Site navigation & route configurations
│   ├── data/                # Data models for departments, news, and stats
│   ├── lib/                 # Shared utilities
│   └── types/               # TypeScript interfaces & types
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and project scripts
├── tsconfig.json            # TypeScript configuration
└── README.md
```

---

##  Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/devavijayan699-rgb/sidra.git
cd sidra

# Install dependencies
npm install
```

### Development Server

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is proprietary and maintained for the **Sidra Foundation**. All rights reserved.
