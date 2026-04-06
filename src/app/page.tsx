import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import TrustBarSection from '@/components/sections/TrustBarSection';
import AccountsSection from '@/components/sections/AccountsSection';
import LoansRemittanceSection from '@/components/sections/LoansRemittanceSection';
import InvestmentsServicesSection from '@/components/sections/InvestmentsServicesSection';
import AboutCorporateSection from '@/components/sections/AboutCorporateSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import DigitalRoadmapSection from '@/components/sections/DigitalRoadmapSection';
import FAQSection from '@/components/sections/FAQSection';
import CTABannerSection from '@/components/sections/CTABannerSection';
import BranchLocatorSection from '@/components/sections/BranchLocatorSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustBarSection />
      <InvestmentsServicesSection />
      <AccountsSection />
      <LoansRemittanceSection />
      <AboutCorporateSection />
      <DigitalRoadmapSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
      <BranchLocatorSection />
      <Footer />
    </main>
  );
}
