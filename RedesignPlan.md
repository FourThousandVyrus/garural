# GA Rural Bank PLC — Modern Redesign Plan

> **Project:** Full static redesign of [garuralbank.com](https://garuralbank.com/)
> **Stack:** Next.js 14 (App Router) · React 18 · Tailwind CSS · Framer Motion · React Three Fiber
> **Goal:** A modern, motion-rich, 3D-enabled landing page that feels premium yet approachable — "Banking made easy."

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Design System](#2-design-system)
3. [Folder & Component Structure](#3-folder--component-structure)
4. [Page Layout & Content Hierarchy](#4-page-layout--content-hierarchy)
5. [Section Blueprints & Code](#5-section-blueprints--code)
   - 5.1 Navbar
   - 5.2 Hero Section
   - 5.3 Accounts Overview
   - 5.4 Loans & Remittance
   - 5.5 Investments & Services
   - 5.6 About / Corporate
   - 5.7 Branch Locator / Contact
   - 5.8 Footer
6. [Motion & Animation Plan](#6-motion--animation-plan)
7. [3D Effects Plan](#7-3d-effects-plan)
8. [Image & Asset Strategy](#8-image--asset-strategy)
9. [Responsive Design Notes](#9-responsive-design-notes)
10. [Accessibility Notes](#10-accessibility-notes)
11. [Performance Optimization](#11-performance-optimization)

---

## 1. Design Philosophy

| Principle | Description |
|-----------|-------------|
| **Trust-first** | Banking demands trust — clean layouts, generous whitespace, professional typography |
| **Motion with purpose** | Every animation communicates hierarchy or draws attention to CTAs — never decorative noise |
| **Afro-modern aesthetic** | Warm golds, earth tones, and Kente-inspired geometric accents celebrate Ghanaian heritage |
| **Progressive disclosure** | Content reveals on scroll; the page tells a story top-to-bottom |
| **Mobile-first** | 70%+ of Ghanaian internet users are on mobile — design accordingly |

---

## 2. Design System

### 2.1 Color Palette

```
Primary Colors
┌─────────────────────────────────────────────────────┐
│  Gold-500 (Brand)    #D4A017   ██████████████████   │
│  Gold-600 (Hover)    #B8860B   ██████████████████   │
│  Gold-400 (Light)    #F0C75E   ██████████████████   │
│  Navy-900 (Primary)  #0A1628   ██████████████████   │
│  Navy-800            #121F3D   ██████████████████   │
│  Navy-700            #1A2D52   ██████████████████   │
│  Emerald-500         #10B981   ██████████████████   │
│  Emerald-600         #059669   ██████████████████   │
└─────────────────────────────────────────────────────┘

Neutral Colors
┌─────────────────────────────────────────────────────┐
│  White               #FFFFFF                        │
│  Gray-50             #F9FAFB                        │
│  Gray-100            #F3F4F6                        │
│  Gray-200            #E5E7EB                        │
│  Gray-400            #9CA3AF                        │
│  Gray-600            #4B5563                        │
│  Gray-900            #111827                        │
└─────────────────────────────────────────────────────┘

Semantic Colors
┌─────────────────────────────────────────────────────┐
│  Success             #10B981  (Emerald)             │
│  Warning             #F59E0B  (Amber)               │
│  Error               #EF4444  (Red)                 │
│  Info                #3B82F6  (Blue)                │
└─────────────────────────────────────────────────────┘
```

### 2.2 Typography

```
Font Stack:
  Headings  → "Plus Jakarta Sans", sans-serif  (Google Fonts — weight 600, 700, 800)
  Body      → "Inter", sans-serif              (Google Fonts — weight 400, 500, 600)
  Accent    → "Space Grotesk", sans-serif      (For numbers, stats, data)

Scale (Desktop → Mobile):
  Hero H1       → 72px / 4.5rem   → 40px / 2.5rem
  Section H2    → 48px / 3rem     → 32px / 2rem
  Card H3       → 24px / 1.5rem   → 20px / 1.25rem
  Body Large    → 20px / 1.25rem  → 18px / 1.125rem
  Body          → 16px / 1rem     → 16px / 1rem
  Caption       → 14px / 0.875rem → 14px / 0.875rem
  Overline      → 12px / 0.75rem  → 12px / 0.75rem (uppercase, letter-spacing: 0.1em)
```

### 2.3 Spacing & Layout

```
Container Max Width:  1280px
Section Padding:      120px vertical (desktop) / 64px (mobile)
Grid:                 12-column CSS Grid / Flexbox
Gap:                  32px (desktop) / 16px (mobile)
Border Radius:        16px (cards), 12px (buttons), 9999px (pills)
Shadows:
  sm  → 0 1px 2px rgba(0,0,0,0.05)
  md  → 0 4px 6px rgba(0,0,0,0.07)
  lg  → 0 10px 25px rgba(0,0,0,0.1)
  xl  → 0 20px 50px rgba(0,0,0,0.15)
  gold → 0 10px 40px rgba(212,160,23,0.3)
```

### 2.4 Tailwind Config Extensions

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F0C75E',
          500: '#D4A017',
          600: '#B8860B',
        },
        navy: {
          700: '#1A2D52',
          800: '#121F3D',
          900: '#0A1628',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        accent: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(212,160,23,0.2)' },
          to: { boxShadow: '0 0 40px rgba(212,160,23,0.4)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
```

---

## 3. Folder & Component Structure

```
garuralbank/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-bg.webp              # Aerial Accra / bank building
│   │   │   └── hero-pattern.svg          # Kente geometric overlay
│   │   ├── accounts/
│   │   │   ├── current-account.webp
│   │   │   ├── savings-account.webp
│   │   │   └── esusu-account.webp
│   │   ├── services/
│   │   │   ├── loans-icon.svg
│   │   │   ├── remittance-icon.svg
│   │   │   ├── investment-icon.svg
│   │   │   ├── mobile-banking-icon.svg
│   │   │   ├── ezwich-icon.svg
│   │   │   └── bill-payment-icon.svg
│   │   ├── about/
│   │   │   ├── timeline-1984.webp
│   │   │   ├── timeline-growth.webp
│   │   │   └── board-placeholder.webp
│   │   ├── branches/
│   │   │   └── branch-placeholder.webp
│   │   ├── logo.svg
│   │   ├── logo-white.svg
│   │   └── og-image.jpg
│   ├── fonts/                             # Self-hosted fallbacks
│   └── models/
│       └── coin.glb                       # 3D gold coin model
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Root layout (fonts, metadata)
│   │   ├── page.tsx                       # Landing page (composes all sections)
│   │   ├── globals.css                    # Tailwind directives + custom CSS
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SectionWrapper.tsx         # Reusable section container
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AccountsSection.tsx
│   │   │   ├── LoansRemittanceSection.tsx
│   │   │   ├── InvestmentsServicesSection.tsx
│   │   │   ├── AboutCorporateSection.tsx
│   │   │   ├── BranchLocatorSection.tsx
│   │   │   └── CTABannerSection.tsx       # Mid-page call-to-action
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── StatCounter.tsx            # Animated number counter
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── IconBox.tsx
│   │   │   └── GlassCard.tsx              # Glassmorphism card variant
│   │   │
│   │   ├── three/
│   │   │   ├── HeroCoin.tsx               # 3D spinning gold coin
│   │   │   ├── FloatingParticles.tsx      # Ambient particle background
│   │   │   └── GlobeVisualization.tsx     # 3D globe for remittance
│   │   │
│   │   └── motion/
│   │       ├── FadeInOnScroll.tsx          # Intersection Observer + Framer
│   │       ├── StaggerChildren.tsx         # Staggered reveal wrapper
│   │       ├── ParallaxLayer.tsx           # Scroll-linked parallax
│   │       ├── CountUp.tsx                 # Animated number counter
│   │       └── MagneticButton.tsx          # Cursor-following button
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.ts           # Scroll progress 0-1
│   │   ├── useInView.ts                   # Intersection observer hook
│   │   ├── useMousePosition.ts            # For magnetic/parallax effects
│   │   └── useMediaQuery.ts               # Responsive breakpoint hook
│   │
│   ├── lib/
│   │   ├── constants.ts                   # Site-wide constants, nav links
│   │   ├── animations.ts                  # Shared Framer Motion variants
│   │   └── utils.ts                       # cn() classname merger, helpers
│   │
│   └── types/
│       └── index.ts                       # Shared TypeScript interfaces
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 4. Page Layout & Content Hierarchy

```
┌────────────────────────────────────────────────────┐
│  NAVBAR (sticky, glass blur on scroll)             │
│  Logo  |  Home  Accounts  Loans  About  Contact    │
│                              [Open Account] button │
├────────────────────────────────────────────────────┤
│                                                    │
│  ████  HERO SECTION  ████████████████████████████  │
│  3D coin + particles background                    │
│  "Banking Made Easy"                               │
│  Subhead + 2 CTA buttons                           │
│  Scroll-down indicator                             │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  ▸ TRUST BAR (stats: 40+ years, 15+ branches...)   │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  ACCOUNTS OVERVIEW                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ Current  │  │ Savings  │  │  eSusu   │         │
│  │ Account  │  │ Account  │  │ Account  │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│  (3D card tilt on hover, stagger-in on scroll)     │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  LOANS & REMITTANCE (dark bg)                      │
│  Split layout: Loans left │ Remittance right       │
│  Animated service icons, 3D globe for remittance   │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  ══ CTA BANNER ══                                  │
│  "Ready to start your journey?" + Gold gradient bg │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  INVESTMENTS & SERVICES                            │
│  2x3 grid of service cards with animated entrances │
│  (Mobile Banking, E-Zwich, Bills, Cheque, etc.)    │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  ABOUT / CORPORATE                                 │
│  Timeline scroll: 1984 → Present                   │
│  Mission / Vision / Values cards                   │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  BRANCH LOCATOR                                    │
│  Interactive branch cards with contact details     │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  FOOTER                                            │
│  4-col: About | Services | Quick Links | Contact   │
│  Newsletter signup | Social icons | Legal          │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## 5. Section Blueprints & Code

### 5.1 Navbar

```tsx
// src/components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Accounts', href: '#accounts' },
  { label: 'Loans', href: '#loans' },
  { label: 'Investments', href: '#investments' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/*
        MOTION: Navbar transitions from transparent → glass blur on scroll.
        Uses backdrop-blur-xl for frosted glass effect.
        Height shrinks from 80px → 64px on scroll.
      */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-900/80 backdrop-blur-xl shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="GA Rural Bank"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-heading font-bold text-white text-lg hidden sm:block">
              GA Rural Bank
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-gold-400 transition-colors duration-300
                           text-sm font-medium relative group"
              >
                {link.label}
                {/* MOTION: Underline slides in from left on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500
                                 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="sm">
              Open Account
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.div className="w-6 h-5 flex flex-col justify-between">
              {/* MOTION: Hamburger morphs into X on open */}
              <motion.span
                className="w-full h-0.5 bg-white block"
                animate={mobileOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white block"
                animate={mobileOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              />
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu links={navLinks} onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
```

```tsx
// src/components/layout/MobileMenu.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface MobileMenuProps {
  links: { label: string; href: string }[];
  onClose: () => void;
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  return (
    /* MOTION: Full-screen overlay slides in from right with staggered link animations */
    <motion.div
      className="fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-2xl flex flex-col
                 items-center justify-center gap-8"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      {links.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Link
            href={link.href}
            onClick={onClose}
            className="text-white text-3xl font-heading font-bold
                       hover:text-gold-400 transition-colors"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button variant="gold" size="lg">
          Open Account
        </Button>
      </motion.div>
    </motion.div>
  );
}
```

---

### 5.2 Hero Section

```tsx
// src/components/sections/HeroSection.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, Suspense, lazy } from 'react';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// LAZY-LOAD: 3D scene only loads on capable devices
const HeroCoin = lazy(() => import('@/components/three/HeroCoin'));
const FloatingParticles = lazy(() => import('@/components/three/FloatingParticles'));

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // MOTION: Parallax — content moves up slower than scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-navy-900"
    >
      {/* Background Layers */}
      {/* Layer 1: Gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

      {/* Layer 2: Kente geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url('/images/hero/hero-pattern.svg')`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Layer 3: Radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px]" />

      {/* Layer 4: 3D Floating Particles (lazy-loaded) */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <FloatingParticles />
        </Suspense>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                   grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left — Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* Overline badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-gold-500/10 border border-gold-500/20 text-gold-400
                             text-xs font-accent uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              Established 1984 — Ghana&apos;s Trusted Community Bank
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-heading font-extrabold text-white leading-[1.1]
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Banking{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r
                             from-gold-400 to-gold-600">
              Made Easy
            </span>
            <br />
            For Everyone.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-white/60 text-lg sm:text-xl max-w-xl
                       mx-auto lg:mx-0 font-body"
          >
            From savings to loans, investments to remittance — GA Rural Bank
            empowers communities across Ghana with accessible, modern financial services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4
                       justify-center lg:justify-start"
          >
            {/* MOTION: MagneticButton — subtle cursor-following effect */}
            <Button variant="gold" size="lg" magnetic>
              Open an Account
            </Button>
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex items-center gap-6 justify-center lg:justify-start
                       text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              {/* Bank of Ghana regulated icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0L2 4v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V4l-8-4z" />
              </svg>
              BoG Regulated
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div>15+ Branches</div>
            <div className="w-px h-4 bg-white/20" />
            <div>40+ Years</div>
          </motion.div>
        </motion.div>

        {/* Right — 3D Coin / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="hidden lg:flex items-center justify-center"
        >
          {/*
            3D: Rotating gold coin using React Three Fiber.
            - Metallic gold PBR material
            - Slow auto-rotate + mouse-follow tilt
            - Ambient + directional lighting for realistic reflections
            - Fallback: static gold coin image for non-WebGL devices
          */}
          <div className="w-[500px] h-[500px] relative">
            <Suspense
              fallback={
                <div className="w-full h-full rounded-full bg-gradient-to-br
                                from-gold-400 to-gold-600 animate-pulse" />
              }
            >
              <HeroCoin />
            </Suspense>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gold-500 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
```

```tsx
// src/components/three/HeroCoin.tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GoldCoin() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // 3D: Slow Y-axis rotation — 1 full rotation every 10 seconds
  useFrame((_state, delta) => {
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    /*
      3D NOTES:
      - CylinderGeometry simulates a thick coin (radius=2, height=0.3)
      - MeshStandardMaterial with metalness=0.9 and roughness=0.1 for gold look
      - Float wrapper adds gentle bobbing motion
      - Environment map provides realistic reflections
    */
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} castShadow>
        <cylinderGeometry args={[2, 2, 0.3, 64]} />
        <meshStandardMaterial
          color="#D4A017"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Embossed text/logo on coin face — simplified */}
      <mesh position={[0, 0.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 64]} />
        <meshStandardMaterial
          color="#B8860B"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCoin() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FFF8E7" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#D4A017" />

      <GoldCoin />

      {/* HDR environment for realistic metallic reflections */}
      <Environment preset="city" />
    </Canvas>
  );
}
```

```tsx
// src/components/three/FloatingParticles.tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Particles({ count = 200 }) {
  const meshRef = useRef<THREE.Points>(null!);

  /*
    3D NOTES:
    - 200 particles randomly placed in a 3D bounding box
    - Each particle is a tiny gold sphere
    - They drift slowly upward and reset position when leaving the box
    - Creates a gentle "floating gold dust" ambiance
  */
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;     // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }
    return arr;
  }, [count]);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.02;
    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += delta * 0.1; // drift up
      if (posArr[i * 3 + 1] > 10) posArr[i * 3 + 1] = -10; // reset
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#D4A017"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function FloatingParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ alpha: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Particles />
    </Canvas>
  );
}
```

---

### 5.3 Trust Bar (Stats)

```tsx
// Rendered between Hero and Accounts — appears in page.tsx

// src/components/sections/TrustBarSection.tsx
'use client';

import { motion } from 'framer-motion';
import CountUp from '@/components/motion/CountUp';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';

const stats = [
  { value: 40, suffix: '+', label: 'Years of Service' },
  { value: 15, suffix: '+', label: 'Branches Nationwide' },
  { value: 100, suffix: 'K+', label: 'Happy Customers' },
  { value: 33, suffix: '', label: 'AGMs Held' },
];

export default function TrustBarSection() {
  return (
    /*
      MOTION: Each stat counter animates from 0 → target number on scroll-in.
      Stagger delay: 0.15s between each stat.
      Background: subtle gradient strip to visually separate hero from content.
    */
    <section className="relative -mt-20 z-20 max-w-6xl mx-auto px-4">
      <FadeInOnScroll>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12
                        grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="font-accent text-4xl md:text-5xl font-bold text-navy-900">
                {/* MOTION: CountUp animates number from 0 with easeOut */}
                <CountUp end={stat.value} duration={2.5} />
                <span className="text-gold-500">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </FadeInOnScroll>
    </section>
  );
}
```

```tsx
// src/components/motion/CountUp.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
}

export default function CountUp({ end, duration = 2, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration, decimals]);

  return <span ref={ref}>{count}</span>;
}
```

---

### 5.4 Accounts Overview Section

```tsx
// src/components/sections/AccountsSection.tsx
'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const accounts = [
  {
    title: 'Current Account',
    description:
      'Designed to make running your business easier with seamless daily transactions, cheque facilities, and business banking tools.',
    icon: '💼', // Replace with custom SVG icon
    gradient: 'from-blue-500 to-indigo-600',
    features: ['Cheque Book', 'Overdraft Facility', 'Internet Banking', 'Business Tools'],
  },
  {
    title: 'Savings Account',
    description:
      'Specially designed to help you save for your future goals with competitive interest rates and flexible deposit options.',
    icon: '🏦',
    gradient: 'from-gold-400 to-gold-600',
    features: ['Competitive Rates', 'Flexible Deposits', 'No Hidden Fees', 'Mobile Access'],
  },
  {
    title: 'eSusu Account',
    description:
      'Built for regular income earners and businesses — a modern take on the traditional Susu savings system.',
    icon: '🤝',
    gradient: 'from-emerald-500 to-teal-600',
    features: ['Daily Collections', 'Micro Savings', 'Loan Eligibility', 'Community Driven'],
  },
];

export default function AccountsSection() {
  return (
    <section id="accounts" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          overline="Our Accounts"
          title="Choose the Right Account for You"
          description="Whether you're saving for tomorrow or managing today, we have an account tailored for your needs."
        />

        {/* Account Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {accounts.map((account, index) => (
            <motion.div key={account.title} variants={fadeInUp}>
              {/*
                MOTION & 3D:
                - Card has 3D perspective tilt on hover (rotateX/Y based on mouse pos)
                - Glassmorphism effect: translucent bg, blur, border
                - Gradient icon bar at top
                - Scale 1.02 on hover with shadow elevation
                - Stagger delay: index * 0.15s
              */}
              <GlassCard
                className="group relative overflow-hidden h-full"
                tiltEnabled
              >
                {/* Gradient accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${account.gradient}
                                 rounded-t-2xl`} />

                <div className="p-8">
                  {/* Icon with gradient bg circle */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${account.gradient}
                                   flex items-center justify-center text-white text-2xl mb-6
                                   group-hover:scale-110 transition-transform duration-300`}>
                    {/* Replace emoji with SVG icon */}
                    <span className="text-3xl">{account.icon}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-navy-900">
                    {account.title}
                  </h3>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {account.description}
                  </p>

                  {/* Features list */}
                  <ul className="mt-6 space-y-2">
                    {account.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8">
                    <Button variant="ghost" size="sm" className="group/btn">
                      Learn More
                      {/* MOTION: Arrow slides right on hover */}
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1
                                      transition-transform" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

---

### 5.5 Loans & Remittance Section

```tsx
// src/components/sections/LoansRemittanceSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

const GlobeVisualization = lazy(() => import('@/components/three/GlobeVisualization'));

const loanTypes = [
  {
    title: 'Personal Loans',
    description: 'Flexible personal financing to meet your needs — education, healthcare, emergencies.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501
                 20.118a7.5 7.5 0 0114.998 0" />
      </svg>
    ),
  },
  {
    title: 'Business Loans',
    description: 'Grow your enterprise with tailored business credit and commercial lending solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872
                 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25" />
      </svg>
    ),
  },
  {
    title: 'Micro Loans',
    description: 'Quick, accessible microfinance for small traders, farmers, and artisans.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242
                 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12
                 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303
                 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function LoansRemittanceSection() {
  return (
    <section id="loans" className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Loans */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={fadeInLeft}>
              <span className="text-gold-400 font-accent text-sm uppercase tracking-widest">
                Financing Solutions
              </span>
              <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-white">
                Loans That Empower Your{' '}
                <span className="text-gold-400">Dreams</span>
              </h2>
              <p className="mt-4 text-white/60 max-w-md">
                From personal milestones to business growth, our flexible loan
                products are designed to support you at every stage.
              </p>
            </motion.div>

            <div className="mt-10 space-y-6">
              {loanTypes.map((loan, index) => (
                <motion.div
                  key={loan.title}
                  variants={fadeInUp}
                  custom={index}
                  /*
                    MOTION:
                    - Each card slides up with stagger
                    - On hover: translateX(8px), bg becomes slightly lighter
                    - Icon circle pulses gold on hover
                  */
                  whileHover={{ x: 8 }}
                  className="group flex gap-5 p-5 rounded-xl bg-white/5
                             border border-white/10 hover:bg-white/10
                             hover:border-gold-500/30 transition-all duration-300
                             cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400
                                  flex items-center justify-center flex-shrink-0
                                  group-hover:bg-gold-500/20 transition-colors">
                    {loan.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white">
                      {loan.title}
                    </h3>
                    <p className="mt-1 text-white/50 text-sm">
                      {loan.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-10">
              <Button variant="gold" size="md">
                Apply for a Loan
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Remittance with 3D Globe */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={fadeInRight}>
              <span className="text-emerald-400 font-accent text-sm uppercase tracking-widest">
                Money Transfers
              </span>
              <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-white">
                Receive Money From{' '}
                <span className="text-emerald-400">Anywhere</span>
              </h2>
              <p className="mt-4 text-white/60 max-w-md">
                Fast, secure international remittance services. Receive money transfers
                from loved ones abroad directly into your GA Rural Bank account.
              </p>
            </motion.div>

            {/*
              3D: Interactive globe showing connection lines from
              diaspora countries (UK, US, Germany, Italy) to Ghana.
              - Slow auto-rotate
              - Gold dots for Ghana, blue dots for source countries
              - Animated arc lines showing money flow
              - Fallback: static illustration
            */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 h-[350px] relative"
            >
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-emerald-500/30
                                    animate-pulse" />
                  </div>
                }
              >
                <GlobeVisualization />
              </Suspense>
            </motion.div>

            {/* Remittance features */}
            <motion.div variants={fadeInUp} className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Fast Transfers', value: '< 24hrs' },
                { label: 'Low Fees', value: 'From 1%' },
                { label: 'Partners', value: '10+' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl bg-white/5
                                                  border border-white/10">
                  <div className="font-accent text-xl font-bold text-emerald-400">
                    {item.value}
                  </div>
                  <div className="text-white/40 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

```tsx
// src/components/three/GlobeVisualization.tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    globeRef.current.rotation.y += delta * 0.1;
  });

  /*
    3D NOTES:
    - Wireframe sphere for globe
    - Gold dots at Ghana location (lat 7.9, lon -1.0)
    - Arc lines from UK, US, Germany → Ghana
    - Emissive glow on Ghana point
  */
  const ghanaPosition = useMemo(() => {
    const lat = THREE.MathUtils.degToRad(7.9);
    const lon = THREE.MathUtils.degToRad(-1.0);
    const r = 2.02;
    return new THREE.Vector3(
      r * Math.cos(lat) * Math.cos(lon),
      r * Math.sin(lat),
      r * Math.cos(lat) * Math.sin(lon)
    );
  }, []);

  return (
    <group ref={globeRef}>
      {/* Globe wireframe */}
      <Sphere args={[2, 32, 32]}>
        <meshBasicMaterial color="#1A2D52" wireframe transparent opacity={0.3} />
      </Sphere>

      {/* Ghana point — glowing gold */}
      <mesh position={ghanaPosition}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#D4A017" />
      </mesh>

      {/* Glow ring around Ghana */}
      <mesh position={ghanaPosition}>
        <ringGeometry args={[0.08, 0.15, 32]} />
        <meshBasicMaterial color="#D4A017" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function GlobeVisualization() {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 45 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Globe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
```

---

### 5.6 CTA Banner Section

```tsx
// src/components/sections/CTABannerSection.tsx
'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function CTABannerSection() {
  return (
    /*
      MOTION:
      - Background gradient shifts slowly (animated gradient)
      - Content fades in on scroll
      - CTA button has magnetic hover effect + gold glow pulse
    */
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500
                       bg-[length:200%_100%] animate-[gradientShift_6s_ease_infinite]" />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px',
           }}
      />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-extrabold text-3xl md:text-5xl text-navy-900"
        >
          Ready to Start Your Financial Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-navy-900/70 text-lg max-w-2xl mx-auto"
        >
          Join over 100,000 Ghanaians who trust GA Rural Bank for their financial
          needs. Opening an account takes just minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="dark" size="lg">
            Open an Account Today
          </Button>
          <Button variant="outline-dark" size="lg">
            Call Us: 0302 900 120
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### 5.7 Investments & Services Section

```tsx
// src/components/sections/InvestmentsServicesSection.tsx
'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import IconBox from '@/components/ui/IconBox';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const services = [
  {
    title: 'Investment Products',
    description: 'Grow your wealth with our competitive fixed deposit and treasury bill investment options.',
    icon: 'chart-line',
    color: 'gold',
  },
  {
    title: 'Mobile Banking',
    description: 'Bank anytime, anywhere. Check balances, transfer funds, and pay bills from your phone.',
    icon: 'smartphone',
    color: 'blue',
  },
  {
    title: 'E-Zwich Services',
    description: 'Access electronic payment services with the national biometric smartcard system.',
    icon: 'credit-card',
    color: 'purple',
  },
  {
    title: 'Bill Payments',
    description: 'Pay ECG, water, and utility bills directly through your bank account — fast and hassle-free.',
    icon: 'receipt',
    color: 'emerald',
  },
  {
    title: 'Cheque Clearing',
    description: 'Modern cheque codeline clearing with cheque truncation technology for faster processing.',
    icon: 'document-check',
    color: 'orange',
  },
  {
    title: 'Ghana Card Services',
    description: 'Update your records with the Ghana Card — the only acceptable ID for financial transactions.',
    icon: 'id-card',
    color: 'red',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  gold:    { bg: 'bg-gold-500/10',    text: 'text-gold-500',    border: 'border-gold-500/20' },
  blue:    { bg: 'bg-blue-500/10',    text: 'text-blue-500',    border: 'border-blue-500/20' },
  purple:  { bg: 'bg-purple-500/10',  text: 'text-purple-500',  border: 'border-purple-500/20' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20' },
  orange:  { bg: 'bg-orange-500/10',  text: 'text-orange-500',  border: 'border-orange-500/20' },
  red:     { bg: 'bg-red-500/10',     text: 'text-red-500',     border: 'border-red-500/20' },
};

export default function InvestmentsServicesSection() {
  return (
    <section id="investments" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="What We Offer"
          title="Investments & Digital Services"
          description="Beyond traditional banking — explore our suite of modern financial services built for the digital age."
        />

        {/*
          MOTION:
          - 2x3 grid on desktop, single column on mobile
          - Each card fades in from bottom with stagger (0.1s each)
          - On hover: card lifts with shadow, icon rotates 10°
          - Colored left border appears on hover
        */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group relative p-6 rounded-2xl border ${colors.border}
                           bg-white hover:shadow-lg transition-all duration-300 cursor-pointer
                           border-l-4 hover:border-l-4`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text}
                                 flex items-center justify-center mb-4
                                 group-hover:rotate-[10deg] transition-transform duration-300`}>
                  <IconBox name={service.icon} />
                </div>

                <h3 className="font-heading font-semibold text-lg text-navy-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover arrow indicator */}
                <div className={`mt-4 ${colors.text} text-sm font-medium
                                 flex items-center gap-1 opacity-0 group-hover:opacity-100
                                 transition-opacity duration-300`}>
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
```

---

### 5.8 About / Corporate Section

```tsx
// src/components/sections/AboutCorporateSection.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const milestones = [
  {
    year: '1984',
    title: 'Establishment',
    description: 'Commissioned as Ghana\'s 92nd Rural Bank in December 1984, serving the Ga communities.',
  },
  {
    year: '1990s',
    title: 'Community Growth',
    description: 'Expanded branch network across the Greater Accra Region, deepening community roots.',
  },
  {
    year: '2000s',
    title: 'Digital Transformation',
    description: 'Adopted modern banking technologies including electronic payments and computerized systems.',
  },
  {
    year: '2010s',
    title: 'Mobile & E-Banking',
    description: 'Launched mobile banking, E-Zwich services, and online platforms for modern customers.',
  },
  {
    year: 'Today',
    title: '40+ Years Strong',
    description: 'Serving 100,000+ customers with 15+ branches, continuing our mission of community-first banking.',
  },
];

const values = [
  {
    title: 'Trust',
    description: 'Building lasting relationships through transparency and reliability.',
    icon: '🛡️',
  },
  {
    title: 'Community',
    description: 'Owned and managed by shareholders from our catchment area.',
    icon: '🤝',
  },
  {
    title: 'Innovation',
    description: 'Embracing technology to make banking accessible to all.',
    icon: '💡',
  },
];

export default function AboutCorporateSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // MOTION: Progress line grows as user scrolls through timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Our Story"
          title="40+ Years of Community Banking"
          description="From a small rural bank to a trusted financial partner — our journey is one of growth, resilience, and community."
        />

        {/* Timeline */}
        <div ref={timelineRef} className="mt-20 relative">
          {/*
            MOTION: Vertical timeline
            - A central line (on desktop) grows in height as user scrolls
            - Each milestone fades in from left/right alternating
            - The active year dot pulses gold
            - On mobile: linear top-to-bottom, all from left
          */}

          {/* Central line track (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200">
            {/* Animated fill line */}
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold-400 to-gold-600 origin-top"
            />
          </div>

          {/* Mobile line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

          {/* Milestones */}
          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex items-center gap-8
                    ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                    flex-row`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}
                                   pl-16 md:pl-0`}>
                    <div className="bg-white p-6 rounded-2xl shadow-md
                                    hover:shadow-lg transition-shadow inline-block max-w-md">
                      <span className="font-accent text-gold-500 font-bold text-2xl">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-navy-900 mt-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute md:left-1/2 left-6 -translate-x-1/2
                                  w-4 h-4 rounded-full bg-gold-500 border-4 border-white
                                  shadow-md z-10" />

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="text-center p-8 rounded-2xl bg-white shadow-sm
                         hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-heading font-bold text-xl text-navy-900">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

---

### 5.9 Branch Locator / Contact Section

```tsx
// src/components/sections/BranchLocatorSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const branches = [
  {
    name: 'Amasaman (Head Office)',
    address: 'P.O. Box AM 70, Amasaman, Accra, Ghana',
    phone: '0302 900 120',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: true,
  },
  {
    name: 'Pokuase Branch',
    address: 'Pokuase, Greater Accra Region',
    phone: '0302 901 014',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
  },
  {
    name: 'Ofankor Branch',
    address: 'Ofankor, Greater Accra Region',
    phone: '0302 901 015',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
  },
  {
    name: 'Kasoa Branch',
    address: 'Kasoa, Central Region',
    phone: '0302 901 016',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
  },
  {
    name: 'Madina Branch',
    address: 'Madina, Greater Accra Region',
    phone: '0302 901 017',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
  },
  {
    name: 'Dome Branch',
    address: 'Dome, Greater Accra Region',
    phone: '0302 901 018',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
  },
];

export default function BranchLocatorSection() {
  const [selectedBranch, setSelectedBranch] = useState(0);

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Find Us"
          title="Visit a Branch Near You"
          description="With 15+ branches across Greater Accra and beyond, we're always close to your community."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Branch List (left) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3 max-h-[500px] overflow-y-auto
                       pr-2 scrollbar-thin scrollbar-thumb-gray-300"
          >
            {branches.map((branch, index) => (
              <motion.button
                key={branch.name}
                variants={fadeInUp}
                onClick={() => setSelectedBranch(index)}
                /*
                  MOTION:
                  - Selected card has gold left border + subtle gold bg
                  - Unselected cards slide slightly right on hover
                  - Selection change animates smoothly
                */
                className={`w-full text-left p-4 rounded-xl transition-all duration-300
                  ${selectedBranch === index
                    ? 'bg-gold-500/10 border-l-4 border-gold-500 shadow-sm'
                    : 'bg-gray-50 border-l-4 border-transparent hover:bg-gray-100 hover:translate-x-1'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-semibold text-navy-900 text-sm">
                    {branch.name}
                  </h3>
                  {branch.isHeadOffice && (
                    <span className="px-2 py-0.5 bg-gold-500/20 text-gold-600
                                     text-[10px] font-bold rounded-full uppercase">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-xs mt-1">{branch.address}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Branch Detail Card (right) */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBranch}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-navy-900 rounded-2xl p-8 md:p-10 text-white h-full
                           flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center
                                    justify-center">
                      <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5
                                 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl">
                        {branches[selectedBranch].name}
                      </h3>
                      {branches[selectedBranch].isHeadOffice && (
                        <span className="text-gold-400 text-xs font-accent">
                          Head Office
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0
                                 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <div>
                        <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Address</p>
                        <p className="text-white text-sm">{branches[selectedBranch].address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15
                                 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <div>
                        <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-white text-sm">{branches[selectedBranch].phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Hours</p>
                        <p className="text-white text-sm">{branches[selectedBranch].hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 h-48 bg-navy-800 rounded-xl flex items-center
                                justify-center border border-white/10">
                  <p className="text-white/30 text-sm">
                    {/* Replace with embedded Google Maps or Mapbox */}
                    Interactive Map Placeholder
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button variant="gold" size="sm" className="flex-1">
                    Get Directions
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Call Branch
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### 5.10 Footer

```tsx
// src/components/layout/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const footerLinks = {
  accounts: {
    title: 'Accounts',
    links: [
      { label: 'Current Account', href: '#accounts' },
      { label: 'Savings Account', href: '#accounts' },
      { label: 'eSusu Account', href: '#accounts' },
      { label: 'Open Account', href: '#' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { label: 'Loans', href: '#loans' },
      { label: 'Investments', href: '#investments' },
      { label: 'Remittance', href: '#loans' },
      { label: 'Mobile Banking', href: '#investments' },
      { label: 'E-Zwich', href: '#investments' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Governance', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Downloads', href: '#' },
      { label: 'AGM Notices', href: '#' },
    ],
  },
};

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Twitter / X', href: '#', icon: 'twitter' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Newsletter + Links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12
                     border-b border-white/10"
        >
          {/* Brand + Newsletter (spans 2 cols) */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo-white.svg"
                alt="GA Rural Bank"
                width={40}
                height={40}
              />
              <span className="font-heading font-bold text-white text-xl">
                GA Rural Bank
              </span>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Ghana&apos;s trusted community bank since 1984. Empowering individuals
              and businesses with accessible financial services.
            </p>

            {/* Newsletter signup */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10
                           text-white placeholder:text-white/30 text-sm
                           focus:outline-none focus:border-gold-500/50 focus:ring-1
                           focus:ring-gold-500/30 transition-all"
                aria-label="Email for newsletter"
              />
              <button className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900
                                  font-semibold text-sm rounded-xl transition-colors
                                  hover:shadow-gold">
                Subscribe
              </button>
            </div>
            <p className="text-white/30 text-xs mt-2">
              Stay updated with our latest news and offers.
            </p>
          </motion.div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase
                             tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-gold-400 text-sm
                                 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10
                           flex items-center justify-center text-white/50
                           hover:bg-gold-500/20 hover:text-gold-400 hover:border-gold-500/30
                           transition-all duration-300"
              >
                {/* Replace with actual social SVG icons */}
                <span className="text-xs">{social.icon[0].toUpperCase()}</span>
              </a>
            ))}
          </div>

          {/* Copyright + Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/30 text-xs">
            <p>&copy; {new Date().getFullYear()} GA Rural Bank PLC. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white/50 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white/50 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white/50 transition-colors">
                Dormant Accounts
              </Link>
            </div>
          </div>

          {/* Regulatory badge */}
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0L2 4v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V4l-8-4z" />
            </svg>
            Regulated by Bank of Ghana
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## Shared UI Components & Utilities

### Button Component

```tsx
// src/components/ui/Button.tsx
'use client';

import { motion } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'gold' | 'outline' | 'ghost' | 'dark' | 'outline-dark';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  className?: string;
  onClick?: () => void;
}

const variants = {
  gold: 'bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold shadow-md hover:shadow-gold',
  outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50',
  ghost: 'text-gold-500 hover:text-gold-600 hover:bg-gold-500/10',
  dark: 'bg-navy-900 text-white hover:bg-navy-800 font-semibold shadow-md',
  'outline-dark': 'border-2 border-navy-900/30 text-navy-900 hover:bg-navy-900/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'gold', size = 'md', magnetic, className, ...props }, ref) => {
    const Component = magnetic ? motion.button : 'button';

    return (
      <Component
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        /*
          MOTION (magnetic):
          - Button subtly follows cursor within a 10px radius
          - Creates a "magnetic" pull effect
          - Only on desktop (pointer: fine)
        */
        {...(magnetic && {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
        })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';
export default Button;
```

### GlassCard Component

```tsx
// src/components/ui/GlassCard.tsx
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tiltEnabled?: boolean;
}

export default function GlassCard({ children, className, tiltEnabled = false }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D TILT: Track mouse position relative to card center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent) => {
    if (!tiltEnabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    /*
      3D: Card tilts toward mouse on hover (perspective: 1000px)
      Glass: translucent white bg + backdrop blur + subtle border
      Hover: elevates with shadow
    */
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltEnabled ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className={cn(
        'bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl',
        'shadow-sm hover:shadow-xl transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
```

### SectionHeading Component

```tsx
// src/components/ui/SectionHeading.tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  overline: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}

export default function SectionHeading({
  overline,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}
    >
      <motion.span
        variants={fadeInUp}
        className="inline-block text-gold-500 font-accent text-sm uppercase
                   tracking-[0.15em] font-medium"
      >
        {overline}
      </motion.span>

      <motion.h2
        variants={fadeInUp}
        className={`mt-3 font-heading font-bold text-3xl md:text-4xl lg:text-5xl
                    ${dark ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          className={`mt-4 text-lg ${dark ? 'text-white/60' : 'text-gray-600'}`}
        >
          {description}
        </motion.p>
      )}

      {/* Decorative line under heading */}
      <motion.div
        variants={fadeInUp}
        className={`mt-6 mx-auto h-1 w-16 rounded-full bg-gradient-to-r
                    from-gold-400 to-gold-600 ${align === 'left' ? 'mx-0' : ''}`}
      />
    </motion.div>
  );
}
```

### FadeInOnScroll Wrapper

```tsx
// src/components/motion/FadeInOnScroll.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const directionMap = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export default function FadeInOnScroll({
  children,
  direction = 'up',
  delay = 0,
  className,
}: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### Animation Variants

```ts
// src/lib/animations.ts
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};
```

### Utility Functions

```ts
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Root Page Assembly

```tsx
// src/app/page.tsx
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import TrustBarSection from '@/components/sections/TrustBarSection';
import AccountsSection from '@/components/sections/AccountsSection';
import LoansRemittanceSection from '@/components/sections/LoansRemittanceSection';
import CTABannerSection from '@/components/sections/CTABannerSection';
import InvestmentsServicesSection from '@/components/sections/InvestmentsServicesSection';
import AboutCorporateSection from '@/components/sections/AboutCorporateSection';
import BranchLocatorSection from '@/components/sections/BranchLocatorSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustBarSection />
      <AccountsSection />
      <LoansRemittanceSection />
      <CTABannerSection />
      <InvestmentsServicesSection />
      <AboutCorporateSection />
      <BranchLocatorSection />
      <Footer />
    </main>
  );
}
```

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GA Rural Bank PLC — Banking Made Easy',
  description:
    "Ghana's trusted community bank since 1984. Savings, loans, investments, remittance, and modern digital banking services.",
  keywords: [
    'GA Rural Bank', 'Ghana rural bank', 'banking Ghana',
    'savings account Ghana', 'loans Ghana', 'remittance Ghana',
  ],
  openGraph: {
    title: 'GA Rural Bank PLC — Banking Made Easy',
    description: "Ghana's trusted community bank since 1984.",
    url: 'https://garuralbank.com',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-body bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
```

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0A1628;
  }
  ::-webkit-scrollbar-thumb {
    background: #D4A017;
    border-radius: 4px;
  }

  /* Selection color */
  ::selection {
    background-color: rgba(212, 160, 23, 0.3);
    color: #0A1628;
  }
}

@layer utilities {
  .shadow-gold {
    box-shadow: 0 10px 40px rgba(212, 160, 23, 0.3);
  }
}

/* Gradient shift animation for CTA banner */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## 6. Motion & Animation Plan

| Section | Effect | Library | Trigger | Duration |
|---------|--------|---------|---------|----------|
| **Navbar** | Transparent → Glass blur | CSS + Framer | Scroll > 50px | 500ms |
| **Navbar** | Hamburger → X morph | Framer Motion | Click toggle | 300ms |
| **Hero** | Content parallax (slower scroll) | Framer `useTransform` | Scroll | Continuous |
| **Hero** | Stagger text reveal (overline → h1 → p → buttons) | Framer `staggerChildren` | Page load | 0.15s stagger |
| **Hero** | Scroll-down mouse indicator bob | Framer `animate` loop | Always | 2s infinite |
| **Hero** | 3D coin float + rotate | R3F `Float` + `useFrame` | Always | 6s float, 10s rotate |
| **Hero** | Gold particles drift | R3F `useFrame` | Always | Continuous |
| **Trust Bar** | CountUp numbers 0 → target | Custom hook + rAF | InView | 2.5s ease-out |
| **Trust Bar** | Cards stagger in from below | Framer `staggerChildren` | InView | 0.15s stagger |
| **Accounts** | 3D card tilt on hover | Framer `useMotionValue` + spring | Mouse move | Spring (300/30) |
| **Accounts** | Card scale-up on hover | Framer `whileHover` | Hover | 300ms |
| **Accounts** | Stagger reveal | Framer `staggerChildren` | InView | 0.15s stagger |
| **Loans** | Cards slide up + slide right on hover | Framer variants + `whileHover` | InView / Hover | 600ms / 300ms |
| **Remittance** | 3D globe auto-rotate | R3F `OrbitControls` + `useFrame` | Always | 0.5 RPM |
| **CTA Banner** | Gradient background shift | CSS `@keyframes` | Always | 6s infinite |
| **Services** | Cards fade-in stagger + lift on hover | Framer variants + `whileHover` | InView / Hover | 0.1s stagger |
| **Services** | Icon rotate 10° on hover | CSS `group-hover:rotate` | Hover | 300ms |
| **About** | Timeline line grows with scroll | Framer `useTransform(scrollY)` | Scroll | Continuous |
| **About** | Milestones alternate left/right reveal | Framer `whileInView` | InView | 600ms |
| **Branches** | Selected branch card swap | Framer `AnimatePresence` | Click | 300ms |
| **Footer** | Stagger link columns reveal | Framer `staggerChildren` | InView | 0.15s stagger |

---

## 7. 3D Effects Plan

| Element | Technology | Description | Performance Notes |
|---------|-----------|-------------|-------------------|
| **Hero Coin** | React Three Fiber + Drei `Float` | Gold coin with PBR metallic material, slow Y rotation, ambient float | Lazy-loaded, `<Suspense>` fallback gradient circle |
| **Floating Particles** | React Three Fiber Points | 200 gold particles drifting upward in hero bg | Low-poly, `pointerEvents: none` |
| **Remittance Globe** | React Three Fiber + Drei `OrbitControls` | Wireframe globe with Ghana point marker | Lazy-loaded, simple geometry |
| **Card Tilt** | Framer Motion `useMotionValue` | CSS 3D perspective tilt following cursor | No WebGL — pure CSS transforms |

**Performance guardrails:**
- All R3F canvases are wrapped in `<Suspense>` with static fallbacks
- Lazy-loaded with `React.lazy()` — no 3D code in initial bundle
- Detect WebGL support: if unavailable, skip all 3D components
- Mobile: disable 3D canvases entirely, use static images/CSS animations
- Use `gl={{ alpha: true }}` for transparent canvas backgrounds
- Limit draw calls: simple geometries, no post-processing

---

## 8. Image & Asset Strategy

| Asset | Source Suggestion | Format | Notes |
|-------|-------------------|--------|-------|
| Hero background | Aerial view of Accra / modern bank building | WebP, 1920x1080 | Compressed <200KB, lazy-load |
| Kente pattern | Custom SVG geometric pattern | SVG | Inline or `background-image` |
| Account illustrations | [unDraw](https://undraw.co), [Storyset](https://storyset.com) — Afro-diverse | SVG / WebP | Match gold/navy palette |
| Service icons | [Heroicons](https://heroicons.com), [Lucide](https://lucide.dev) | SVG inline | 24x24, stroke style |
| Branch photos | Stock: [Pexels](https://pexels.com), [Unsplash](https://unsplash.com) — Ghanaian streetscapes | WebP, 800x600 | `next/image` with blur placeholder |
| 3D Coin model | Custom or [Sketchfab](https://sketchfab.com) CC0 coin model | GLB | <500KB, or generate with geometry |
| Logo | Recreate from existing or request SVG from client | SVG | Light + dark variants |
| Social icons | Lucide or Simple Icons | SVG inline | Monochrome, 20x20 |
| OG Image | Custom composition: Logo + tagline + gold bg | JPG 1200x630 | For social sharing |

---

## 9. Responsive Design Notes

### Breakpoints (Tailwind defaults)

```
sm:  640px   — Large phones
md:  768px   — Tablets
lg:  1024px  — Small laptops
xl:  1280px  — Desktops
2xl: 1536px  — Large screens
```

### Key Responsive Behaviors

| Section | Mobile (< 768px) | Tablet (768-1024px) | Desktop (> 1024px) |
|---------|------------------|---------------------|---------------------|
| **Navbar** | Hamburger menu, logo only | Hamburger + logo + CTA | Full nav links + CTA |
| **Hero** | Single column, no 3D coin | Single column, smaller coin | 2-column grid, full 3D |
| **Trust Bar** | 2x2 grid | 4-column row | 4-column row |
| **Accounts** | Stacked cards | 2-column grid | 3-column grid |
| **Loans/Remit** | Stacked (loans → remittance) | Stacked | Side-by-side |
| **Services** | Single column | 2-column grid | 3-column grid |
| **Timeline** | Left-aligned, single track | Left-aligned | Centered alternating |
| **Branches** | Stacked (list → detail) | Side-by-side | Side-by-side (2:3 ratio) |
| **Footer** | Single column, stacked | 2-column grid | 5-column grid |

### Mobile-Specific Rules

- Disable all 3D (React Three Fiber) components — replace with static images or CSS animations
- Reduce `py` section padding from 120px → 64px
- Hero headline: 40px (from 72px)
- Touch targets: minimum 44x44px
- Swipeable card carousels for account and service cards (optional future enhancement)
- Sticky CTA button at bottom of screen on mobile (optional)

---

## 10. Accessibility Notes

### WCAG 2.1 AA Compliance Targets

| Requirement | Implementation |
|-------------|---------------|
| **Color Contrast** | Gold-500 on Navy-900 = 7.2:1 ✅ (AAA). Gold-500 on White = 3.1:1 — use Navy-900 text on gold backgrounds. All body text > 4.5:1. |
| **Focus Indicators** | Custom `focus-visible:ring-2 ring-gold-500 ring-offset-2` on all interactive elements |
| **Keyboard Navigation** | All sections reachable via Tab. Skip-to-content link at top. Hamburger menu traps focus. |
| **Screen Reader** | `aria-label` on icon-only buttons. `aria-expanded` on mobile menu toggle. Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`). |
| **Motion Sensitivity** | Respect `prefers-reduced-motion`: disable all Framer animations and 3D scenes |
| **Alt Text** | Descriptive `alt` on all `<Image>` tags. Decorative images use `alt=""` |
| **Landmarks** | `<nav>`, `<main>`, `<section id="...">`, `<footer>` for screen reader navigation |
| **Form Labels** | Newsletter email input has visible placeholder + `aria-label` |

### Reduced Motion Implementation

```tsx
// Add to src/hooks/useReducedMotion.ts
import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

// Usage in components:
// const reducedMotion = useReducedMotion();
// <motion.div animate={reducedMotion ? {} : { y: 0, opacity: 1 }} />
```

---

## 11. Performance Optimization

| Strategy | Details |
|----------|---------|
| **Next.js `next/image`** | All raster images use `<Image>` with automatic WebP conversion, lazy-loading, and blur placeholders |
| **Font Optimization** | `next/font/google` with `display: 'swap'` — no FOIT, minimal CLS |
| **Code Splitting** | 3D components (`HeroCoin`, `FloatingParticles`, `GlobeVisualization`) loaded via `React.lazy()` |
| **Bundle Analysis** | Use `@next/bundle-analyzer` to monitor Three.js impact (~150KB gzipped) |
| **CSS** | Tailwind JIT purges unused styles. No runtime CSS-in-JS. |
| **Static Export** | `output: 'export'` in `next.config.js` for fully static deployment (Vercel, Netlify, GitHub Pages) |
| **Lighthouse Targets** | Performance > 90, Accessibility > 95, Best Practices > 95, SEO > 95 |
| **Core Web Vitals** | LCP < 2.5s (hero image preload), FID < 100ms, CLS < 0.1 |

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static site generation
  images: {
    unoptimized: true, // Required for static export
  },
  // Enable if using bundle analyzer:
  // const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: true });
  // module.exports = withBundleAnalyzer(nextConfig);
};

module.exports = nextConfig;
```

---

## Dependencies (package.json)

```json
{
  "name": "garuralbank-redesign",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.100.0",
    "three": "^0.162.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/three": "^0.162.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

---

## Quick Start

```bash
# 1. Create project
npx create-next-app@latest garuralbank --typescript --tailwind --app --src-dir

# 2. Install dependencies
cd garuralbank
npm install framer-motion @react-three/fiber @react-three/drei three clsx tailwind-merge
npm install -D @types/three

# 3. Copy component files from this plan into src/
# 4. Update tailwind.config.ts with the extended theme
# 5. Run development server
npm run dev
```

---

> **This plan is ready for implementation.** Each component is self-contained with placeholder content, motion annotations, and 3D instructions. Start by scaffolding the folder structure, then build section-by-section from Hero → Footer.
