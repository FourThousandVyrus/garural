'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function CTABannerSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #fff6bf, #ffd400, #f2d75e, #fff6bf)',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 6s ease infinite',
        }}
      />

      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
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
          className="font-extrabold text-3xl md:text-5xl text-[#0A1628]"
        >
          Ready to Bank with Confidence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-[#0A1628]/70 text-lg max-w-2xl mx-auto"
        >
          Open an account in branch, then activate Mobile Banking with {"*365*212#"} for fast access on the phone you already use every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="dark" size="lg">Open an Account Today</Button>
          <Button variant="outline-dark" size="lg">Dial *365*212#</Button>
        </motion.div>
      </div>
    </section>
  );
}
