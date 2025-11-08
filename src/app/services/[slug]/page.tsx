// app/services/[slug]/page.tsx
"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Phone, Mail } from "lucide-react";
import { getServiceBySlug } from "@/data/servicesData";
import { ReactElement } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const serviceImages: Record<string, string> = {
  "hospital-billing-services":
    "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?auto=format&q=85",
  "medical-billing-services":
    "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&q=85",
  "dental-billing-services":
    "https://images.unsplash.com/photo-1698247889546-730231ee9dfa?auto=format&q=85",
  "medical-credentialing-services":
    "https://images.unsplash.com/photo-1659019479941-1fd644624339?auto=format&q=85",
};

export default function ServiceDetailPage(): ReactElement {
  const params = useParams() as { slug?: string };

  const slug = params?.slug;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link href="/services">
            <Button variant="ghost">Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const serviceImage =
    serviceImages[service.slug] || serviceImages["medical-billing-services"];

  return (
    <main className="bg-white text-[#004b87] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 px-6 md:px-20 text-center md:text-left animate-fade-in">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="relative flex items-center justify-center w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-50 shadow-lg shadow-blue-500/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-blue-400/10 to-blue-500/10 blur-xl"></div>
                <div className="absolute inset-0 rounded-2xl border border-blue-200/50"></div>
                <div className="relative z-10 text-blue-600">
                  {(() => {
                    const Icon = service.icon;
                    return <Icon className="w-12 h-12" />;
                  })()}
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#004b87]">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={serviceImage}
                alt={service.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-6 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <Link href="/services">
            <Button variant="ghost" className="hover:bg-blue-50 text-[#004b87]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004b87] mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {service.features.map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#2ba24c] mt-1" />
                      <p className="text-lg text-gray-700 leading-relaxed">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004b87] mb-4">
              Benefits You'll Experience
            </h2>
            <p className="text-lg text-gray-700">
              Transform your practice with our services
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-[#004b87]"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#004b87] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <p className="text-lg font-semibold text-[#004b87]">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#004b87] mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let's discuss how {service.title.toLowerCase()} can benefit your
              practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:512-988-4965">
                <Button
                  size="lg"
                  className="bg-accent-green text-white hover:bg-[#004b87] text-lg px-8 py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 512-988-4965
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#004b87] text-[#004b87] hover:bg-blue-50 text-lg px-8 py-6"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Request Information
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
