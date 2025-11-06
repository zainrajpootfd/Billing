"use client";

import { motion } from "framer-motion";
import { Search, Settings, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Search className="h-10 w-10" />,
    title: "Assess",
    description:
      "Schedule a meeting with us. Our experts are here to understand your challenges and goals so we can identify the right solution—even if it doesn't involve Encore.",
  },
  {
    icon: <Settings className="h-10 w-10" />,
    title: "Build",
    description:
      "Let our training and implementation teams take over. We create the strategy, configure the systems, and deliver the solution in your EHR—seamlessly.",
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Consult",
    description:
      "Healthcare is changing. Our Client Success Teams exist to provide long-term planning and consulting that differentiates your business.",
  },
];

export default function HowToGetStarted() {
  return (
    <section className="py-20 lg:py-32 bg-section-blue-medium relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-green rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4"
          >
            Let's Get Started
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Our simple three-step process gets you up and running quickly. From
            assessment to implementation, we're with you every step of the way.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Connector line (hidden on last item) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-accent-green/30 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-5 w-5 text-accent-green" />
                  </div>
                </div>
              )}

              <div className="relative bg-card-default rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-accent-green/10 rounded-full p-4 text-accent-green">
                    {step.icon}
                  </div>
                </div>
                <div className="mb-4">
                  <span className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mb-3 mx-auto">
                    {idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-primary-blue mb-3">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary-blue mb-6">
            Are you ready to elevate your revenue?
          </h3>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-accent-green hover:bg-primary-blue text-white px-8 py-6 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

