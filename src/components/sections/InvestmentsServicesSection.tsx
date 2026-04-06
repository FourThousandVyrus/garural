'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import IconBox from '@/components/ui/IconBox';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { SITE_CONFIG } from '@/lib/constants';

const services = [
  { title: 'Dial Once, Bank Fast', description: `Use ${SITE_CONFIG.mobileBankingCode} to access Mobile Banking on any phone, without an app or internet bundle.`, icon: 'smartphone', color: 'green' },
  { title: 'Balance & Transfers', description: 'Check balances, move funds, and stay in control when you are away from a branch.', icon: 'chart-line', color: 'gold' },
  { title: 'Bills & Airtime', description: 'Handle day-to-day needs from your phone, including airtime top-ups and supported bill payments.', icon: 'receipt', color: 'emerald' },
  { title: 'E-Zwich Services', description: 'Access electronic payment services with the national biometric smartcard system.', icon: 'credit-card', color: 'purple' },
  { title: 'Cheque & Branch Support', description: 'Use Mobile Banking for quick actions, then rely on nearby branches for deeper support.', icon: 'document-check', color: 'orange' },
  { title: 'Ghana Card Updates', description: 'Keep your records current with Ghana Card updates and branch-led onboarding support.', icon: 'id-card', color: 'red' },
];

const colorMap: Record<string, { bg: string; text: string; border: string; borderHover: string }> = {
  green:   { bg: 'bg-[#103d1e]/10', text: 'text-[#103d1e]', border: 'border-[#103d1e]/15', borderHover: 'hover:border-l-[#103d1e]' },
  gold:    { bg: 'bg-[#D4A017]/10', text: 'text-[#D4A017]', border: 'border-[#D4A017]/20', borderHover: 'hover:border-l-[#D4A017]' },
  blue:    { bg: 'bg-blue-500/10',  text: 'text-blue-500',  border: 'border-blue-500/20',  borderHover: 'hover:border-l-blue-500' },
  purple:  { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500/20', borderHover: 'hover:border-l-purple-500' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20', borderHover: 'hover:border-l-emerald-500' },
  orange:  { bg: 'bg-orange-500/10', text: 'text-orange-500', border: 'border-orange-500/20', borderHover: 'hover:border-l-orange-500' },
  red:     { bg: 'bg-red-500/10',   text: 'text-red-500',   border: 'border-red-500/20',   borderHover: 'hover:border-l-red-500' },
};

export default function InvestmentsServicesSection() {
  return (
    <section id="mobile-banking" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Mobile Banking"
          title="Mobile Banking That Works on the Phone You Already Have"
          description={`Garural Mobile Banking is powered by USSD. Dial ${SITE_CONFIG.mobileBankingCode} for fast access, then use branch support when you need help.`}
        />

        <div className="mt-12 rounded-3xl border border-[#103d1e]/10 bg-[#fffbea] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#103d1e]">How it works</p>
              <h3 className="mt-3 text-2xl font-bold text-[#103d1e] md:text-3xl">Call it Mobile Banking, feel the USSD speed.</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-700 md:text-base">
                Dial {SITE_CONFIG.mobileBankingCode}, follow the menu, confirm with your PIN, and complete everyday banking tasks without downloading anything.
              </p>
            </div>
            <div className="rounded-3xl bg-[#103d1e] p-5 text-white shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Quick start</p>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-white/90">
                <li>1. Dial {SITE_CONFIG.mobileBankingCode}</li>
                <li>2. Choose the service you need</li>
                <li>3. Confirm securely and get back to your day</li>
              </ol>
            </div>
          </div>
        </div>

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

                <h3 className="font-semibold text-lg text-[#103d1e]">{service.title}</h3>
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
