'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const footerLinks = {
  accounts: {
    title: 'Accounts',
    links: [
      { label: 'Current Account', href: '#accounts' },
      { label: 'Savings Account', href: '#accounts' },
      { label: 'eSusu Account', href: '#accounts' },
      { label: 'Open Account', href: '#contact' },
    ],
  },
  services: {
    title: 'Mobile Banking',
    links: [
      { label: 'How It Works', href: '#mobile-banking' },
      { label: 'Dial *365*212#', href: '#mobile-banking' },
      { label: 'Bill Payments', href: '#mobile-banking' },
      { label: 'E-Zwich', href: '#mobile-banking' },
      { label: 'Need Help?', href: '#contact' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#about' },
      { label: 'Branches', href: '#branches' },
      { label: 'Loans', href: '#loans' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};

const pageLinks = [
  { label: 'Mobile Banking', href: '/mobile-banking' },
  { label: 'Our Services', href: '/services' },
  { label: 'Find a Branch', href: '/branches' },
];

const socialLinks = [
  {
    label: 'Facebook',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V12H8v3h2v6h3v-6h2.5l.5-3H13v-2.5c0-.28.22-.5.5-.5z" />
      </svg>
    ),
  },
  {
    label: 'X',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 4h4.2l4.35 6.2L17.8 4H20l-6.5 7.5L20 20h-4.2l-4.75-6.75L5.6 20H3.4l6.7-7.8L4 4z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7zm5 3.5A4.5 4.5 0 1112 18a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 16a2.5 2.5 0 000-5zm4.75-3a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 8.5A1.5 1.5 0 115 7a1.5 1.5 0 011.5 1.5zM5 10h3v9H5v-9zm5 0h2.86v1.29h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56V19h-3v-4.03c0-.96-.02-2.2-1.34-2.2-1.34 0-1.55 1.05-1.55 2.13V19h-3v-9z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0b2b15' }} className="pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10"
        >
          {/* Brand + Newsletter */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffd400] to-[#e4b700] flex items-center justify-center">
                <span className="text-[#103d1e] font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-white text-xl">GA Rural Bank PLC</span>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Ghana&apos;s trusted community bank since 1984. Open your account in branch, then access Mobile Banking by dialing *365*212# on any phone.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#ffd400]/50 focus:ring-1 focus:ring-[#ffd400]/30 transition-all"
                aria-label="Email for newsletter"
              />
              <button className="px-6 py-3 bg-[#ffd400] hover:bg-[#e4b700] text-[#103d1e] font-semibold text-sm rounded-xl transition-colors cursor-pointer">
                Subscribe
              </button>
            </div>
            <p className="text-white/30 text-xs mt-2">Stay updated with our latest news and offers.</p>
          </motion.div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-[#ffd400] text-sm transition-colors duration-200"
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
          {/* Quick page links */}
          <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-2 pb-4 border-b border-white/8 mb-2">
            {pageLinks.map((pl) => (
              <Link key={pl.label} href={pl.href} className="text-white/40 hover:text-[#ffd400] text-xs transition-colors">
                {pl.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#ffd400]/20 hover:text-[#ffd400] hover:border-[#ffd400]/30 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/30 text-xs">
            <p>&copy; {new Date().getFullYear()} GA Rural Bank PLC. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white/50 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white/50 transition-colors">Dormant Accounts</Link>
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
