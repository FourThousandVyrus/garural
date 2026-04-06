'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, Suspense, lazy } from 'react';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

import { SITE_CONFIG } from '@/lib/constants';

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
      style={{ background: '#0b2b15' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,212,0,0.22),_transparent_32%),linear-gradient(140deg,_#0b2b15_0%,_#103d1e_48%,_#164e27_100%)]" />

      {/* Kente pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23D4A017' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#ffd400]/12 blur-[110px]" />

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
              <span className="w-2 h-2 bg-[#ffd400] rounded-full animate-pulse" />
              Established {SITE_CONFIG.established} - Mobile Banking via {SITE_CONFIG.mobileBankingCode}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-extrabold text-white leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Banking Built
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd400] to-[#fff3a3]">
              For Ghana
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-white/60 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0"
          >
            Trusted community banking for savers, families, traders, and growing businesses.
            Use Mobile Banking on any phone by dialing {SITE_CONFIG.mobileBankingCode}.
            No app required. No web banking confusion. Just direct access when you need it.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-white/85">
            {['Works on any phone', 'No internet required', 'Branch support available'].map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5">
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button variant="gold" size="lg" magnetic>
              Open an Account
            </Button>
            <Button variant="outline" size="lg">
              See How Mobile Banking Works
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
            <div>6 listed branches</div>
            <div className="w-px h-4 bg-white/20" />
            <div>40+ Years</div>
          </motion.div>
        </motion.div>

        {/* Right — Community photo + USSD card overlay */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="hidden lg:block relative"
        >
          {/* Community photo — TODO: Replace with actual Garural Bank community photo */}
          <div className="relative rounded-[32px] overflow-hidden aspect-[5/6] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
            <img
              src="https://picsum.photos/seed/ghana-community-banking/600/720"
              alt="Garural Bank community member using mobile banking"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b15]/80 via-transparent to-transparent" />

            {/* Floating USSD card — pinned bottom */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#fffbea]/95 backdrop-blur-md p-5 shadow-xl text-[#103d1e]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2e6b3f]">Mobile Banking</p>
                  <h3 className="mt-1 text-2xl font-bold">{SITE_CONFIG.mobileBankingCode}</h3>
                  <p className="mt-1 text-xs text-[#35553f]">Any phone. No internet needed.</p>
                </div>
                <span className="rounded-xl bg-[#103d1e] px-2.5 py-1 text-[10px] font-bold text-white">Live</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-medium text-[#35553f]">
                <div className="rounded-xl bg-[#f3f7ef] py-2.5">Zero app install</div>
                <div className="rounded-xl bg-[#f3f7ef] py-2.5">Any network</div>
                <div className="rounded-xl bg-[#f3f7ef] py-2.5">Branch backed</div>
              </div>
            </div>

            {/* Top-left trust badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-[#ffd400] px-3 py-1.5 text-[#103d1e] text-xs font-bold shadow-md">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0L2 4v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V4l-8-4z" />
              </svg>
              BoG Regulated · Since 1984
            </div>
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
            className="w-1.5 h-1.5 bg-[#ffd400] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
