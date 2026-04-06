import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Banking Services — GA Rural Bank PLC',
  description:
    'Explore all Garural Bank services: savings accounts, current accounts, eSusu, personal loans, business loans, micro loans, remittance, E-Zwich, and Mobile Banking.',
  keywords: [
    'GA Rural Bank services',
    'savings account Ghana',
    'business loan Ghana',
    'eSusu Ghana',
    'E-Zwich Ghana',
    'micro loan Ghana',
    'remittance Ghana rural bank',
  ],
  openGraph: {
    title: 'Banking Services — GA Rural Bank PLC',
    description: 'Savings, loans, Mobile Banking, E-Zwich, and remittance services for communities across Greater Accra.',
    url: 'https://garuralbank.com/services',
    type: 'website',
  },
};

const accountProducts = [
  {
    title: 'Current Account',
    tag: 'For businesses & regular transactions',
    description:
      'Designed for traders, business owners, and individuals who need reliable day-to-day access. Comes with cheque book, overdraft facility, and branch-backed support.',
    features: ['Cheque Book Issued', 'Overdraft Facility available', 'Mobile Banking via USSD', 'Business Transactions'],
    cta: 'Open a Current Account',
    // TODO: Replace with actual current account product photo
    photo: 'https://picsum.photos/seed/garural-current-account/600/320',
  },
  {
    title: 'Savings Account',
    tag: 'For individuals & families',
    description:
      'Save steadily with competitive interest rates, flexible deposit amounts, and no hidden fees. Accessible from any branch and via Mobile Banking for balance checks.',
    features: ['Competitive Interest Rates', 'Flexible Deposit Amounts', 'No Hidden Fees', 'Mobile Banking Balance Checks'],
    cta: 'Open a Savings Account',
    // TODO: Replace with actual savings product photo
    photo: 'https://picsum.photos/seed/garural-savings-account/600/320',
  },
  {
    title: 'eSusu Account',
    tag: 'For community savers',
    description:
      'A modern take on the traditional Susu savings system — ideal for daily income earners, market traders, and groups who want disciplined, structured saving with loan eligibility.',
    features: ['Daily Collections', 'Micro Savings Support', 'Builds Loan Eligibility', 'Community Driven'],
    cta: 'Open an eSusu Account',
    // TODO: Replace with actual eSusu product photo
    photo: 'https://picsum.photos/seed/garural-esusu-account/600/320',
  },
];

const loanProducts = [
  {
    title: 'Personal Loan',
    description: 'For school fees, healthcare, home improvement, or unexpected emergencies. Speak to a loan officer about eligibility and repayment terms.',
    icon: '👤',
  },
  {
    title: 'Business Loan',
    description: 'Grow your enterprise with commercial credit and business lending tailored to the scale of your operations.',
    icon: '🏪',
  },
  {
    title: 'Micro Loan',
    description: 'Quick, accessible microfinance designed for small traders, farmers, and artisans who need short-term capital.',
    icon: '🌱',
  },
];

const otherServices = [
  {
    title: 'Mobile Banking (USSD)',
    description: `Dial ${SITE_CONFIG.mobileBankingCode} from any phone — no internet required. Check balance, transfer funds, buy airtime, and pay selected bills.`,
    icon: '📱',
    link: '/mobile-banking',
    linkLabel: 'Learn more',
  },
  {
    title: 'E-Zwich Services',
    description: 'Access electronic payment services using Ghana\'s national biometric smartcard. Available at all Garural Bank branches.',
    icon: '💳',
    link: null,
    linkLabel: null,
  },
  {
    title: 'International Remittance',
    description: 'Receive money from family and partners abroad quickly and safely through our authorised remittance partners.',
    icon: '🌍',
    link: null,
    linkLabel: null,
  },
  {
    title: 'Ghana Card Updates',
    description: 'Update and link your Ghana Card to your Garural account at any branch with staff-guided support.',
    icon: '🪪',
    link: null,
    linkLabel: null,
  },
  {
    title: 'Cheque Services',
    description: 'Issue and process cheques through our Current Account facility with full branch support.',
    icon: '📄',
    link: null,
    linkLabel: null,
  },
  {
    title: 'Susu Group Collections',
    description: 'Structured savings collection for groups, cooperatives, and community associations.',
    icon: '🤝',
    link: null,
    linkLabel: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#103d1e] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#ffd400] text-xs uppercase tracking-widest font-semibold">What We Offer</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">Our Banking Services</h1>
          <p className="mt-4 text-white/60 text-base leading-7 max-w-2xl mx-auto">
            Practical, community-focused banking products for individuals, families, traders, and businesses across Greater Accra and beyond.
          </p>
        </div>
      </section>

      {/* Accounts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#103d1e] mb-10 text-center">Account Products</h2>
          <div className="space-y-10">
            {accountProducts.map((p, i) => (
              <div
                key={p.title}
                className={`grid md:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-[#103d1e]/8 shadow-sm ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-last' : ''
                }`}
              >
                {/* Photo */}
                <div className="relative h-56 md:h-full overflow-hidden min-h-[220px]">
                  {/* TODO: Replace src with actual product photo */}
                  <img src={p.photo} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#103d1e]/20" />
                </div>
                {/* Content */}
                <div className="p-8">
                  <span className="text-xs font-semibold text-[#103d1e]/60 uppercase tracking-widest">{p.tag}</span>
                  <h3 className="mt-2 text-2xl font-bold text-[#103d1e]">{p.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-7">{p.description}</p>
                  <ul className="mt-5 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#branches"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#103d1e] text-white text-sm font-semibold px-6 py-3 hover:bg-[#0b2b15] transition-colors"
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loans */}
      <section className="py-20 bg-[#f9f7f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#103d1e]">Loan Products</h2>
            <p className="mt-3 text-gray-600 text-sm max-w-xl mx-auto leading-7">
              Tailored financing for everyday needs and business growth. Visit a branch to discuss eligibility.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {loanProducts.map((l) => (
              <div key={l.title} className="bg-white rounded-3xl p-7 border border-[#103d1e]/8 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{l.icon}</div>
                <h3 className="font-bold text-[#103d1e] text-base mb-2">{l.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{l.description}</p>
                <a
                  href="/#branches"
                  className="mt-5 inline-flex items-center text-[#103d1e] text-xs font-semibold hover:underline"
                >
                  Speak to a Loan Officer →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#103d1e]">Additional Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <div key={s.title} className="rounded-2xl bg-[#f9f7f0] border border-[#103d1e]/8 p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-[#103d1e] text-sm mb-1.5">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-6">{s.description}</p>
                {s.link && (
                  <a href={s.link} className="mt-3 inline-flex items-center text-[#103d1e] text-xs font-semibold hover:underline">
                    {s.linkLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16 bg-[#103d1e] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Ready to open an account?</h2>
          <p className="mt-3 text-white/60 text-sm leading-7">
            Visit any Garural Bank branch with your Ghana Card. Our staff will
            help you choose the right account and get set up — including registering
            for Mobile Banking.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/branches" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#ffd400] text-[#103d1e] font-bold text-sm hover:bg-[#ffe033] transition-colors">
              Find a Branch
            </a>
            <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-white/20 text-white text-sm hover:bg-white/10 transition-colors">
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
