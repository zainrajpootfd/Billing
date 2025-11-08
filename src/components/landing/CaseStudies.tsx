"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "66% Reduction in Gross AR Powers Growth",
    client: "Pulmonary & Critical Care Medicine Associates",
    industry: "Specialty Practice",
    challenge:
      "High accounts receivable and inefficient revenue cycle management were limiting growth potential.",
    solution:
      "Implemented comprehensive RCM solution with dedicated AR management and denial resolution.",
    results: [
      { metric: "AR Reduction", value: "66%", improvement: "decrease" },
      { metric: "Collection Rate", value: "95%+", improvement: "increase" },
      { metric: "Days in A/R", value: "< 37", improvement: "decrease" },
    ],
  },
  {
    id: 2,
    title: "22% Increase in Collections Achieved",
    client: "Advanced Gastroenterology",
    industry: "Specialty Practice",
    challenge:
      "Struggling with claim denials and slow payment processing affecting cash flow.",
    solution:
      "Deployed end-to-end billing services with advanced claim scrubbing and proactive denial management.",
    results: [
      { metric: "Collections", value: "22%", improvement: "increase" },
      { metric: "First Pass Rate", value: "99%", improvement: "increase" },
      { metric: "Revenue", value: "30%", improvement: "increase" },
    ],
  },
  {
    id: 3,
    title: "Streamlined Operations for Multi-Location Practice",
    client: "Orthopedic Specialist Group",
    industry: "Multi-Specialty",
    challenge:
      "Managing billing across multiple locations with inconsistent processes and reporting.",
    solution:
      "Unified billing platform with centralized reporting and standardized workflows across all locations.",
    results: [
      { metric: "Efficiency", value: "40%", improvement: "increase" },
      { metric: "Cost Reduction", value: "25%", improvement: "decrease" },
      { metric: "Accuracy", value: "98%", improvement: "increase" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 lg:py-32 bg-section-green-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-green rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-blue rounded-full blur-3xl" />
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
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            We're proud to partner with healthcare leaders committed to shaping
            the future of care delivery. Learn how we're creating reliable
            revenue with end-to-end RCM solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card-default rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary-blue mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 font-semibold mb-1">
                  {study.client}
                </p>
                <p className="text-xs text-gray-500">{study.industry}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Challenge:</span>{" "}
                  {study.challenge}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Solution:</span>{" "}
                  {study.solution}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {study.results.map((result, resultIdx) => (
                  <div
                    key={resultIdx}
                    className="flex items-center justify-between p-3 bg-section-green-light rounded-lg"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {result.metric}
                    </span>
                    <span className="text-lg font-bold text-accent-green">
                      {result.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/resources/insights" className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center border-accent-green text-accent-green hover:bg-accent-green hover:text-white"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-accent-green hover:bg-primary-blue text-white px-8 py-6"
            >
              See More Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

