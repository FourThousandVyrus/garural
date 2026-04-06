'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { staggerContainer, fadeInUp } from '@/lib/animations';

// TODO: Replace placeholder photo URLs with actual customer photo portraits
// TODO: Replace quotes with real anonymised/consented customer stories
const testimonials = [
  {
    name: 'Abena Asante',
    role: 'Market Trader · Pokuase',
    quote:
      'I use the Mobile Banking shortcode every morning to check my balance before going to the market. No smartphone needed — just my old phone. It saves me a trip to the branch.',
    photo: 'https://picsum.photos/seed/garural-testimonial-1/120/120',
    stars: 5,
  },
  {
    name: 'Kwame Osei',
    role: 'Carpenter · Amasaman',
    quote:
      'The eSusu account helped me save consistently for the first time. The staff at the Head Office walked me through everything. I trust this bank with my family\'s money.',
    photo: 'https://picsum.photos/seed/garural-testimonial-2/120/120',
    stars: 5,
  },
  {
    name: 'Adjoa Mensah',
    role: 'Small Business Owner · Kasoa',
    quote:
      'Getting a business loan here was straightforward. They understood my situation and gave me real advice. I\'ve recommended Garural to three other traders on my street.',
    photo: 'https://picsum.photos/seed/garural-testimonial-3/120/120',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#ffd400]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#f9f7f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="What Our Customers Say"
          title="Real Voices from Our Community"
          description="Garural Bank serves real people with real needs. Here is what some of them say about banking with us."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="relative flex flex-col bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#103d1e]/6"
            >
              {/* Large decorative quote mark */}
              <svg
                className="absolute top-6 right-7 w-10 h-10 text-[#103d1e]/6"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote */}
              <blockquote className="mt-5 text-gray-700 text-sm leading-7 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Customer identity */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#ffd400] flex-shrink-0">
                  {/* TODO: Replace with actual customer portrait (with consent) */}
                  <img
                    src={t.photo}
                    alt={`Portrait of ${t.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#103d1e] text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community trust strip — inspired by Lloyds / Starling service quality strips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-[#103d1e] px-8 py-10 text-white grid sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { icon: '🏛️', label: '40+ years', sub: 'Serving Ghana\'s communities' },
            { icon: '📱', label: '*365*212#', sub: 'Mobile Banking on any phone' },
            { icon: '🤝', label: '6 branches', sub: 'Across Greater Accra & Kasoa' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-[#ffd400]">{item.label}</div>
              <div className="text-white/60 text-sm mt-1">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
