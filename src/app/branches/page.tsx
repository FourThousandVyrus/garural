import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Find a Branch — GA Rural Bank PLC',
  description:
    'Find your nearest Garural Bank branch in Greater Accra and Kasoa. 6 branches serving Amasaman, Pokuase, Ofankor, Kasoa, Madina, and Dome.',
  keywords: ['Garural Bank branch', 'GA Rural Bank Amasaman', 'GA Rural Bank Pokuase', 'Ghana rural bank near me'],
  openGraph: {
    title: 'Find a Branch — GA Rural Bank PLC',
    description: '6 branches across Greater Accra and Kasoa. Visit us Mon–Fri, 8 AM – 5 PM.',
    url: 'https://garuralbank.com/branches',
    type: 'website',
  },
};

const branches = [
  {
    name: 'Amasaman (Head Office)',
    address: 'P.O. Box AM 70, Amasaman, Accra, Ghana',
    phone: '0302 900 120',
    email: 'info@garuralbank.com',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: true,
    services: ['Account Opening', 'Loans & Credit', 'Mobile Banking Registration', 'E-Zwich', 'Ghana Card Updates', 'Remittance', 'Cheque Services'],
    // TODO: Replace with actual head office photo
    photo: 'https://picsum.photos/seed/garural-hq/800/500',
    mapQuery: 'GA Rural Bank PLC Amasaman Ghana',
  },
  {
    name: 'Pokuase Branch',
    address: 'Pokuase, Greater Accra Region',
    phone: '0302 901 014',
    email: 'pokuase@garuralbank.com',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
    services: ['Account Opening', 'Deposits & Withdrawals', 'Mobile Banking Registration', 'E-Zwich'],
    // TODO: Replace with actual Pokuase branch photo
    photo: 'https://picsum.photos/seed/garural-pokuase/800/500',
    mapQuery: 'GA Rural Bank Pokuase Ghana',
  },
  {
    name: 'Ofankor Branch',
    address: 'Ofankor, Greater Accra Region',
    phone: '0302 901 015',
    email: 'ofankor@garuralbank.com',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
    services: ['Account Opening', 'Deposits & Withdrawals', 'Mobile Banking Registration', 'E-Zwich'],
    // TODO: Replace with actual Ofankor branch photo
    photo: 'https://picsum.photos/seed/garural-ofankor/800/500',
    mapQuery: 'GA Rural Bank Ofankor Ghana',
  },
  {
    name: 'Kasoa Branch',
    address: 'Kasoa, Central Region',
    phone: '0302 901 016',
    email: 'kasoa@garuralbank.com',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
    services: ['Account Opening', 'Deposits & Withdrawals', 'Mobile Banking Registration', 'E-Zwich', 'Loans & Credit'],
    // TODO: Replace with actual Kasoa branch photo
    photo: 'https://picsum.photos/seed/garural-kasoa/800/500',
    mapQuery: 'GA Rural Bank Kasoa Ghana',
  },
  {
    name: 'Madina Branch',
    address: 'Madina, Greater Accra Region',
    phone: '0302 901 017',
    email: 'madina@garuralbank.com',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
    services: ['Account Opening', 'Deposits & Withdrawals', 'Mobile Banking Registration', 'E-Zwich'],
    // TODO: Replace with actual Madina branch photo
    photo: 'https://picsum.photos/seed/garural-madina/800/500',
    mapQuery: 'GA Rural Bank Madina Ghana',
  },
  {
    name: 'Dome Branch',
    address: 'Dome, Greater Accra Region',
    phone: '0302 901 018',
    email: 'dome@garuralbank.com',
    hours: 'Mon–Fri, 8:00 AM – 5:00 PM',
    isHeadOffice: false,
    services: ['Account Opening', 'Deposits & Withdrawals', 'Mobile Banking Registration', 'E-Zwich'],
    // TODO: Replace with actual Dome branch photo
    photo: 'https://picsum.photos/seed/garural-dome/800/500',
    mapQuery: 'GA Rural Bank Dome Ghana',
  },
];

export default function BranchesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#103d1e] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[#ffd400] text-xs uppercase tracking-widest font-semibold">Find Us</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">Our Branches</h1>
          <p className="mt-4 text-white/60 text-base leading-7">
            6 branches across Greater Accra and Kasoa — open Monday to Friday, 8 AM to 5 PM.
            Walk in for account services, loans, Mobile Banking registration, and more.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#ffd400]/10 border border-[#ffd400]/20 px-6 py-4 text-[#ffd400] text-sm">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            Head Office: {SITE_CONFIG.phone}
          </div>
        </div>
      </section>

      {/* Branch cards */}
      <section className="py-20 bg-[#f9f7f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-[#103d1e]/6 flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-44 overflow-hidden">
                  {/* TODO: Replace src with actual branch photo */}
                  <img
                    src={branch.photo}
                    alt={`${branch.name} exterior`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0b2b15]/25" />
                  {branch.isHeadOffice && (
                    <span className="absolute top-4 left-4 rounded-full bg-[#ffd400] px-3 py-1 text-[10px] font-bold text-[#103d1e] uppercase tracking-wide">
                      Head Office
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-bold text-[#103d1e] text-lg">{branch.name}</h2>
                  <p className="text-gray-500 text-xs mt-1">{branch.address}</p>

                  <div className="mt-4 space-y-2.5 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#103d1e]/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-[#103d1e] transition-colors">{branch.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#103d1e]/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                      <a href={`mailto:${branch.email}`} className="hover:text-[#103d1e] transition-colors">{branch.email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#103d1e]/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {branch.hours}
                    </div>
                  </div>

                  {/* Services badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5 flex-1">
                    {branch.services.map((s) => (
                      <span key={s} className="rounded-full bg-[#f3f7ef] border border-[#103d1e]/10 px-2.5 py-1 text-[10px] font-medium text-[#103d1e]">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#103d1e]/10 overflow-hidden">
                    <iframe
                      title={`Map for ${branch.name}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&output=embed`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-36 w-full"
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#103d1e] text-white text-xs font-semibold py-3 hover:bg-[#0b2b15] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                      Call Branch
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#103d1e]/20 bg-[#f3f7ef] text-[#103d1e] text-xs font-semibold py-3 hover:bg-[#e9f1e2] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18l6-2m-6 2V2m6 16l5.447 2.724A1 1 0 0021 19.382V8.618a1 1 0 00-.553-.894L15 5m0 13V5m0 0L9 2" /></svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Banking reminder */}
          <div className="mt-16 rounded-3xl bg-[#fffbea] border border-[#ffd400]/40 p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#103d1e]">Can&apos;t visit a branch?</p>
            <h2 className="mt-3 text-2xl font-bold text-[#103d1e]">
              Use Mobile Banking — dial {SITE_CONFIG.mobileBankingCode}
            </h2>
            <p className="mt-3 text-gray-600 text-sm max-w-xl mx-auto leading-7">
              Check balances, transfer funds, and do everyday banking tasks from
              any phone without coming in. Available on all networks.
            </p>
            <a
              href="/mobile-banking"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#103d1e] text-white text-sm font-semibold px-8 py-3 hover:bg-[#0b2b15] transition-colors"
            >
              Learn about Mobile Banking
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
