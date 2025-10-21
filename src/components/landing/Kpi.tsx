// "use client";

// import { useEffect, useState } from "react";

// interface KPIItem {
//   value: string;
//   label: string;
//   suffix?: string;
// }

// const kpis: KPIItem[] = [
//   { value: "40", label: "Reduction in A/R", suffix: "%" },
//   { value: "10", label: "Days Turnaround Time" },
//   { value: "99", label: "Accuracy Rate", suffix: "%" },
//   { value: "500", label: "Active Clients", suffix: "+" },
// ];

// function Counter({ target, suffix = "" }: { target: string; suffix?: string }) {
//   const [count, setCount] = useState(0);
//   const numValue = Number(target);

//   useEffect(() => {
//     let start = 0;
//     const increment = Math.ceil(numValue / 50);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= numValue) {
//         setCount(numValue);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, 10);
//     return () => clearInterval(timer);
//   }, [numValue]);

//   return (
//     <span>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function KPI() {
//   return (
//     <section className=" py-20 lg:py-32 bg-gradient-to-br from-cyan-200 via-white to-green-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
//             Why Choose Encore?
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto  ">
//             {/* Proven results that drive your practice forward */}
//             Our comprehensive medical billing KPIs are clear, trackable, and
//             tailored to support your practice’s financial objectives. The
//             outcome? Precise claim submissions, improved patient experience, and
//             quicker payments.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {kpis.map((kpi, idx) => (
//             <div
//               key={kpi.label}
//               className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-scale-in"
//               style={{ animationDelay: `${idx * 0.1}s` }}
//             >
//               <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
//                 <Counter target={kpi.value} suffix={kpi.suffix} />
//               </div>
//               <p className="text-muted-foreground font-medium">{kpi.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";

interface KPIItem {
  value: string;
  label: string;
  suffix?: string;
}

const kpis: KPIItem[] = [
  { value: "40", label: "Reduction in A/R", suffix: "%" },
  { value: "10", label: "Days Turnaround Time" },
  { value: "99", label: "Accuracy Rate", suffix: "%" },
  { value: "500", label: "Active Clients", suffix: "+" },
];

function Counter({
  target,
  suffix = "",
  start,
}: {
  target: string;
  suffix?: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);
  const numValue = Number(target);

  useEffect(() => {
    if (!start) {
      setCount(0); // reset when not visible
      return;
    }

    let current = 0;
    const increment = Math.ceil(numValue / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [numValue, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function KPI() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // triggers when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32  bg-gradient-to-r from-[#daf2fe] to-blue-100
      overflow-hidden relative


"
    >
      {/* Hexagon Background */}
      <div
        className="absolute inset-0 bg-center opacity-40 pointer-events-none"
        style={{
          backgroundColor: "#daf2fe",
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/hexellence.png')",
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
          mixBlendMode: "normal",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
            Why Choose Encore?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our comprehensive medical billing KPIs are clear, trackable, and
            tailored to support your practice’s financial objectives. The
            outcome? Precise claim submissions, improved patient experience, and
            quicker payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, idx) => (
            <div
              key={kpi.label}
              className="text-center p-8 bg-gray-100 backdrop-blur-xl rounded-xl shadow-sm hover:shadow-md transition-shadow animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-blue mb-2">
                <Counter
                  target={kpi.value}
                  suffix={kpi.suffix}
                  start={visible}
                />
              </div>
              <p className="text-gray-700 font-medium">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
