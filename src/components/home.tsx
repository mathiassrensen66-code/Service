import { useRef } from "react";
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import ServiceCards from "@/components/landing/ServiceCards";
import TrustSignals from "@/components/landing/TrustSignals";
import BeforeAfterSlider from "@/components/landing/BeforeAfterSlider";
import TestimonialBlock from "@/components/landing/TestimonialBlock";
import CampaignSection from "@/components/landing/CampaignSection";
import DesignSpecialists from "@/components/landing/DesignSpecialists";
import CTASection from "@/components/landing/CTASection";
import ContactFooter from "@/components/landing/ContactFooter";
import Footer from "@/components/landing/Footer";

function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-blue-50/30 overflow-x-hidden">
      <Navigation onCtaClick={scrollToContact} />
      <HeroSection onCtaClick={scrollToContact} />
      <div id="services">
        <ServiceCards />
      </div>
      <div id="results">
        <BeforeAfterSlider />
      </div>
      <TestimonialBlock />
      <CampaignSection />
      <DesignSpecialists />
      <CTASection />
      <div ref={contactRef} id="contact">
        <ContactFooter />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
