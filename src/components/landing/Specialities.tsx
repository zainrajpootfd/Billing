// "use client";

// import { Heart, Brain, Bone, Eye, Stethoscope, Zap } from "lucide-react";

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
//     description: "Specialized eye care billing",
//   },
//   {
//     icon: Stethoscope,
//     name: "Internal Medicine",
//     description: "General internal medicine billing",
//   },
//   {
//     icon: Zap,
//     name: "Emergency Medicine",
//     description: "Urgent care and ER billing",
//   },
// ];

// export default function Specialities() {
//   return (
//     <section className="py-20 lg:py-32 bg-white">
//       {/* Heading */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
//         <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
//           Medical Specialities We Serve
//         </h2>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//           Expert billing solutions for every medical specialty
//         </p>
//       </div>

//       {/* Specialities Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {specialities.map((spec, idx) => {
//             const Icon = spec.icon;
//             return (
//               <div
//                 key={spec.name}
//                 className="p-8 bg-gray-50 rounded-xl hover:shadow-lg hover:bg-white transition-all duration-300 group cursor-pointer animate-fade-in-up"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <div className="mb-4 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
//                   <Icon className="text-primary" size={32} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-2">
//                   {spec.name}
//                 </h3>
//                 <p className="text-muted-foreground">{spec.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Heart, Brain, Bone, Eye, Stethoscope, Zap } from "lucide-react";
import { CardContainer, CardItem } from "@/components/ui/card3D"; // import 3D card

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

export default function Specialities() {
  return (
    <section className="py-20 lg:py-32 bg-[#ebedf0] dark:from-emerald-950 dark:via-zinc-900 dark:to-purple-950">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
          Medical Specialities We Serve
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Expert billing solutions for every medical specialty
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {specialities.map((spec) => {
          const Icon = spec.icon;
          return (
            <CardContainer key={spec.name} containerClassName="h-full">
              <CardItem
                className="p-8 bg-[#70B2B2]/20 border border-emerald-200/50 rounded-xl transition-all duration-300 cursor-pointer group hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100/40 dark:bg-zinc-900/50 dark:hover:shadow-purple-900/30 flex flex-col justify-between h-full"
                translateZ={20}
              >
                <div>
                  <div className="mb-4 p-4 bg-accent-green/10 rounded-lg w-fit group-hover:bg-accent-green/20 transition-colors">
                    <Icon className="text-accent-green" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-2">
                    {spec.name}
                  </h3>
                  <p className="text-gray-700">{spec.description}</p>
                </div>
              </CardItem>
            </CardContainer>
          );
        })}
      </div>
    </section>
  );
}
