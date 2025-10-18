import Header from "@/components/landing/Header";
import Hero from "../components/landing/Hero";
import Services from "@/components/landing/services";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      <Header />
      <Hero />
      <Services />
    </div>
  );
}
