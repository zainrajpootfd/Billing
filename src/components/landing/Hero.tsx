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
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative overflow-hidden py-10 lg:py-20 border-b border-border bg-section-blue-medium">
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
            HIPAA Compliance Medical Billing Group
          </h1>

          <p className="font-lato text-lg text-muted-foreground mb-8 leading-relaxed">
            Streamline your revenue cycle with our comprehensive medical billing
            solutions. We help healthcare providers maximize collections and
            minimize administrative burden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact">
              <Button className="px-8 py-6 bg-accent-green text-white rounded-md font-semibold hover:bg-primary-blue transition-all hover:scale-105 active:scale-95">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Trusted by Professionals - Modern Rating Display */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="relative mt-8"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 via-white/60 to-blue-50/40 backdrop-blur-xl border border-white/20 shadow-lg shadow-blue-500/10 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-blue-900/20 dark:border-gray-700/30 dark:shadow-blue-500/20"
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(59, 130, 246, 0.1)",
                  "0 15px 50px rgba(59, 130, 246, 0.15)",
                  "0 10px 40px rgba(59, 130, 246, 0.1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Animated Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />
              
              {/* Pulsing background glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-green-400/0 to-blue-400/0"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Star Rating Section */}
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + i * 0.15,
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                          }}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          className="relative"
                        >
                          {i < 4 ? (
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 dark:text-yellow-500"
                              animate={{
                                scale: [1, 1.15, 1],
                                filter: [
                                  "brightness(1) drop-shadow(0 0 2px rgba(251, 191, 36, 0.5))",
                                  "brightness(1.4) drop-shadow(0 0 8px rgba(251, 191, 36, 0.8))",
                                  "brightness(1) drop-shadow(0 0 2px rgba(251, 191, 36, 0.5))",
                                ],
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                              }}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.956c.3.922-.755 1.688-1.54 1.118l-3.371-2.449a1 1 0 00-1.176 0l-3.371 2.45c-.784.569-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.274-3.957z" />
                              {/* Animated glow effect */}
                              <defs>
                                <filter id={`glow-${i}`}>
                                  <feGaussianBlur
                                    stdDeviation="3"
                                    result="coloredBlur"
                                  />
                                  <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                  </feMerge>
                                </filter>
                              </defs>
                            </motion.svg>
                          ) : (
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400/40 dark:text-yellow-500/30"
                              animate={{
                                opacity: [0.4, 0.7, 0.4],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.956c.3.922-.755 1.688-1.54 1.118l-3.371-2.449a1 1 0 00-1.176 0l-3.371 2.45c-.784.569-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.274-3.957z" />
                            </motion.svg>
                          )}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Rating Number with animated gradient */}
                    <div className="flex items-baseline gap-2">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.8,
                          type: "spring",
                          stiffness: 150,
                        }}
                        className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-blue via-accent-green to-primary-blue bg-[length:200%_100%] bg-clip-text text-transparent dark:from-blue-400 dark:via-green-400 dark:to-blue-400"
                        style={{
                          animation: "gradient-shift 5s ease-in-out infinite",
                        }}
                      >
                        4.8
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium"
                      >
                        /5
                      </motion.span>
                    </div>
                  </div>

                  {/* Text Content with staggered animations */}
                  <div className="flex-1 text-center sm:text-left">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.9,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed"
                    >
                      Rated{" "}
                      <motion.span
                        className="font-semibold text-primary-blue dark:text-blue-400"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.2,
                          ease: "easeInOut",
                        }}
                      >
                        4.8
                      </motion.span>{" "}
                      by{" "}
                      <motion.span
                        className="font-semibold text-accent-green dark:text-green-400"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        7+ happy clients
                      </motion.span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2"
                    >
                      Trusted by healthcare professionals nationwide
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
