// "use client";

// import React from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { DollarSign, Clipboard, RotateCw, Target, Users } from "lucide-react";

// const services = [
//   {
//     icon: DollarSign,
//     title: "Revenue Cycle Management",
//     description:
//       "End-to-end revenue cycle optimization to maximize your collections.",
//   },
//   {
//     icon: Clipboard,
//     title: "Medical Billing Services",
//     description: "Expert billing services with HIPAA compliance and accuracy.",
//   },
//   {
//     icon: RotateCw,
//     title: "A/R Recovery Analysis",
//     description:
//       "Comprehensive analysis and recovery of outstanding accounts receivable.",
//   },
//   {
//     icon: Target,
//     title: "Practice Management Software",
//     description:
//       "Integrated software solutions for efficient practice operations.",
//   },
//   {
//     icon: Users,
//     title: "MedCare Force",
//     description: "Dedicated team of billing specialists for your practice.",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-20 px-6 md:px-20 bg-background">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
//           Our Services
//         </h2>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//           Encore Billing Group offers efficient solutions tailored to your
//           practice's unique needs.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {services.map((service) => {
//           const Icon = service.icon;
//           return (
//             <Card
//               key={service.title}
//               className="hover:shadow-md transition-all cursor-pointer"
//             >
//               <CardHeader>
//                 <div className="mb-3 p-3 bg-primary/10 rounded-lg w-fit">
//                   <Icon className="text-primary" size={24} />
//                 </div>
//                 <CardTitle className="text-lg font-semibold">
//                   {service.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   {service.description}
//                 </p>
//                 <a
//                   href="#"
//                   className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-transform hover:translate-x-1"
//                 >
//                   Learn More →
//                 </a>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { DollarSign, Clipboard, RotateCw, Target, Users } from "lucide-react";

// const services = [
//   {
//     icon: DollarSign,
//     title: "Revenue Cycle Management",
//     description:
//       "End-to-end revenue cycle optimization to maximize your collections.",
//   },
//   {
//     icon: Clipboard,
//     title: "Medical Billing Services",
//     description: "Expert billing services with HIPAA compliance and accuracy.",
//   },
//   {
//     icon: RotateCw,
//     title: "A/R Recovery Analysis",
//     description:
//       "Comprehensive analysis and recovery of outstanding accounts receivable.",
//   },
//   {
//     icon: Target,
//     title: "Practice Management Software",
//     description:
//       "Integrated software solutions for efficient practice operations.",
//   },
//   {
//     icon: Users,
//     title: "MedCare Force",
//     description: "Dedicated team of billing specialists for your practice.",
//   },
// ];

// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// export default function Services() {
//   return (
//     <section className="py-20 px-6 md:px-20 bg-background " id="services">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
//           Our Services
//         </h2>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//           Encore Billing Group offers efficient solutions tailored to your
//           practice's unique needs.
//         </p>
//       </div>

//       {/* Cards */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//       >
//         {services.map((service) => {
//           const Icon = service.icon;
//           return (
//             <motion.div
//               key={service.title}
//               variants={cardVariants}
//               whileHover={{
//                 rotate: [0, -2, 2, -2, 2, 0],
//                 transition: { duration: 0.4, ease: "easeInOut" },
//               }}
//             >
//               <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
//                 <CardHeader className="flex flex-col items-start">
//                   <div className="mb-3 p-3 bg-primary/10 rounded-lg w-fit group transition-all">
//                     <Icon
//                       className="text-primary group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
//                       size={28}
//                     />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">
//                     {service.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-sm text-muted-foreground mb-4">
//                     {service.description}
//                   </p>
//                   <a
//                     href="#"
//                     className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-transform hover:translate-x-1"
//                   >
//                     Learn More →
//                   </a>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, Clipboard, RotateCw, Target, Users } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    description:
      "End-to-end revenue cycle optimization to maximize your collections.",
  },
  {
    icon: Clipboard,
    title: "Medical Billing Services",
    description: "Expert billing services with HIPAA compliance and accuracy.",
  },
  {
    icon: RotateCw,
    title: "A/R Recovery Analysis",
    description:
      "Comprehensive analysis and recovery of outstanding accounts receivable.",
  },
  {
    icon: Target,
    title: "Practice Management Software",
    description:
      "Integrated software solutions for efficient practice operations.",
  },
  {
    icon: Users,
    title: "MedCare Force",
    description: "Dedicated team of billing specialists for your practice.",
  },
];

// ✅ Explicitly typed Variants for TypeScript
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="py-20 px-6 md:px-20 bg-background" id="services">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Our Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Encore Billing Group offers efficient solutions tailored to your
          practice's unique needs.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                rotate: [0, -2, 2, -2, 2, 0],
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <CardHeader className="flex flex-col items-start">
                  <div className="mb-3 p-3 bg-primary/10 rounded-lg w-fit group transition-all">
                    <Icon
                      className="text-primary group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
                      size={28}
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-transform hover:translate-x-1"
                  >
                    Learn More →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
