'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const accounts = [
  {
    title: 'Current Account',
    description:
      'Designed to make running your business easier with seamless daily transactions, cheque facilities, and business banking tools.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    gradient: 'from-blue-500 to-indigo-600',
    features: ['Cheque Book', 'Overdraft Facility', 'Internet Banking', 'Business Tools'],
  },
  {
    title: 'Savings Account',
    description:
      'Specially designed to help you save for your future goals with competitive interest rates and flexible deposit options.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    gradient: 'from-[#F0C75E] to-[#B8860B]',
    features: ['Competitive Rates', 'Flexible Deposits', 'No Hidden Fees', 'Mobile Access'],
  },
  {
    title: 'eSusu Account',
    description:
      'Built for regular income earners and businesses — a modern take on the traditional Susu savings system.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-600',
    features: ['Daily Collections', 'Micro Savings', 'Loan Eligibility', 'Community Driven'],
  },
];

export default function AccountsSection() {
  return (
    <section id="accounts" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Our Accounts"
          title="Choose the Right Account for You"
          description="Whether you're saving for tomorrow or managing today, we have an account tailored for your needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {accounts.map((account) => (
            <motion.div key={account.title} variants={fadeInUp}>
              <GlassCard className="group relative overflow-hidden h-full" tiltEnabled>
                {/* Gradient accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${account.gradient} rounded-t-2xl`} />

                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${account.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {account.icon}
                  </div>

                  <h3 className="font-bold text-xl text-[#0A1628]">{account.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{account.description}</p>

                  {/* Features */}
                  <ul className="mt-6 space-y-2">
                    {account.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button variant="ghost" size="sm" className="group/btn">
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
