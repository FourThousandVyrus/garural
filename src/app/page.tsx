import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import TrustBarSection from '@/components/sections/TrustBarSection';
import AccountsSection from '@/components/sections/AccountsSection';
import LoansRemittanceSection from '@/components/sections/LoansRemittanceSection';
import CTABannerSection from '@/components/sections/CTABannerSection';
import InvestmentsServicesSection from '@/components/sections/InvestmentsServicesSection';
import AboutCorporateSection from '@/components/sections/AboutCorporateSection';
import BranchLocatorSection from '@/components/sections/BranchLocatorSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustBarSection />
      <AccountsSection />
      <LoansRemittanceSection />
      <CTABannerSection />
      <InvestmentsServicesSection />
      <AboutCorporateSection />
      <BranchLocatorSection />
      <Footer />
    </main>
  );
}
