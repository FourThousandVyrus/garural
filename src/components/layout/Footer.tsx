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
  { label: 'Facebook', icon: 'F' },
  { label: 'Twitter', icon: 'X' },
  { label: 'Instagram', icon: 'I' },
  { label: 'LinkedIn', icon: 'L' },
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
                <span className="text-xs font-bold">{social.icon}</span>
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
