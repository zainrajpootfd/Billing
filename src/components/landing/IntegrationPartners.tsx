"use client";

import { motion } from "framer-motion";
import {
  Network,
  CheckCircle2,
  Database,
  Cloud,
  Activity,
  Zap,
  Shield,
  FileText,
  Stethoscope,
  Heart,
  Brain,
  Pill,
  Microscope,
  ClipboardCheck,
  Layers,
  Server,
  Link2,
  Boxes,
} from "lucide-react";
import { Card } from "@/components/ui/card";

// Common EHR/PM systems that medical billing companies integrate with
const partners = [
  { name: "Epic", icon: Database, color: "from-purple-500/20 to-blue-500/20" },
  { name: "Cerner", icon: Cloud, color: "from-blue-500/20 to-cyan-500/20" },
  { name: "eClinicalWorks", icon: Activity, color: "from-green-500/20 to-emerald-500/20" },
  { name: "NextGen", icon: Zap, color: "from-yellow-500/20 to-orange-500/20" },
  { name: "Athenahealth", icon: Shield, color: "from-indigo-500/20 to-purple-500/20" },
  { name: "Allscripts", icon: FileText, color: "from-slate-500/20 to-gray-500/20" },
  { name: "Greenway", icon: Stethoscope, color: "from-teal-500/20 to-green-500/20" },
  { name: "AdvancedMD", icon: Heart, color: "from-red-500/20 to-pink-500/20" },
  { name: "Kareo", icon: Brain, color: "from-violet-500/20 to-purple-500/20" },
  { name: "DrChrono", icon: Pill, color: "from-blue-500/20 to-indigo-500/20" },
  { name: "ModMed", icon: Microscope, color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Waystar", icon: ClipboardCheck, color: "from-emerald-500/20 to-teal-500/20" },
  { name: "Meditech", icon: Layers, color: "from-orange-500/20 to-red-500/20" },
  { name: "CPSI", icon: Server, color: "from-gray-500/20 to-slate-500/20" },
  { name: "Experity", icon: Link2, color: "from-blue-500/20 to-cyan-500/20" },
  { name: "KIPU", icon: Boxes, color: "from-green-500/20 to-emerald-500/20" },
  { name: "TheraNest", icon: Network, color: "from-purple-500/20 to-pink-500/20" },
  { name: "Sunwave", icon: Activity, color: "from-yellow-500/20 to-amber-500/20" },
];

export default function IntegrationPartners() {
  return (
    <section className="py-20 lg:py-32 bg-section-default relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-primary-blue mb-4"
          >
            Create a Connected Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            We support the integration of EHRs, practice management systems,
            charge capture applications, and more! Our software-agnostic
            platform works seamlessly with your existing technology stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -12, scale: 1.05, rotate: 2 }}
              >
                <Card className="h-full hover:shadow-2xl hover:shadow-accent-green/30 transition-all duration-500 cursor-pointer bg-card-default border-2 border-border/50 hover:border-accent-green/70 group overflow-hidden relative backdrop-blur-sm">
                  {/* Animated background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/0 via-accent-green/0 to-primary-blue/0 group-hover:from-primary-blue/10 group-hover:via-accent-green/10 group-hover:to-primary-blue/10 transition-all duration-500" />
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-blue/20 via-accent-green/20 to-primary-blue/20 blur-sm" />
                  </div>
                  
                  <div className="relative p-6 flex flex-col items-center justify-center min-h-[160px]">
                    {/* Icon container with unique gradient */}
                    <motion.div
                      className={`mb-4 p-5 bg-gradient-to-br ${partner.color} rounded-2xl w-full flex items-center justify-center group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Icon background pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                      </div>
                      
                      <Icon className="h-10 w-10 text-primary-blue group-hover:text-accent-green transition-all duration-500 relative z-10 group-hover:scale-125" />
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    </motion.div>
                    
                    {/* Partner name */}
                    <div className="text-center w-full">
                      <motion.h3
                        className="text-sm font-bold text-primary-blue group-hover:text-accent-green transition-colors duration-300 mb-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        {partner.name}
                      </motion.h3>
                      
                      {/* Integrated badge with animation */}
                      <motion.div
                        className="flex items-center justify-center gap-1.5 mt-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-accent-green group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-xs text-accent-green font-semibold group-hover:tracking-wide transition-all duration-300">
                          Integrated
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-green/0 to-primary-blue/0 group-hover:from-accent-green/20 group-hover:to-primary-blue/20 transition-all duration-500 rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-primary-blue/0 to-accent-green/0 group-hover:from-primary-blue/15 group-hover:to-accent-green/15 transition-all duration-500 rounded-tr-full" />
                    
                    {/* Animated dots pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary-blue rounded-full animate-pulse delay-75" />
                      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-primary-blue rounded-full animate-pulse delay-150" />
                      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse delay-200" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Don't see your system?{" "}
            <a
              href="/contact"
              className="text-accent-green hover:underline font-semibold transition-all duration-300 hover:text-primary-blue"
            >
              Contact us
            </a>{" "}
            to learn about custom integrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

