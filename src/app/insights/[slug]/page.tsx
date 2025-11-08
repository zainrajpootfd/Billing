"use client";

import { useParams, useRouter } from "next/navigation";
import { insightsData } from "@/data/insightsData";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = insightsData.find((i) => i.slug === slug);

  if (!insight)
    return (
      <div className="text-center py-20 text-gray-600">Insight not found</div>
    );

  return (
    <main className="bg-white text-[#004b87] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 px-6 md:px-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#004b87]">
            {insight.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/insights"
            className="inline-flex items-center text-[#004b87] hover:text-[#2ba24c] mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Insights
          </Link>

          {/* Meta Info */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-8"
          >
            <span>👤 {insight.author}</span>
            <span>📅 {insight.date}</span>
            <span className="px-2 py-1 bg-blue-50 text-[#004b87] rounded-full text-xs font-semibold">
              {insight.category}
            </span>
          </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="rounded-3xl overflow-hidden shadow-lg mb-10"
        >
          <Image
            src={insight.image}
            alt={insight.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="prose prose-lg max-w-none text-gray-700 mb-12 leading-relaxed"
          >
            <div dangerouslySetInnerHTML={{ __html: insight.content }} />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center bg-blue-50 p-6 rounded-lg"
          >
            <Link
              href="/insights"
              className="inline-block bg-accent-green hover:bg-[#004b87] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md"
            >
              Back to Insights
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
