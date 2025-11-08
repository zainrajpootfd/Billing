"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  TrendingUp,
  Heart,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Our services are customized to meet your specific requirements with the best results.",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Revenue",
    description:
      "Our optimized billing solutions are designed to reduce errors, minimize denials, and increase your bottom line.",
  },
  {
    icon: Heart,
    title: "Focus on Patient Care",
    description:
      "By taking the burden of billing off your shoulders, we enable you to concentrate on providing excellent care to your patients.",
  },
  {
    icon: Shield,
    title: "Dedicated Support",
    description:
      "Ready to address any questions or concerns with speed and professionalism.",
  },
  {
    icon: Clock,
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest technology to streamline processes and ensure accuracy in every claim.",
  },
  {
    icon: Award,
    title: "Compliance & Security",
    description:
      "HIPAA compliant with transparent and reliable service tailored to your practice.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-section-blue-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
            Why Choose Encore Billing Group?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Experience the difference a decade of expertise can make. Let Encore
            Billing Group handle your billing needs while you focus on what you do
            best—caring for your patients.
          </p>
        </div> */}
        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={cardVariants}>
                <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-card-blue border-border hover:border-accent-green/30">
                  <CardHeader className="flex flex-col items-start">
                    <div className="mb-4 p-3 bg-accent-green/10 rounded-lg w-fit group transition-all">
                      <Icon
                        className="text-accent-green group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
                        size={32}
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-primary-blue">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to experience the difference?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-green text-white rounded-md font-semibold hover:bg-primary-blue transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

