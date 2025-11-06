"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cutting-Edge Technology",
    description:
      "Your front office, clinical, and outsourced billing teams will always be in sync with our integrated cloud-based EMR/EHR platforms.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "No Hassle with Paperwork",
    description:
      "No tedious paperwork and tiresome insurance claims. Use our electronic charting, patient scheduling, billing, and reporting software.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Designed for Independent Practices",
    description:
      "Keep track of your practice's financial health with detailed and transparent reporting. Our RCM reports provide insights into key performance metrics.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Faster Payments",
    description:
      "With our skilled team of medical billers and coders, we ensure faster and more efficient payment processing. Our impressive first-time payment collection rate of 90% speaks for itself.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "24/7 Support & Monitoring",
    description:
      "Active monitoring 24/7 ensures your revenue cycle runs smoothly around the clock. Our dedicated team is always available when you need us.",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Complete Transparency",
    description:
      "Obtain visibility into all claims and billing activities with RCM solutions that clarify every part of the billing workflow.",
  },
];

export default function KeyDifferentiators() {
  return (
    <section className="py-20 lg:py-32 bg-section-default relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4"
          >
            What Makes Us the Best Choice for Healthcare Practitioners?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            We are the only medical billing company that unites technology and
            expertise to meet your revenue cycle management needs. Our
            cutting-edge technology automates tasks and simplifies workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card-default rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-accent-green/50 group"
            >
              <div className="mb-4 text-accent-green group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-blue mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

