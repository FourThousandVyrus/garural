'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const milestones = [
  { year: '1984', title: 'Establishment', description: "Commissioned as Ghana's 92nd Rural Bank in December 1984, serving the Ga communities." },
  { year: '1990s', title: 'Community Growth', description: 'Expanded branch network across the Greater Accra Region, deepening community roots.' },
  { year: '2000s', title: 'Digital Transformation', description: 'Adopted modern banking technologies including electronic payments and computerized systems.' },
  { year: '2010s', title: 'Mobile & E-Banking', description: 'Launched mobile banking, E-Zwich services, and online platforms for modern customers.' },
  { year: 'Today', title: '40+ Years Strong', description: 'Serving 100,000+ customers with 15+ branches, continuing our mission of community-first banking.' },
];

const values = [
  { title: 'Trust', description: 'Building lasting relationships through transparency and reliability.', icon: (
    <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )},
  { title: 'Community', description: 'Owned and managed by shareholders from our catchment area.', icon: (
    <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  )},
  { title: 'Innovation', description: 'Embracing technology to make banking accessible to all.', icon: (
    <svg className="w-8 h-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  )},
];

export default function AboutCorporateSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Our Story"
          title="40+ Years of Community Banking"
          description="From a small rural bank to a trusted financial partner — our journey is one of growth, resilience, and community."
        />

        {/* Timeline */}
        <div ref={timelineRef} className="mt-20 relative">
          {/* Central line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-[#F0C75E] to-[#B8860B] origin-top" />
          </div>

          {/* Mobile line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow inline-block max-w-md">
                      <span className="text-[#D4A017] font-bold text-2xl">{milestone.year}</span>
                      <h3 className="font-bold text-lg text-[#0A1628] mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute md:left-1/2 left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4A017] border-4 border-white shadow-md z-10" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="font-bold text-xl text-[#0A1628]">{value.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
