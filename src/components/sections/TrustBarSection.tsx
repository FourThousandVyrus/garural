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
    <section className="relative -mt-20 z-20 max-w-6xl mx-auto px-4">
      <FadeInOnScroll>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#0A1628]">
                <CountUp end={stat.value} duration={2.5} />
                <span className="text-[#D4A017]">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </FadeInOnScroll>
    </section>
  );
}
