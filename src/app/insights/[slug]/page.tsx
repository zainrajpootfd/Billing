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
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/insights"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Insights
        </Link>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight"
        >
          {insight.title}
        </motion.h1>

        {/* Meta Info */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8"
        >
          <span>👤 {insight.author}</span>
          <span>📅 {insight.date}</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
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
          className="prose prose-lg max-w-none text-gray-700 mb-12"
        >
          <div dangerouslySetInnerHTML={{ __html: insight.content }} />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <Link
            href="/insights"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md"
          >
            Back to Insights
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
