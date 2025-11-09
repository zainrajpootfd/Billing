import Header from "@/components/landing/Header";
import Hero from "../components/landing/Hero";
import Services from "@/components/landing/services";
import KPI from "@/components/landing/Kpi";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HowItWorks from "@/components/landing/HowItWorks";
import Specialities from "@/components/landing/Specialities";
import Testimonials from "@/components/landing/testimonials";
import FAQ from "@/components/landing/FAQ";
import Associated from "@/components/landing/associated";
import Contact from "@/components/landing/Contact";
import TopBar from "@/components/landing/TopBar";
import Footer from "@/components/landing/Footer";
import AuditSection from "@/components/landing/AuditSection";
import ResultsMetrics from "@/components/landing/ResultsMetrics";
import TrustBadges from "@/components/landing/TrustBadges";
import KeyDifferentiators from "@/components/landing/KeyDifferentiators";
import IntegrationPartners from "@/components/landing/IntegrationPartners";
import CaseStudies from "@/components/landing/CaseStudies";
import HowToGetStarted from "@/components/landing/HowToGetStarted";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      {/* <TopBar />
      <Header /> */}
      <Hero />
      <AuditSection />
      <ResultsMetrics />
      {/* <TrustBadges /> */}
      <Associated />
      <KPI />
      <WhyChooseUs />
      <Services />
      <KeyDifferentiators />
      <HowItWorks />
      <IntegrationPartners />
      <Specialities />
      <CaseStudies />
      {/* <Testimonials /> */}
      <HowToGetStarted />
      <FAQ />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
