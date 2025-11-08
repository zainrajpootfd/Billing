"use client";

import { useEffect, useRef } from "react";
import { Heart, Brain, Bone, Eye, Stethoscope, Zap, CheckCircle2, TrendingUp, Users, Award, Phone, Mail, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const specialities = [
  {
    icon: Heart,
    name: "Cardiology",
    description: "Specialized billing for cardiac care",
  },
  {
    icon: Brain,
    name: "Neurology",
    description: "Expert handling of neurological services",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Comprehensive orthopedic billing",
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Specialized eye care billing center",
  },
  {
    icon: Stethoscope,
    name: "Internal Medicine",
    description: "General internal medicine billing services",
  },
  {
    icon: Zap,
    name: "Emergency Medicine",
    description: "Urgent care and ER billing instant",
  },
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
      <section className="relative bg-blue-50 py-20 px-6 md:px-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#004b87]">
            Medical Specialities We Serve
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Expert billing solutions for every medical specialty
          </p>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {specialities.map((spec, idx) => {
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
                    <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-card-default border border-border hover:border-secondary/30">
                      <CardHeader className="flex flex-col items-start">
                        <div className="mb-4 p-4 bg-accent-green/10 rounded-lg w-fit group-hover:bg-accent-green/20 transition-all">
                          <Icon
                            className="text-accent-green group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
                            size={32}
                          />
                        </div>
                        <CardTitle className="text-xl font-semibold text-primary-blue mb-2">
                          {spec.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{spec.description}</p>
                      </CardContent>
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

