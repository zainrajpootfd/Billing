"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Badge {
  name: string;
  image: string;
  alt: string;
}

const badges: Badge[] = [
  {
    name: "HIPAA Compliant",
    image: "/hippa.png",
    alt: "HIPAA Compliant Certification",
  },
  {
    name: "ISO Certified",
    image: "/iso.png",
    alt: "ISO Certification",
  },
  {
    name: "BBB Accredited",
    image: "/bbb.png",
    alt: "Better Business Bureau Accreditation",
  },
  {
    name: "ASRM Member",
    image: "/asrm.png",
    alt: "ASRM Member",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 lg:py-20 bg-section-default border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl lg:text-3xl font-bold text-primary-blue mb-4"
          >
            Trusted & Certified
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700 max-w-xl mx-auto"
          >
            We maintain the highest standards of compliance and security to
            protect your practice and patient data.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-card-default rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 w-full max-w-[200px] aspect-square flex items-center justify-center">
                <Image
                  src={badge.image}
                  alt={badge.alt}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-700 text-center">
                {badge.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

