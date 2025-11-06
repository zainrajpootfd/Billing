"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What medical billing services do you offer?",
    answer:
      "We offer comprehensive medical billing services including revenue cycle management, claim submission, payment posting, denial management, A/R recovery, medical credentialing, and detailed performance reporting. Our services are tailored to meet the unique needs of your practice.",
  },
  {
    question: "How does your billing process work?",
    answer:
      "Our 3-step process includes: (1) Claim Preparation & Submission - We accurately code and submit claims on time, (2) Payment Posting & Reconciliation - We track and post all payments, and (3) Denial Management & Follow-Up - We resolve denials and ensure steady cash flow. This streamlined approach ensures faster reimbursements and better financial clarity.",
  },
  {
    question: "Are you HIPAA compliant?",
    answer:
      "Yes, we are fully HIPAA compliant. We maintain strict security measures and follow all HIPAA regulations to protect patient information. All our staff are trained on HIPAA compliance, and we use secure, encrypted systems for all data handling.",
  },
  {
    question: "What specialties do you serve?",
    answer:
      "We serve a wide range of medical specialties including family practice, internal medicine, cardiology, orthopedics, pediatrics, dermatology, mental health, and many more. Our team has experience with 50+ specialties and can handle billing for various practice types.",
  },
  {
    question: "How much does your service cost?",
    answer:
      "Our pricing is customized based on your practice size, specialty, and specific needs. We offer competitive rates with transparent pricing. Contact us for a free practice audit and customized quote that fits your budget.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most practices see improvements within the first 30-60 days. We typically achieve a 30% reduction in A/R, 90% collection ratio, and 30% revenue increase. Our clients often experience faster claim processing and improved cash flow within the first month.",
  },
  {
    question: "Do you provide detailed reporting?",
    answer:
      "Yes, we provide comprehensive, real-time reporting through our dashboard. You'll have access to detailed performance metrics, collection reports, denial analysis, and revenue cycle analytics. Our reports are clear, actionable, and tailored to your practice's financial objectives.",
  },
  {
    question: "What if I have questions or need support?",
    answer:
      "We provide dedicated support with a dedicated account manager for each practice. Our team is available to address any questions or concerns with speed and professionalism. We offer phone, email, and video call support to ensure you always have the help you need.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-green/10 rounded-full mb-4">
            <HelpCircle className="text-accent-green" size={32} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions? We've got answers. Find everything you need to know
            about our medical billing services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-accent-green/50 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-primary-blue pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-accent-green transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-green text-white rounded-lg font-semibold hover:bg-primary-blue transition-all hover:scale-105 active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

