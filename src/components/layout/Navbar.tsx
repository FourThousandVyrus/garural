'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl shadow-lg py-3'
            : 'backdrop-blur-md py-5'
        }`}
        style={
          scrolled
            ? {
                backgroundColor: 'rgba(255, 251, 234, 0.94)',
                borderBottom: '1px solid rgba(16, 61, 30, 0.08)',
              }
            : {
                backgroundColor: 'rgba(255, 251, 234, 0.82)',
                borderBottom: '1px solid rgba(16, 61, 30, 0.06)',
              }
        }
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffd400] to-[#e4b700] flex items-center justify-center shadow-sm">
              <span className="text-[#103d1e] font-bold text-lg">G</span>
            </div>
            <span className="hidden text-lg font-bold text-[#103d1e] sm:block">
              GA Rural Bank PLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-[#103d1e]/80 transition-colors duration-300 hover:text-[#103d1e] group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffd400] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="sm">Open an Account</Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="p-2 text-[#103d1e] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="block h-0.5 w-full origin-center bg-[#103d1e]"
                animate={mobileOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-full bg-[#103d1e]"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-full origin-center bg-[#103d1e]"
                animate={mobileOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
