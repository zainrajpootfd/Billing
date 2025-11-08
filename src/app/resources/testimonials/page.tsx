"use client";

import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion, Variants } from "motion/react";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Practice Owner",
    quote:
      "Encore Billing Group transformed our billing process. We saw a 40% improvement in collections within the first quarter.",
    src: "/model-3.jpg",
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    quote:
      "The team is incredibly responsive and professional. They handle everything so we can focus on patient care.",
    src: "/model-2.jpg",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Medical Director",
    quote:
      "Outstanding service and support. Their expertise in medical billing is unmatched in the industry.",
    src: "/model-1.jpg",
  },
  {
    name: "James Wilson",
    role: "Clinic Administrator",
    quote:
      "The automation and reporting tools are amazing. I can finally track every payment without stress.",
    src: "/model-4.jpg",
  },
  {
    name: "Dr. Olivia Green",
    role: "Pediatric Specialist",
    quote:
      "Working with Encore has been a game-changer. Our claims are processed faster and we have complete transparency.",
    src: "/model-5.jpg",
  },
  {
    name: "Dr. Sophia Martinez",
    role: "Family Physician",
    quote:
      "Their professionalism is unmatched. The communication is excellent, and their team truly cares about client success.",
    src: "/model-2.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TestimonialsPage() {
  const [isInView, setIsInView] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <main className="bg-white text-[#004b87] min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-6 md:px-20 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-[#004b87]"
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700"
          >
            Discover how{" "}
            <span className="font-semibold text-[#004b87]">
              Encore Billing Group
            </span>{" "}
            empowers healthcare providers to streamline billing, enhance revenue,
            and deliver exceptional patient-focused operations.
          </motion.p>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto" ref={gridRef}>
          {/* Bento Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <BentoGrid className="gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className={
                    i === 0
                      ? "md:col-span-2"
                      : i === 2
                      ? "md:row-span-2"
                      : "md:col-span-1"
                  }
                >
                  <BentoGridItem
                    title={
                      <span className="text-lg font-bold text-[#004b87]">
                        {t.name}
                      </span>
                    }
                    description={
                      <span className="italic text-gray-700 leading-relaxed text-sm md:text-base">
                        "{t.quote}"
                      </span>
                    }
                    header={
                      <div
                        className={`relative w-full rounded-xl overflow-hidden group/image ${
                          i === 2 ? "md:h-full min-h-[18rem]" : "h-36 md:h-40"
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10"></div>
                        <Image
                          src={t.src}
                          alt={t.name}
                          fill
                          className="object-cover transition-all duration-500 group-hover/image:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover/image:translate-y-0 transition-transform duration-300 z-20">
                          <p className="text-white text-sm font-medium">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    }
                    icon={
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        {t.role}
                      </p>
                    }
                    className="h-full border-2 border-gray-100 hover:border-[#004b87]/30 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm overflow-hidden group/card"
                  />
                </motion.div>
              ))}
            </BentoGrid>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-[#004b87] mb-4"
          >
            Ready to Experience Excellence in Medical Billing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            Join hundreds of satisfied clients who trust Encore Billing Group to
            handle their revenue cycle management with precision and care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-accent-green text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-[#004b87] transition-all duration-300"
            >
              Contact Us
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-[#004b87] text-[#004b87] font-semibold rounded-full hover:bg-[#004b87] hover:text-white transition-all duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

