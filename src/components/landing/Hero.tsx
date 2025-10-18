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
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// 👥 People You Can Trust (for Animated Tooltip)
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
  {
    id: 5,
    name: "Sarah Khan",
    designation: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 6,
    name: "Ahmed Raza",
    designation: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 7,
    name: "Ayesha Malik",
    designation: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const doctors = [
  "/healthcare-professional-doctor.jpg",
  "/healthcare-professional-doctor.2.jpg",
  "/healthcare-professional-doctor.3.jpg",
];

export default function Hero() {
  const [doctorIndex, setDoctorIndex] = useState(0);

  const nextDoctor = () =>
    setDoctorIndex((prev) => (prev + 1) % doctors.length);
  const prevDoctor = () =>
    setDoctorIndex((prev) => (prev - 1 + doctors.length) % doctors.length);

  // Auto-slide doctor images every 3s
  useEffect(() => {
    const interval = setInterval(nextDoctor, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-visible bg-gradient-to-br from-white via-white to-gray-50 py-20 lg:py-32">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
              HIPAA Compliance Medical Billing Company
            </h1>
            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Streamline your revenue cycle with our comprehensive medical
              billing solutions. We help healthcare providers maximize
              collections and minimize administrative burden.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors hover:scale-105 active:scale-95">
                Request Demo
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors hover:scale-105 active:scale-95">
                Learn More
              </button>
            </div>

            {/* Trusted by Professionals (AnimatedTooltip) */}
            <div
              className="space-y-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Trusted by Professionals
              </p>
              <div className="flex items-center justify-start">
                <AnimatedTooltip items={trustedPeople} />
              </div>
            </div>
          </div>

          {/* Right Doctor Image Carousel */}
          <div
            className="relative animate-fade-in-right"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={doctors[doctorIndex]}
                alt={`Doctor ${doctorIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-700"
              />
              {/* Navigation */}
              <button
                onClick={prevDoctor}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white/100 transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextDoctor}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white/100 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
