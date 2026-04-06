'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const branches = [
  { name: 'Amasaman (Head Office)', address: 'P.O. Box AM 70, Amasaman, Accra, Ghana', phone: '0302 900 120', hours: 'Mon–Fri, 8:00 AM – 5:00 PM', isHeadOffice: true },
  { name: 'Pokuase Branch', address: 'Pokuase, Greater Accra Region', phone: '0302 901 014', hours: 'Mon–Fri, 8:00 AM – 5:00 PM', isHeadOffice: false },
  { name: 'Ofankor Branch', address: 'Ofankor, Greater Accra Region', phone: '0302 901 015', hours: 'Mon–Fri, 8:00 AM – 5:00 PM', isHeadOffice: false },
  { name: 'Kasoa Branch', address: 'Kasoa, Central Region', phone: '0302 901 016', hours: 'Mon–Fri, 8:00 AM – 5:00 PM', isHeadOffice: false },
  { name: 'Madina Branch', address: 'Madina, Greater Accra Region', phone: '0302 901 017', hours: 'Mon–Fri, 8:00 AM – 5:00 PM', isHeadOffice: false },
  { name: 'Dome Branch', address: 'Dome, Greater Accra Region', phone: '0302 901 018', hours: 'Mon–Fri, 8:00 AM – 5:00 PM', isHeadOffice: false },
];

export default function BranchLocatorSection() {
  const [selectedBranch, setSelectedBranch] = useState(0);

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Find Us"
          title="Visit a Branch Near You"
          description="With 15+ branches across Greater Accra and beyond, we're always close to your community."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Branch List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3 max-h-[500px] overflow-y-auto pr-2"
          >
            {branches.map((branch, index) => (
              <motion.button
                key={branch.name}
                variants={fadeInUp}
                onClick={() => setSelectedBranch(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  selectedBranch === index
                    ? 'bg-[#D4A017]/10 border-l-4 border-[#D4A017] shadow-sm'
                    : 'bg-gray-50 border-l-4 border-transparent hover:bg-gray-100 hover:translate-x-1'
                }`}
              >
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#0A1628] text-sm">{branch.name}</h3>
                  {branch.isHeadOffice && (
                    <span className="px-2 py-0.5 bg-[#D4A017]/20 text-[#B8860B] text-[10px] font-bold rounded-full uppercase">HQ</span>
                  )}
                </div>
                <p className="text-gray-500 text-xs mt-1">{branch.address}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Branch Detail */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBranch}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-8 md:p-10 text-white h-full flex flex-col justify-between"
                style={{ background: '#0A1628' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#D4A017]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F0C75E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{branches[selectedBranch].name}</h3>
                      {branches[selectedBranch].isHeadOffice && (
                        <span className="text-[#F0C75E] text-xs">Head Office</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <div>
                        <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Address</p>
                        <p className="text-white text-sm">{branches[selectedBranch].address}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <div>
                        <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-white text-sm">{branches[selectedBranch].phone}</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Hours</p>
                        <p className="text-white text-sm">{branches[selectedBranch].hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 h-48 bg-[#121F3D] rounded-xl flex items-center justify-center border border-white/10">
                  <p className="text-white/30 text-sm">Interactive Map — Coming Soon</p>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button variant="gold" size="sm" className="flex-1">Get Directions</Button>
                  <Button variant="outline" size="sm" className="flex-1">Call Branch</Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
