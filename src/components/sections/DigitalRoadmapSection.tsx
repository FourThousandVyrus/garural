'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const milestones = [
  {
    era: 'Since 1984',
    label: 'done',
    title: 'Community Banking at its Core',
    body: 'Garural Bank was established to serve the Ga communities of Greater Accra. Savings, loans, and branch service have been the backbone from day one.',
    icon: '🏛️',
  },
  {
    era: '2010s',
    label: 'done',
    title: 'USSD Mobile Banking Launched',
    body: `Garural introduced Mobile Banking via USSD — meaning customers can dial the shortcode from any phone to bank without internet or a smartphone.`,
    icon: '📱',
  },
  {
    era: 'Now',
    label: 'active',
    title: 'Better Digital Presence',
    body: "This website is part of a push to make Garural's services clearer and more accessible. Customers can learn, find branches, and prepare before ever entering a branch.",
    icon: '🌐',
  },
  {
    era: 'Coming',
    label: 'upcoming',
    title: 'Expanded Mobile Banking Features',
    body: 'We are working to expand what customers can do via USSD — including more bill payment options, mini-statements, and loan enquiries directly from the phone menu.',
    icon: '🔮',
  },
  {
    era: 'Future',
    label: 'upcoming',
    title: 'Digital Channels for Every Customer',
    body: 'As our customer base grows, we are committed to adding more digital access points — always grounded in the branch support that our communities trust.',
    icon: '🚀',
  },
];

const labelStyles: Record<string, string> = {
  done: 'bg-emerald-100 text-emerald-700',
  active: 'bg-[#ffd400] text-[#103d1e]',
  upcoming: 'bg-[#103d1e]/10 text-[#103d1e]',
};

export default function DigitalRoadmapSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#103d1e]">Our Digital Journey</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#103d1e]">
            Where We&apos;ve Been & Where We&apos;re Going
          </h2>
          <p className="mt-4 text-gray-600 text-sm max-w-xl mx-auto leading-7">
            Garural Bank has built honest, working banking services for 40+ years.
            Our digital journey is grounded in what actually works for our communities — not empty promises.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ffd400] via-[#103d1e]/20 to-transparent" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                variants={fadeInUp}
                custom={i}
                className="relative flex gap-8 pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 top-1 w-4 h-4 rounded-full border-2 border-white shadow-md z-10 ${
                    m.label === 'active'
                      ? 'bg-[#ffd400] scale-125'
                      : m.label === 'done'
                      ? 'bg-emerald-500'
                      : 'bg-[#103d1e]/20'
                  }`}
                />

                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xl">{m.icon}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{m.era}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${labelStyles[m.label]}`}>
                      {m.label === 'done' ? 'Delivered' : m.label === 'active' ? 'In Progress' : 'Upcoming'}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#103d1e] text-base">{m.title}</h3>
                  <p className="mt-1.5 text-gray-500 text-sm leading-6">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 rounded-3xl border border-[#103d1e]/10 bg-[#fffbea] p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#103d1e] mb-3">Our commitment</p>
          <p className="text-sm leading-7 text-gray-700">
            We will never promote services that don&apos;t exist or overstate what we offer.
            Every feature on this site is real and available today. When new services launch,
            we will update this page to reflect it honestly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
