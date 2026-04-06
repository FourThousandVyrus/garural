'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import IconBox from '@/components/ui/IconBox';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const services = [
  { title: 'Investment Products', description: 'Grow your wealth with competitive fixed deposit and treasury bill investment options.', icon: 'chart-line', color: 'gold' },
  { title: 'Mobile Banking', description: 'Bank anytime, anywhere. Check balances, transfer funds, and pay bills from your phone.', icon: 'smartphone', color: 'blue' },
  { title: 'E-Zwich Services', description: 'Access electronic payment services with the national biometric smartcard system.', icon: 'credit-card', color: 'purple' },
  { title: 'Bill Payments', description: 'Pay ECG, water, and utility bills directly through your bank account — fast and hassle-free.', icon: 'receipt', color: 'emerald' },
  { title: 'Cheque Clearing', description: 'Modern cheque codeline clearing with cheque truncation technology for faster processing.', icon: 'document-check', color: 'orange' },
  { title: 'Ghana Card Services', description: 'Update your records with the Ghana Card — the only acceptable ID for financial transactions.', icon: 'id-card', color: 'red' },
];

const colorMap: Record<string, { bg: string; text: string; border: string; borderHover: string }> = {
  gold:    { bg: 'bg-[#D4A017]/10', text: 'text-[#D4A017]', border: 'border-[#D4A017]/20', borderHover: 'hover:border-l-[#D4A017]' },
  blue:    { bg: 'bg-blue-500/10',  text: 'text-blue-500',  border: 'border-blue-500/20',  borderHover: 'hover:border-l-blue-500' },
  purple:  { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500/20', borderHover: 'hover:border-l-purple-500' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20', borderHover: 'hover:border-l-emerald-500' },
  orange:  { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500/20', borderHover: 'hover:border-l-orange-500' },
  red:     { bg: 'bg-red-500/10',   text: 'text-red-500',   border: 'border-red-500/20',   borderHover: 'hover:border-l-red-500' },
};

export default function InvestmentsServicesSection() {
  return (
    <section id="investments" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="What We Offer"
          title="Investments & Digital Services"
          description="Beyond traditional banking — explore our suite of modern financial services built for the digital age."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group relative p-6 rounded-2xl border ${colors.border} bg-white hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${colors.borderHover}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 group-hover:rotate-[10deg] transition-transform duration-300`}>
                  <IconBox name={service.icon} />
                </div>

                <h3 className="font-semibold text-lg text-[#0A1628]">{service.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{service.description}</p>

                <div className={`mt-4 ${colors.text} text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
