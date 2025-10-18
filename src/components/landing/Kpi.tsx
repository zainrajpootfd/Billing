"use client";

import { useEffect, useState } from "react";

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

function Counter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const numValue = Number(target);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(numValue / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [numValue]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function KPI() {
  return (
    <section className=" py-20 lg:py-32 bg-gradient-to-br from-cyan-200 via-white to-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Encore?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto  ">
            {/* Proven results that drive your practice forward */}
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
              className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                <Counter target={kpi.value} suffix={kpi.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
