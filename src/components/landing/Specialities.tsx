// "use client";

// import { useEffect, useRef } from "react";
// import { Heart, Brain, Bone, Eye, Stethoscope, Zap } from "lucide-react";
// import { CardContainer, CardItem } from "@/components/ui/card3D"; // import 3D card

// const specialities = [
//   {
//     icon: Heart,
//     name: "Cardiology",
//     description: "Specialized billing for cardiac care",
//   },
//   {
//     icon: Brain,
//     name: "Neurology",
//     description: "Expert handling of neurological services",
//   },
//   {
//     icon: Bone,
//     name: "Orthopedics",
//     description: "Comprehensive orthopedic billing",
//   },
//   {
//     icon: Eye,
//     name: "Ophthalmology",
//     description: "Specialized eye care billing center",
//   },
//   {
//     icon: Stethoscope,
//     name: "Internal Medicine",
//     description: "General internal medicine billing services",
//   },
//   {
//     icon: Zap,
//     name: "Emergency Medicine",
//     description: "Urgent care and ER billing instant",
//   },
// ];

// export default function Specialities() {
//   // refs for each CardItem DOM element
//   const cardRefs = useRef<Array<HTMLElement | null>>([]);

//   // measure and set minHeight on each card to the tallest card height
//   useEffect(() => {
//     const setEqualHeights = () => {
//       // small delay ensures fonts and images are loaded on slower devices
//       requestAnimationFrame(() => {
//         // read heights
//         const heights = cardRefs.current
//           .map((el) => (el ? el.getBoundingClientRect().height : 0))
//           .filter(Boolean) as number[];

//         if (!heights.length) return;

//         const max = Math.max(...heights);

//         // apply minHeight to each card element
//         cardRefs.current.forEach((el) => {
//           if (el) {
//             // only set if different to avoid layout thrash
//             const current = parseFloat(getComputedStyle(el).minHeight) || 0;
//             if (Math.abs(current - max) > 1) {
//               // use px so it works across devices
//               (el.style as CSSStyleDeclaration).minHeight = `${max}px`;
//             }
//           }
//         });
//       });
//     };

//     // initial set and also after a small timeout (for fonts/images)
//     setEqualHeights();
//     const timer = setTimeout(setEqualHeights, 300);

//     // recompute on resize/orientation change
//     window.addEventListener("resize", setEqualHeights);
//     window.addEventListener("orientationchange", setEqualHeights);

//     // optional: recompute when fonts finish loading (safe)
//     if ((document as any).fonts && (document as any).fonts.ready) {
//       (document as any).fonts.ready.then(setEqualHeights).catch(() => {});
//     }

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", setEqualHeights);
//       window.removeEventListener("orientationchange", setEqualHeights);
//     };
//   }, []);

//   return (
//     <section className="py-20 lg:py-32 bg-[#ebedf0] dark:from-emerald-950 dark:via-zinc-900 dark:to-purple-950">
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
//         <h2 className="text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
//           Medical Specialities We Serve
//         </h2>
//         <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//           Expert billing solutions for every medical specialty
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
//         {specialities.map((spec, idx) => {
//           const Icon = spec.icon;
//           return (
//             <CardContainer key={spec.name} containerClassName="h-full w-full">
//               {/* attach ref to the actual CardItem element so we can measure it */}
//               <CardItem
//                 // preserve all your existing classes exactly
//                 className="p-8 bg-[#70B2B2]/20 border border-emerald-200/50 rounded-xl transition-all duration-300 cursor-pointer group hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100/40 dark:bg-zinc-900/50 dark:hover:shadow-purple-900/30 flex flex-col justify-between h-full"
//                 translateZ={20}
//                 // @ts-ignore - CardItem may not expose ref type; cast to any to attach DOM node
//                 ref={(el: HTMLElement | null) => {
//                   cardRefs.current[idx] = el;
//                 }}
//               >
//                 <div>
//                   <div className="mb-4 p-4 bg-accent-green/10 rounded-lg w-fit group-hover:bg-accent-green/20 transition-colors">
//                     <Icon className="text-accent-green" size={32} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-primary-blue mb-2">
//                     {spec.name}
//                   </h3>
//                   <p className="text-gray-700">{spec.description}</p>
//                 </div>
//               </CardItem>
//             </CardContainer>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { Heart, Brain, Bone, Eye, Stethoscope, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const specialities = [
  {
    icon: Heart,
    name: "Cardiology",
    description: "Specialized billing for cardiac care",
  },
  {
    icon: Brain,
    name: "Neurology",
    description: "Expert handling of neurological services",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Comprehensive orthopedic billing",
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Specialized eye care billing center",
  },
  {
    icon: Stethoscope,
    name: "Internal Medicine",
    description: "General internal medicine billing services",
  },
  {
    icon: Zap,
    name: "Emergency Medicine",
    description: "Urgent care and ER billing instant",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Specialities() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const setEqualHeights = () => {
      requestAnimationFrame(() => {
        const heights = cardRefs.current
          .map((el) => (el ? el.getBoundingClientRect().height : 0))
          .filter(Boolean);

        if (!heights.length) return;

        const max = Math.max(...heights);
        cardRefs.current.forEach((el) => {
          if (el) {
            const current = parseFloat(getComputedStyle(el).minHeight) || 0;
            if (Math.abs(current - max) > 1) el.style.minHeight = `${max}px`;
          }
        });
      });
    };

    setEqualHeights();
    const timer = setTimeout(setEqualHeights, 300);
    window.addEventListener("resize", setEqualHeights);
    window.addEventListener("orientationchange", setEqualHeights);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(setEqualHeights).catch(() => {});
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", setEqualHeights);
      window.removeEventListener("orientationchange", setEqualHeights);
    };
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-[#ebedf0] dark:bg-gradient-to-br dark:from-emerald-950 dark:via-zinc-900 dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
          Medical Specialities We Serve
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Expert billing solutions for every medical specialty
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {specialities.map((spec, idx) => {
          const Icon = spec.icon;
          return (
            <motion.div
              key={spec.name}
              variants={cardVariants}
              whileHover={{
                rotate: -10,
                scale: 1.03,
                transition: { type: "tween", stiffness: 200, damping: 10 },
              }}
            >
              {/* ✅ ref attached here (on plain div) */}
              <div ref={(el) => (cardRefs.current[idx] = el)}>
                <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-[#70B2B2]/20 border border-emerald-200/50">
                  <CardHeader className="flex flex-col items-start">
                    <div className="mb-4 p-4 bg-accent-green/10 rounded-lg w-fit group-hover:bg-accent-green/20 transition-all">
                      <Icon
                        className="text-accent-green group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
                        size={32}
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-primary-blue mb-2">
                      {spec.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{spec.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
