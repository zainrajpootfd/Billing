"use client";

import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

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

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
      {/* ================= HERO HEADING ================= */}
      <section className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
        {/* Subtle background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
            What Our Clients Say
          </span>
        </h2>

        {/* Decorative underline */}
        <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full" />

        {/* Supporting text */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover how{" "}
          <span className="font-semibold text-gray-900">
            Encore Billing Group
          </span>{" "}
          empowers healthcare providers to streamline billing, enhance revenue,
          and deliver exceptional patient-focused operations.
        </p>
      </section>

      {/* ================= BENTO GRID ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <BentoGrid>
          {testimonials.map((t, i) => (
            <BentoGridItem
              key={i}
              title={t.name}
              description={
                <span className="italic text-neutral-600 dark:text-neutral-300">
                  “{t.quote}”
                </span>
              }
              // ✅ Image adjusts height dynamically if row-span-2
              header={
                <div
                  className={`relative w-full rounded-lg overflow-hidden ${
                    i === 2 ? "md:h-full min-h-[18rem]" : "h-36"
                  }`}
                >
                  <Image
                    src={t.src}
                    alt={t.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover/bento:scale-105"
                  />
                </div>
              }
              icon={
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {t.role}
                </p>
              }
              className={
                i === 0
                  ? "md:col-span-2"
                  : i === 2
                  ? "md:row-span-2"
                  : "md:col-span-1"
              }
            />
          ))}
        </BentoGrid>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 dark:from-primary/20 dark:via-primary/30 dark:to-primary/10">
        <div className="absolute inset-0 bg-[url('/banner-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 mx-auto max-w-5xl text-center px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#004b87] dark:text-white">
            Ready to Experience Excellence in Medical Billing?
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-neutral-300 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust Encore Billing Group to
            handle their revenue cycle management with precision and care.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-accent-green text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-[#004b87] transition-all"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
