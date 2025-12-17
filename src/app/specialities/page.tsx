"use client";

import { useEffect, useRef } from "react";
import {
  Activity,
  Ambulance,
  Award,
  Baby,
  Bandage,
  BarChart3,
  BedDouble,
  BedSingle,
  Beaker,
  Biohazard,
  Bone,
  BookOpen,
  Brain,
  Building2,
  ChartLine,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  ClipboardPen,
  DollarSign,
  Eye,
  FileCheck,
  FileText,
  Files,
  FlaskConical,
  Globe2,
  GraduationCap,
  Heart,
  HeartPulse,
  Home,
  Hospital,
  Mail,
  Microscope,
  Monitor,
  Phone,
  Pill,
  RefreshCw,
  Scale,
  Smartphone,
  Stethoscope,
  Syringe,
  TestTube,
  Thermometer,
  TrendingUp,
  Users,
  UserCircle2,
  UserRound,
  Zap,
  Shield,
  FolderOpen,
  FolderKanban,
  ArrowRight,
  Dna,
} from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Expanded list of medical specialties based on your requirements
// Names are displayed with unique icons only (no descriptions shown in the UI)
const specialities = [
  { icon: Ambulance, name: "Ambulatory Surgery", description: "" },
  { icon: HeartPulse, name: "Cardiology", description: "" },
  { icon: ClipboardList, name: "Census Entry", description: "" },
  { icon: Microscope, name: "Clinical Lab", description: "" },
  { icon: DollarSign, name: "Dental Billing", description: "" },
  { icon: Bandage, name: "Dermatology", description: "" },
  { icon: Award, name: "For Disabled", description: "" },
  { icon: Bone, name: "DME", description: "" },
  { icon: TestTube, name: "Endocrinology", description: "" },
  { icon: Home, name: "Family Practice", description: "" },
  { icon: Building2, name: "FQHC", description: "" },
  { icon: Stethoscope, name: "Gastroenterology", description: "" },
  { icon: Activity, name: "General Surgery", description: "" },
  { icon: BedSingle, name: "Geriatrics", description: "" },
  { icon: Beaker, name: "Hematology", description: "" },
  { icon: FlaskConical, name: "Hepatology", description: "" },
  { icon: Users, name: "Home Health", description: "" },
  { icon: BedDouble, name: "Hospice", description: "" },
  { icon: Shield, name: "Immunology", description: "" },
  { icon: Biohazard, name: "Infectious Disease", description: "" },
  { icon: Thermometer, name: "Internal Medicine", description: "" },
  { icon: Hospital, name: "Medical Clinics", description: "" },
  { icon: UserCircle2, name: "Mental Health", description: "" },
  { icon: Globe2, name: "Molecular Labs", description: "" },
  { icon: Scale, name: "Nephrology", description: "" },
  { icon: Brain, name: "Neurosurgery", description: "" },
  { icon: Files, name: "Nursing Home", description: "" },
  { icon: Baby, name: "Ob Gyn", description: "" },
  { icon: TrendingUp, name: "Oncology", description: "" },
  { icon: Eye, name: "Ophthalmology", description: "" },
  { icon: Pill, name: "Pain Management", description: "" },
  { icon: ClipboardCheck, name: "Pathology", description: "" },
  { icon: BookOpen, name: "Pediatric", description: "" },
  { icon: RefreshCw, name: "Physical Therapy", description: "" },
  { icon: FileText, name: "Podiatry", description: "" },
  { icon: FileCheck, name: "Prostheses", description: "" },
  { icon: UserRound, name: "Psychiatric", description: "" },
  { icon: GraduationCap, name: "Psychology", description: "" },
  { icon: BarChart3, name: "Pulmonology", description: "" },
  { icon: Monitor, name: "Radiology", description: "" },
  { icon: ClipboardPen, name: "Rheumatology", description: "" },
  { icon: FolderOpen, name: "Rehab", description: "" },
  { icon: Syringe, name: "Thoracic Surgery", description: "" },
  { icon: ChartLine, name: "Toxicology", description: "" },
  { icon: Zap, name: "Traumatology", description: "" },
  { icon: Smartphone, name: "Urgent Care", description: "" },
  { icon: FolderKanban, name: "Urology", description: "" },
  { icon: Heart, name: "Wound Care", description: "" },
  {icon: Dna,name: "Chiropractic"}
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SpecialitiesPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const setEqualHeights = () => {
      requestAnimationFrame(() => {
        const heights = cardRefs.current
          .map((el) => (el ? el.getBoundingClientRect().height : 0))
          .filter(Boolean);

        if (!heights.length) return;

        const max = Math.max(...heights);
        cardRefs.current.forEach((el) => {
          if (el) {
            const current = parseFloat(getComputedStyle(el).minHeight) || 0;
            if (Math.abs(current - max) > 1) el.style.minHeight = `${max}px`;
          }
        });
      });
    };

    setEqualHeights();
    const timer = setTimeout(setEqualHeights, 300);
    window.addEventListener("resize", setEqualHeights);
    window.addEventListener("orientationchange", setEqualHeights);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(setEqualHeights).catch(() => {});
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", setEqualHeights);
      window.removeEventListener("orientationchange", setEqualHeights);
    };
  }, []);

  return (
    <main className="bg-white text-[#004b87] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 md:px-20 text-center animate-fade-in">
        {/* Background medical image with soft gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/medical.jpg"
            alt="Healthcare professionals collaborating in a clinical setting"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-blue-50/90" />
        </div>

        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-blue shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
            50+ Medical Specialties
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#004b87] leading-tight">
            Medical Specialities We Serve
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Purpose-built billing support for every type of practice, from ambulatory
            surgery centers to multi-specialty clinics.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <Activity className="h-4 w-4 text-accent-green" />
              <span>Higher Clean-Claim Rate</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <BarChart3 className="h-4 w-4 text-primary-blue" />
              <span>RCM-Driven Insights</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <Shield className="h-4 w-4 text-accent-green" />
              <span>Compliant First</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-32 bg-section-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {specialities
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.name}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.03,
                    transition: { type: "tween", stiffness: 200, damping: 10 },
                  }}
                >
                  <div
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                  >
                    <Card className="group relative h-full overflow-hidden rounded-xxl border border-border/70 bg-white/85 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                      <CardHeader className="flex flex-col items-center gap-3 pb-5 pt-6 text-center">
                        <div className="inline-flex items-center justify-center rounded-xl text-cyan-700 p-3 transition-colors duration-300">
                          <Icon
                            className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                          />
                        </div>
                        <CardTitle className="text-lg font-bold text-primary-blue leading-snug">
                          {spec.name}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Specialized Billing Matters */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#004b87] mb-4">
              Why Specialized Billing Matters
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each medical specialty has unique billing requirements, coding complexities, and compliance standards. 
              Our specialized approach ensures maximum reimbursement and compliance for your practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: CheckCircle2,
                title: "Specialty-Specific Expertise",
                description: "Deep understanding of each specialty's unique billing codes and requirements"
              },
              {
                icon: TrendingUp,
                title: "Higher Reimbursement",
                description: "Specialized knowledge leads to fewer denials and faster payments"
              },
              {
                icon: Users,
                title: "Dedicated Teams",
                description: "Each specialty has a team trained specifically in that field's billing"
              },
              {
                icon: Award,
                title: "Compliance First",
                description: "Stay compliant with specialty-specific regulations and guidelines"
              }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-green/10 mb-4">
                    <Icon className="text-accent-green" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#004b87] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#004b87] mb-4">
              Ready to Optimize Your Specialty Billing?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Let our specialized billing experts handle your revenue cycle management. 
              Get started with a free consultation and see how we can improve your collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent-green text-white hover:bg-[#004b87] text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Request Free Consultation
                </Button>
              </Link>
              <a href="tel:5127047074">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#004b87] text-[#004b87] hover:bg-blue-50 text-lg px-8 py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (512) 704-7074
                </Button>
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-600 mb-4">Or explore our services</p>
              <Link
                href="/services"
                className="inline-flex items-center text-accent-green font-semibold hover:text-[#004b87] transition-colors group"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

