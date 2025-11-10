

"use client";

import { useEffect, useState, useRef } from "react";

interface KPIItem {
  value: string;
  label: string;
  suffix?: string;
}

const kpis: KPIItem[] = [
  { value: "30", label: "Revenue Increase", suffix: "%" },
  { value: "13", label: "Years With You" , suffix: "+"},
  { value: "50", label: "States Served" },
  { value: "100", label: "HIPAA Compliant", },
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
  const [animating, setAnimating] = useState(false);
  const numValue = Number(target);

  useEffect(() => {
    if (!start) {
      setCount(0);
      setAnimating(false);
      return;
    }

    setAnimating(true);
    let startTime: number | null = null;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      setCount(Math.floor(numValue * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimating(false);
      }
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, [numValue, start]);

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        animating ? "scale-110" : "scale-100"
      }`}
      style={{
        color: "#004B87", // brand blue
        // textShadow: animating
        //   ? "0 0 12px rgba(200, 16, 16, 0.6)"
        //   : "0 0 0 rgba(0,0,0,0)",
      }}
    >
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-section-default overflow-hidden relative"
    >
      {/* Hexagon Background */}
      <div
        className="absolute inset-0 bg-center opacity-30 pointer-events-none"
        style={{
          backgroundColor: "var(--section-default)",
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/hexellence.png')",
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
          mixBlendMode: "normal",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src="/doc-team.png"
              alt="Illustration"
              className="w-full rounded-xl backdrop-blur-xl"
            />
          </div>

          {/* Right: Heading, Subheading, Counters */}
          <div className="lg:w-1/2 w-full text-left">
            <div className="mb-8 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
                Why Choose Encore?
              </h2>
              <p className="text-lg text-gray-700 max-w-lg">
                Our comprehensive medical billing KPIs are clear, trackable, and
                tailored to support your practice’s financial objectives. The
                outcome? Precise claim submissions, improved patient experience,
                and quicker payments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {kpis.map((kpi, idx) => (
                <div
                  key={kpi.label}
                  className="text-center p-6 bg-card-default backdrop-blur-xl rounded-xl shadow-sm hover:shadow-md transition-shadow animate-scale-in border border-border/50"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-4xl lg:text-5xl font-bold mb-2 ">
                    <Counter
                      target={kpi.value}
                      suffix={kpi.suffix}
                      start={visible}
                    />
                  </div>
                  <p className="text-accent-green font-bold">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 