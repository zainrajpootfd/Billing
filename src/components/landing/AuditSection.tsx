"use client";

import { Button } from "@/components/ui/button";
import { useState, ChangeEvent, FormEvent } from "react";

export default function AuditSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Audit Request:", formData);
    // TODO: connect API or Supabase here
  };

  return (
    <section className="relative bg-gradient-to-br from-[#daf2fe] via-white to-[#e6f4ff] py-16 px-4 sm:px-8 rounded-3xl shadow-inner">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#004b87] mb-8">
          Offering <span className="text-accent-green">FREE</span> Practice
          Audit
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#004b87]/50 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#004b87]/50 transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#004b87]/50 transition"
          />

          <Button
            type="submit"
            className="bg-[#c8102e] hover:bg-[#a50e26] text-white font-semibold rounded-lg py-3 px-6 transition-all hover:scale-105"
          >
            Audit My Practice
          </Button>
        </form>

        {/* Decorative Glow */}
        <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-blue-100/40 blur-3xl rounded-full"></div>
      </div>
    </section>
  );
}
