'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants';

const faqs = [
  {
    question: 'Do I need a smartphone to use Mobile Banking?',
    answer: `No. Garural Mobile Banking works on any phone — basic feature phones included. Simply dial ${SITE_CONFIG.mobileBankingCode} and follow the menu. No internet connection, no data bundle, and no app download required.`,
  },
  {
    question: `What can I do with ${SITE_CONFIG.mobileBankingCode}?`,
    answer: 'You can check your account balance, transfer funds to other accounts, buy airtime, pay supported utility bills, and request support — all from a standard call menu on any phone.',
  },
  {
    question: 'How do I get started with Mobile Banking?',
    answer: `Visit any Garural Bank branch to open an account and register for Mobile Banking. Once your account is set up, dial ${SITE_CONFIG.mobileBankingCode} to activate and create your PIN. Branch staff will walk you through the process.`,
  },
  {
    question: 'Is my money safe on Mobile Banking?',
    answer: 'Yes. Every transaction requires your personal PIN. Garural Bank is licensed and regulated by the Bank of Ghana (BoG). If you suspect any unauthorised activity, call our branch immediately.',
  },
  {
    question: 'Are there charges for using Mobile Banking?',
    answer: 'Standard network airtime charges apply when you dial the shortcode — the same as any other call. For specific transaction fees on transfers and bill payments, contact your nearest branch.',
  },
  {
    question: 'What if I forget my Mobile Banking PIN?',
    answer: 'Visit any Garural Bank branch with your Ghana Card for identity verification, and our staff will assist you to reset your PIN securely.',
  },
  {
    question: 'What accounts does Garural Bank offer?',
    answer: 'We offer Current Accounts for businesses and daily transactions, Savings Accounts for individual and family goals, and eSusu Accounts for disciplined community-style savings. Visit a branch to compare and open the right account.',
  },
  {
    question: 'Where are Garural Bank branches located?',
    answer: `We have 6 branches: Amasaman (Head Office), Pokuase, Ofankor, Kasoa, Madina, and Dome — all in Greater Accra and Central Region. Call us on ${SITE_CONFIG.phone} for directions.`,
  },
  {
    question: 'Can I apply for a loan with Garural Bank?',
    answer: 'Yes. We offer Personal Loans, Business Loans, and Micro Loans for small traders and artisans. Speak to a loan officer at your nearest branch to learn about eligibility and amounts.',
  },
  {
    question: 'How do I receive money from abroad through Garural Bank?',
    answer: 'Garural Bank supports international remittance through our authorized partners. Visit a branch or call us to learn which services are available and how to receive funds quickly and safely.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 5) * 0.07 }}
      className="border border-[#103d1e]/10 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#fffbea] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#103d1e] text-sm md:text-base">{faq.question}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            open ? 'bg-[#103d1e] border-[#103d1e] rotate-45' : 'border-[#103d1e]/25'
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors ${open ? 'text-white' : 'text-[#103d1e]'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-600 text-sm leading-7 border-t border-[#103d1e]/8 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const half = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#f9f7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Questions & Answers"
          title="Frequently Asked Questions"
          description="Everything you need to know about banking with Garural and using Mobile Banking via USSD."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            {left.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
          <div className="space-y-4">
            {right.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 rounded-3xl bg-[#103d1e] px-8 py-10 text-center text-white"
        >
          <p className="text-sm uppercase tracking-widest text-[#ffd400] font-semibold">Still have questions?</p>
          <h3 className="mt-3 text-2xl font-bold">Talk to us directly.</h3>
          <p className="mt-2 text-white/60 text-sm">
            Visit any branch, call {SITE_CONFIG.phone}, or dial {SITE_CONFIG.mobileBankingCode} for quick help.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ffd400] text-[#103d1e] font-semibold text-sm hover:bg-[#ffe033] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              Call {SITE_CONFIG.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white text-sm hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              Email us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
