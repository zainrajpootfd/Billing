"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { insightsData } from "@/data/insightsData";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function InsightsPage() {
  const featured = insightsData[0];
  const restInsights = insightsData.slice(1);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* 🔹 Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004b87] mb-6">
            Industry Insights
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, technologies, and strategies
            transforming the world of medical billing and healthcare management.
          </p>
        </motion.div>

        {/* 🔹 Featured Insight */}
        {featured && (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="relative mb-20 overflow-hidden rounded-3xl shadow-xl group"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              width={1200}
              height={600}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
              <p className="text-sm uppercase tracking-widest text-blue-300 mb-3">
                Featured Insight
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
                {featured.title}
              </h2>
              <p className="text-gray-200 max-w-2xl mb-6">
                {featured.shortDescription}
              </p>

              <Link
                href={`/insights/${featured.slug}`}
                className="inline-flex items-center bg-accent-green hover:bg-[#004b87] text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* 🔹 Other Insights Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="initial"
          whileInView="animate"
        >
          {restInsights.map((insight) => (
            <motion.div
              key={insight.id}
              variants={fadeInUp}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#004b87] transition-colors">
                  {insight.title}
                </h2>
                <p className="text-gray-600 mb-4">{insight.shortDescription}</p>

                <Link
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center text-accent-green font-medium hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
