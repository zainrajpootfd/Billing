import Header from "@/components/landing/Header";
import Hero from "../components/landing/Hero";
import Services from "@/components/landing/services";
import KPI from "@/components/landing/Kpi";
import Specialities from "@/components/landing/Specialities";
import Testimonials from "@/components/landing/testimonials";
import Associated from "@/components/landing/associated";
import Contact from "@/components/landing/Contact";
import TopBar from "@/components/landing/TopBar";
import Footer from "@/components/landing/Footer";
import AuditSection from "@/components/landing/AuditSection";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      {/* <TopBar />
      <Header /> */}
      <Hero />
      <AuditSection />
      <Services />
      <KPI />
      <Specialities />
      <Testimonials />
      <Associated />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
