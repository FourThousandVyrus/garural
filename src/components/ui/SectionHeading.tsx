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
        className="inline-block text-[#103d1e] font-sans text-sm uppercase tracking-[0.15em] font-semibold"
      >
        {overline}
      </motion.span>

      <motion.h2
        variants={fadeInUp}
        className={`mt-3 font-bold text-3xl md:text-4xl lg:text-5xl ${
          dark ? 'text-white' : 'text-[#103d1e]'
        }`}
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

      <motion.div
        variants={fadeInUp}
        className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#103d1e] via-[#2e6b3f] to-[#ffd400] ${
          align === 'left' ? '' : 'mx-auto'
        }`}
      />
    </motion.div>
  );
}
