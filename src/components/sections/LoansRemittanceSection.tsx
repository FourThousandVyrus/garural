'use client';

import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import Button from '@/components/ui/Button';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

const GlobeVisualization = lazy(() => import('@/components/three/GlobeVisualization'));

const loanTypes = [
  {
    title: 'Personal Loans',
    description: 'Flexible personal financing for education, healthcare, and emergencies.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
      </svg>
    ),
  },
  {
    title: 'Business Loans',
    description: 'Grow your enterprise with tailored business credit and commercial lending.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Micro Loans',
    description: 'Quick, accessible microfinance for small traders, farmers, and artisans.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function LoansRemittanceSection() {
  return (
    <section id="loans" className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#103d1e' }}>
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd400]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/6 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Loans */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={fadeInLeft}>
              <span className="text-[#F0C75E] text-sm uppercase tracking-widest">Financing Solutions</span>
              <h2 className="mt-4 font-bold text-3xl md:text-4xl text-white">
                Loans That Empower Your <span className="text-[#ffd400]">Plans</span>
              </h2>
              <p className="mt-4 text-white/60 max-w-md">
                From school fees to working capital, our loan products are designed for real everyday needs and backed by direct branch support.
              </p>
            </motion.div>

            <div className="mt-10 space-y-6">
              {loanTypes.map((loan, index) => (
                <motion.div
                  key={loan.title}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ x: 8 }}
                  className="group flex gap-5 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4A017]/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ffd400]/10 text-[#ffd400] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ffd400]/20 transition-colors">
                    {loan.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{loan.title}</h3>
                    <p className="mt-1 text-white/50 text-sm">{loan.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-10">
              <Button variant="gold" size="md">Speak to a Loan Officer</Button>
            </motion.div>

            {/* Lifestyle photo — TODO: Replace with actual photo of a Ghanaian trader or farmer customer */}
            <motion.div variants={fadeInUp} className="mt-8 relative rounded-2xl overflow-hidden h-52">
              <img
                src="https://picsum.photos/seed/garural-loans-market/700/350"
                alt="Small business owner supported by a Garural Bank loan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b15]/70 to-transparent" />
              <div className="absolute top-1/2 -translate-y-1/2 left-6 text-white">
                <p className="text-xs uppercase tracking-widest text-[#ffd400]">Real support</p>
                <p className="mt-1 text-lg font-bold leading-tight">For traders, farmers,<br />and families.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Remittance */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={fadeInRight}>
              <span className="text-[#ffd400] text-sm uppercase tracking-widest">Money Transfers</span>
              <h2 className="mt-4 font-bold text-3xl md:text-4xl text-white">
                Receive Money From <span className="text-[#ffd400]">Anywhere</span>
              </h2>
              <p className="mt-4 text-white/60 max-w-md">
                Fast, secure remittance support for customers receiving funds from family, partners, and loved ones at home or abroad.
              </p>
            </motion.div>

            {/* 3D Globe */}
            <motion.div variants={fadeInUp} className="mt-8 h-[350px] relative">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-emerald-500/30 animate-pulse" />
                  </div>
                }
              >
                <GlobeVisualization />
              </Suspense>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Fast Transfers', value: '< 24hrs' },
                { label: 'Low Fees', value: 'From 1%' },
                { label: 'Partners', value: '10+' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xl font-bold text-[#ffd400]">{item.value}</div>
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
