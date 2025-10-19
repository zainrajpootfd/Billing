"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  showInfo?: boolean;
  variant?: "default" | "landing";
}

export default function ContactSection({
  title = "Get in Touch",
  subtitle = "Have questions? We'd love to hear from you.",
  showInfo = true,
  variant = "default",
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const phoneNumber = "+18006332273";
  const emailAddress = "info@encorebillinggroup.com";
  const mapAddress = "123 Healthcare Ave, Medical City, ST 12345";

  // --- Contact Info JSX ---
  const contactInfo = (
    <div className="space-y-8 animate-fade-in-left">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-8">
          Contact Information
        </h3>
      </div>

      {/* Phone */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex gap-4 items-center group hover:translate-x-1 transition-all hover:shadow-lg hover:shadow-primary/20 rounded-lg p-2"
      >
        <div className="p-4 bg-primary/10 rounded-lg transition-all group-hover:bg-primary/20">
          <Phone
            className="text-primary group-hover:scale-110 transition-transform"
            size={24}
          />
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-1">Phone</h4>
          <p className="text-muted-foreground group-hover:text-primary">
            {phoneNumber}
          </p>
        </div>
      </a>

      {/* Email */}
      <a
        href={`mailto:${emailAddress}`}
        className="flex gap-4 items-center group hover:translate-x-1 transition-all hover:shadow-lg hover:shadow-primary/20 rounded-lg p-2"
      >
        <div className="p-4 bg-primary/10 rounded-lg transition-all group-hover:bg-primary/20">
          <Mail
            className="text-primary group-hover:scale-110 transition-transform"
            size={24}
          />
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-1">Email</h4>
          <p className="text-muted-foreground group-hover:text-primary">
            {emailAddress}
          </p>
        </div>
      </a>

      {/* Address */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          mapAddress
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-4 items-center group hover:translate-x-1 transition-all hover:shadow-lg hover:shadow-primary/20 rounded-lg p-2"
      >
        <div className="p-4 bg-primary/10 rounded-lg transition-all group-hover:bg-primary/20">
          <MapPin
            className="text-primary group-hover:scale-110 transition-transform"
            size={24}
          />
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-1">Address</h4>
          <p className="text-muted-foreground group-hover:text-primary">
            {mapAddress}
          </p>
        </div>
      </a>
    </div>
  );

  // --- Contact Form JSX ---
  const contactForm = (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 animate-fade-in-right bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-primary/10"
    >
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="(555) 000-0000"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
      >
        Send Message
      </button>
    </form>
  );

  // --- Map JSX ---
  const map = (
    <div className="animate-fade-in-right h-full w-full rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.438546437023!2d73.1164625!3d31.4128912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269a799fd93d9%3A0x1ff7f42c5aa97bb9!2sMedcare%20MSO!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );

  return (
    <section
      className={`relative py-20 lg:py-32 ${
        variant === "default"
          ? "bg-gradient-to-br from-primary/5 to-white"
          : "bg-white"
      }`}
      id="contact"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url('/medical.jpg')]">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div
          className={`text-center mb-10 ${
            variant === "landing"
              ? "py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-white rounded-2xl animate-fade-in-up"
              : ""
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {variant === "default" ? (
            <>
              {/* Landing page: Form left, Map right */}
              <div className="order-2">{contactForm}</div> {/* Form left */}
              <div className="order-1">{map}</div> {/* Map right */}
            </>
          ) : (
            <>
              {/* Default page: Info left, Form right */}
              {!showInfo && <div className="order-1">{contactInfo}</div>}{" "}
              {/* Info left */}
              <div className="order-2">{contactForm}</div> {/* Form right */}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
