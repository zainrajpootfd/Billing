"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  TrendingUp,
  DollarSign,
  Shield,
  Clock,
  LucideIcon,
} from "lucide-react";

interface Metric {
  value: string;
  label: string;
  suffix?: string;
  icon?: LucideIcon;
  iconColor?: string;
}

const metrics: Metric[] = [
  { value: "99", label: "First Pass Rate", suffix: "%", icon: CheckCircle2, iconColor: "text-blue-600" },
  { value: "98", label: "Accuracy Rate", suffix: "%", icon: Target, iconColor: "text-purple-600" },
  { value: "30", label: "Revenue Increase", suffix: "%", icon: TrendingUp, iconColor: "text-orange-600" },
  { value: "25", label: "Cost Reduction", suffix: "%", icon: DollarSign, iconColor: "text-emerald-600" },
  { value: "100", label: "HIPAA Compliant", suffix: "%", icon: Shield, iconColor: "text-indigo-600" },
  { value: "37", label: "Days in A/R", suffix: "<", icon: Clock, iconColor: "text-cyan-600" },
];

function Counter({
  target,
  suffix = "",
  prefix = "",
  start,
}: {
  target: string;
  suffix?: string;
  prefix?: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);
  const numValue = Number(target);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(numValue * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [numValue, start]);

  return (
    <span className="inline-block">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function ResultsMetrics() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-section-blue-light relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-green rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4"
          >
            Our Key Performance Indicators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Our proven track record speaks for itself. See the measurable results
            we deliver for healthcare providers nationwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card-default rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent-green/50"
            >
              <div className="text-center">
                {metric.icon && (
                  <div className="flex justify-center mb-4">
                    <metric.icon className={`w-12 h-12 ${metric.iconColor || "text-gray-600"}`} />
                  </div>
                )}
                <div className="text-5xl lg:text-6xl font-bold text-accent-green mb-3">
                  <Counter
                    target={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.suffix === "<" ? "< " : ""}
                    start={visible}
                  />
                </div>
                <p className="text-lg font-semibold text-gray-700">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

