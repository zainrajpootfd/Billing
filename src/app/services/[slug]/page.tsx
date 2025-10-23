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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header
      <motion.header
        className="bg-blue-600 text-white py-4 sticky top-0 z-50 shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Medical Billing Solutions</h1>
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5" />
            <a
              href="tel:888-508-6818"
              className="text-lg font-semibold hover:text-blue-200 transition-colors"
            >
              888-508-6818
            </a>
          </div>
        </div>
      </motion.header> */}

      {/* Back */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/services">
          <Button variant="ghost" className="hover:bg-blue-100">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Services
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {service.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:888-508-6818">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get a Quote
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={serviceImage}
                alt={service.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600">
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
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" />
                      <p className="text-lg text-gray-700">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits You'll Experience
            </h2>
            <p className="text-lg text-gray-600">
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
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-l-blue-600"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how {service.title.toLowerCase()} can benefit your
              practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:888-508-6818">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 888-508-6818
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Information
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
