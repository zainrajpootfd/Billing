// "use client";
// import Image from "next/image";
// import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// // Certification logos
// const logos = [
//   { name: "ASRM", color: "bg-gray-200" },
//   { name: "NILA", color: "bg-gray-200" },
//   { name: "ISO", color: "bg-gray-200" },
//   { name: "ONC", color: "bg-gray-200" },
// ];

// // Doctor images carousel
// const doctors = [
//   "/healthcare-professional-doctor.jpg",
//   "/healthcare-professional-doctor.2.jpg",
//   "/healthcare-professional-doctor.3.jpg",
// ];

// export default function Hero() {
//   const [logoIndex, setLogoIndex] = useState(0);
//   const [doctorIndex, setDoctorIndex] = useState(0);
//   const logoInterval = useRef<NodeJS.Timer | null>(null);

//   // Logo carousel navigation
//   const nextLogo = () => setLogoIndex((prev) => (prev + 1) % logos.length);
//   const prevLogo = () =>
//     setLogoIndex((prev) => (prev - 1 + logos.length) % logos.length);

//   // Auto-slide logos
//   useEffect(() => {
//     logoInterval.current = setInterval(nextLogo, 3000);
//     return () => {
//       if (logoInterval.current) clearInterval(logoInterval.current);
//     };
//   }, []);

//   // Doctor image carousel navigation
//   const nextDoctor = () =>
//     setDoctorIndex((prev) => (prev + 1) % doctors.length);
//   const prevDoctor = () =>
//     setDoctorIndex((prev) => (prev - 1 + doctors.length) % doctors.length);

//   // Auto-slide doctor images every 5s
//   useEffect(() => {
//     const interval = setInterval(nextDoctor, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-gray-50 py-20 lg:py-32">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float-reverse" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="animate-fade-in-left">
//             <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
//               HIPAA Compliance Medical Billing Company
//             </h1>
//             <p
//               className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up"
//               style={{ animationDelay: "0.1s" }}
//             >
//               Streamline your revenue cycle with our comprehensive medical
//               billing solutions. We help healthcare providers maximize
//               collections and minimize administrative burden.
//             </p>

//             <div
//               className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors hover:scale-105 active:scale-95">
//                 Request Demo
//               </button>
//               <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors hover:scale-105 active:scale-95">
//                 Learn More
//               </button>
//             </div>

//             {/* Certifications Carousel */}
//             <div
//               className="space-y-4 animate-fade-in-up"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
//                 Trusted Certifications
//               </p>
//               <div className="flex items-center gap-1">
//                 <button
//                   onClick={prevLogo}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors hover:scale-110 active:scale-90"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>

//                 <div className="flex  flex-1 overflow-hidden">
//                   <div
//                     className="flex gap-2 transition-transform duration-700"
//                     style={{ transform: `translateX(-${logoIndex * 6}rem)` }} // 6rem = width + gap of one logo
//                   >
//                     {/* Duplicate logos for seamless infinite scroll */}
//                     {[...logos, ...logos].map((logo, idx) => (
//                       <div
//                         key={idx}
//                         className={`flex-shrink-0 w-24 h-24 ${logo.color}  rounded-lg flex items-center justify-center font-semibold text-sm`}
//                       >
//                         {logo.name}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <button
//                   onClick={nextLogo}
//                   className="p-2 hover:bg-gray-100 rounded-lg transition-colors hover:scale-110 active:scale-90"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Doctor Image Carousel */}
//           <div
//             className="relative animate-fade-in-right"
//             style={{ animationDelay: "0.1s" }}
//           >
//             <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//               <Image
//                 src={doctors[doctorIndex]}
//                 alt={`Doctor ${doctorIndex + 1}`}
//                 fill
//                 className="object-cover transition-opacity duration-700"
//               />
//               {/* Navigation */}
//               <button
//                 onClick={prevDoctor}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white/100 transition"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 onClick={nextDoctor}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white/100 transition"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef, Suspense } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const trustedPeople = [
  {
    id: 1,
    name: "Zain Ali",
    designation: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Khan",
    designation: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    designation: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Ayesha Malik",
    designation: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const AnimatedTooltipLazy = dynamic(
  () =>
    import("@/components/ui/animated-tooltip").then(
      (mod) => mod.AnimatedTooltip
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"
          />
        ))}
      </div>
    ),
  }
);

export default function Hero() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTooltipVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (tooltipRef.current) observer.observe(tooltipRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden  py-10 lg:py-20 border-b border-gray-200 bg-[#B3C8CF]/20">
      {/* Floating medical icons across whole section */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute "
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Image
              src="/asrm.png"
              alt="Medical Sign"
              width={70 + Math.random() * 30}
              height={70 + Math.random() * 30}
            />
          </motion.div>
        ))}
      </div>

      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="animate-fade-in-left">
          <div className="flex items-center mb-2 gap-2 border-2 border-accent-green px-2 py-1 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </span>
            <span className="font-light text-sm font-mono">
              Active Monitoring 24/7
            </span>
          </div>

          <h1 className="font-roboto text-4xl lg:text-5xl font-bold text-primary-blue mb-6 leading-tight">
            HIPAA Compliance Medical Billing Company
          </h1>

          <p className="font-lato text-lg text-muted-foreground mb-8 leading-relaxed">
            Streamline your revenue cycle with our comprehensive medical billing
            solutions. We help healthcare providers maximize collections and
            minimize administrative burden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact">
              <Button className="px-8 py-3 bg-accent-green text-white rounded-lg font-semibold hover:bg-[#004b87] transition-all hover:scale-105 active:scale-95">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Trusted by Professionals */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Trusted by Professionals
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3">
              <div
                className="flex flex-row items-center justify-start"
                ref={tooltipRef}
              >
                <Suspense
                  fallback={
                    <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
                  }
                >
                  {tooltipVisible && (
                    <AnimatedTooltipLazy items={trustedPeople} />
                  )}
                </Suspense>
              </div>

              <div className="flex flex-col items-center sm:items-start sm:ml-5">
                <div className="flex items-center gap-0.5 pb-1">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.956c.3.922-.755 1.688-1.54 1.118l-3.371-2.449a1 1 0 00-1.176 0l-3.371 2.45c-.784.569-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.274-3.957z" />
                    </svg>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-300"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.956c.3.922-.755 1.688-1.54 1.118l-3.371-2.449a1 1 0 00-1.176 0l-3.371 2.45c-.784.569-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.274-3.957z" />
                  </svg>
                </div>

                <span className="text-xs text-gray-700 mt-1">
                  Rated{" "}
                  <span className="font-medium text-primary-blue">4.8/5</span>{" "}
                  by 7+ clients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Animated Section */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full h-[300px] sm:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/hero-banner.png"
              alt="Professional Nurse"
              fill
              loading="lazy"
              className="object-cover rounded-2xl"
            />
          </motion.div>

          {/* Soft gradient glow */}
          <motion.div
            className="absolute -z-20 inset-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="w-[80%] h-[80%] bg-blue-100/60 blur-3xl rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
