import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: 'Mobile Banking — GA Rural Bank PLC',
  description: `Bank on any phone by dialing ${SITE_CONFIG.mobileBankingCode}. No app, no internet needed. Garural Mobile Banking via USSD — check balances, transfer funds, buy airtime.`,
  keywords: ['USSD banking Ghana', 'mobile banking Ghana', '*365*212#', 'GA Rural Bank Mobile Banking'],
  openGraph: {
    title: 'Mobile Banking — GA Rural Bank PLC',
    description: `Dial ${SITE_CONFIG.mobileBankingCode} from any phone to access your Garural Bank account.`,
    url: 'https://garuralbank.com/mobile-banking',
    type: 'website',
  },
};

const steps = [
  {
    step: '01',
    title: 'Dial the shortcode',
    body: `On any phone and any network, dial ${SITE_CONFIG.mobileBankingCode}. No data bundle required — just standard airtime.`,
  },
  {
    step: '02',
    title: 'Choose your service',
    body: 'A simple numbered menu appears on your screen. Select what you need: balance, transfer, airtime, or support.',
  },
  {
    step: '03',
    title: 'Confirm with your PIN',
    body: 'Enter your secure 4-digit PIN to authorise the action. Your PIN is never stored or shared.',
  },
  {
    step: '04',
    title: 'Done — back to your day',
    body: 'You get an instant confirmation. No branch visit needed for everyday tasks once your account is activated.',
  },
];

const services = [
  { icon: '💳', title: 'Account Balance', body: 'Check your current and savings account balance at any time.' },
  { icon: '↗️', title: 'Fund Transfers', body: 'Move money between your accounts or to another Garural account.' },
  { icon: '📡', title: 'Airtime Top-Up', body: 'Buy airtime for any Ghanaian network directly from the menu.' },
  { icon: '🧾', title: 'Bill Payments', body: 'Pay selected utility and service bills with ease.' },
  { icon: '📋', title: 'Mini Statement', body: 'View your last few transactions without visiting the branch.' },
  { icon: '🙋', title: 'Request Support', body: 'Raise a query and a branch team member will follow up with you.' },
];

export default function MobileBankingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: '#0b2b15' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,212,0,0.18),_transparent_40%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffd400]/10 border border-[#ffd400]/20 text-[#ffd400] text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#ffd400] rounded-full animate-pulse" />
            Live on all networks
          </span>
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
            Mobile Banking on the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd400] to-[#fff3a3]">
              Phone You Already Have
            </span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            No app. No internet. No smartphone required. Garural Mobile Banking
            works on every phone through USSD — the same technology millions of
            Ghanaians use every day.
          </p>

          {/* Big shortcode display */}
          <div className="mt-10 inline-flex flex-col items-center gap-3 rounded-3xl bg-white/8 border border-white/10 px-10 py-8 backdrop-blur-md">
            <p className="text-white/50 text-xs uppercase tracking-widest">Your shortcode</p>
            <span className="font-extrabold text-[#ffd400] text-5xl md:text-6xl tracking-tight">{SITE_CONFIG.mobileBankingCode}</span>
            <p className="text-white/40 text-xs">Dial from any phone · Any network · Any time</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#103d1e]">Step by step</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#103d1e]">How Mobile Banking Works</h2>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-0.5 bg-gradient-to-r from-transparent via-[#ffd400] to-transparent" />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {steps.map((s) => (
                <div key={s.step} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#ffd400] flex items-center justify-center font-extrabold text-[#103d1e] text-lg shadow-md mb-5">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-[#103d1e] text-sm mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-6">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="py-20 bg-[#f9f7f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#103d1e]">Features</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#103d1e]">What You Can Do</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-[#103d1e]/8 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-[#103d1e] text-sm mb-1">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-6">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-[#103d1e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mt-4 text-white/60 text-sm leading-7">
            Visit any Garural Bank branch with your Ghana Card to open an account and register for Mobile Banking. Once activated, dial {SITE_CONFIG.mobileBankingCode} and you are set.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#branches"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#ffd400] text-[#103d1e] font-bold text-sm hover:bg-[#ffe033] transition-colors"
            >
              Find a Branch Near You
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white text-sm hover:bg-white/10 transition-colors"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Embedded FAQ */}
      <FAQSection />

      <Footer />
    </>
  );
}
