'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, Suspense, lazy } from 'react';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const HeroCoin = lazy(() => import('@/components/three/HeroCoin'));
const FloatingParticles = lazy(() => import('@/components/three/FloatingParticles'));

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0A1628' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#121F3D] to-[#0A1628]" />

      {/* Kente pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23D4A017' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A017]/10 rounded-full blur-[120px]" />

      {/* 3D Floating Particles */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <FloatingParticles />
        </Suspense>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left — Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/20 text-[#F0C75E] text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
              Established 1984 — Ghana&apos;s Trusted Community Bank
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-extrabold text-white leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Banking{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0C75E] to-[#B8860B]">
              Made Easy
            </span>
            <br />
            For Everyone.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-white/60 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0"
          >
            From savings to loans, investments to remittance — GA Rural Bank empowers communities
            across Ghana with accessible, modern financial services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
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
            className="mt-12 flex items-center gap-6 justify-center lg:justify-start text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
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

        {/* Right — 3D Coin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="w-[500px] h-[500px] relative">
            <Suspense
              fallback={
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F0C75E] to-[#B8860B] animate-pulse" />
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
            className="w-1.5 h-1.5 bg-[#D4A017] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
