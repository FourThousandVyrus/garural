'use client';

import { motion } from 'framer-motion';
import FadeInOnScroll from '@/components/motion/FadeInOnScroll';
import { SITE_CONFIG } from '@/lib/constants';

const stats = [
  { value: '1984', label: 'Serving communities since' },
  { value: '6', label: 'Branches listed on site' },
  { value: SITE_CONFIG.mobileBankingCode, label: 'Mobile Banking shortcode' },
  { value: 'Mon-Fri', label: 'Customer support hours' },
];

export default function TrustBarSection() {
  return (
    <section className="relative -mt-20 z-20 max-w-6xl mx-auto px-4">
      <FadeInOnScroll>
        <div className="rounded-3xl border border-[#103d1e]/10 bg-white p-8 shadow-[0_20px_80px_rgba(16,61,30,0.08)] md:p-12">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#103d1e]">Trust at a glance</p>
              <h2 className="mt-2 text-3xl font-bold text-[#103d1e]">Built on local trust, not empty digital promises.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-gray-600">
              Garural Bank already offers Mobile Banking through USSD. The website now makes that service clearer, easier to understand, and easier to use.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-[#103d1e]/8 bg-[#fffbea] p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="text-2xl font-bold text-[#103d1e] md:text-4xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
