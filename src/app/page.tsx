import Header from "@/components/landing/Header";
import Hero from "../components/landing/Hero";
import Services from "@/components/landing/services";
import KPI from "@/components/landing/Kpi";
import Specialities from "@/components/landing/Specialities";
import Testimonials from "@/components/landing/testimonials";
import Associated from "@/components/landing/associated";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      <Header />
      <Hero />
      <Services />
      <KPI />
      <Specialities />
      <Testimonials />
      <Associated />
    </div>
  );
}
