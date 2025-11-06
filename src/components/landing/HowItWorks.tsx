"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, RotateCw, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Claim Preparation & Submission",
    description:
      "Accurate coding and timely submission for faster reimbursements.",
    color: "bg-primary-light",
    iconColor: "text-primary-blue",
  },
  {
    icon: CheckCircle,
    title: "Payment Posting & Reconciliation",
    description:
      "Track, post, and reconcile payments for financial clarity.",
    color: "bg-secondary-light",
    iconColor: "text-accent-green",
  },
  {
    icon: RotateCw,
    title: "Denial Management & Follow-Up",
    description:
      "Resolve denials, recover revenue, and ensure steady cash flow.",
    color: "bg-primary-lighter",
    iconColor: "text-primary-blue",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-section-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
            3-Step Medical Billing Process
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our streamlined process ensures accurate claim processing, enhanced
            patient care, and quicker reimbursements.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue via-accent-green to-primary-blue transform -translate-y-1/2 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-section-green-light to-transparent opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={stepVariants}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-green rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20">
                    {index + 1}
                  </div>

                  <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card-default border-2 border-border hover:border-accent-green/50">
                    <CardHeader className="flex flex-col items-center text-center pb-4">
                      <div
                        className={`mb-6 p-6 ${step.color} rounded-full w-fit group transition-all`}
                      >
                        <Icon
                          className={`${step.iconColor} group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`}
                          size={48}
                        />
                      </div>
                      <CardTitle className="text-xl font-semibold text-primary-blue mb-2">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Arrow (Desktop, between steps) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 z-20">
                      <div className="w-12 h-12 bg-card-default rounded-full flex items-center justify-center shadow-lg border-2 border-accent-green/30">
                        <ArrowRight
                          className="text-accent-green"
                          size={24}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to streamline your billing process?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-green text-white rounded-md font-semibold hover:bg-primary-blue transition-all hover:scale-105 active:scale-95"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}

