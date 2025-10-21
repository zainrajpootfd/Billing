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
    <div className="space-y-6 animate-fade-in-left text-center">
      <div>
        <h3 className="text-2xl font-bold text-primary-blue mb-8">
          Contact Information
        </h3>
      </div>

      {/* Phone */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-all hover:shadow-lg hover:shadow-accent-green/20 rounded-xl p-6"
      >
        <div className="p-6  bg-accent-green/10 rounded-full transition-all group-hover:bg-accent-green/20 flex items-center justify-center">
          <Phone
            className="text-accent-green  group-hover:scale-110 transition-transform"
            size={40} // Bigger icon
          />
        </div>
        <div>
          <h4 className="font-semibold text-primary-blue mb-1 lg:text-3xl">
            Contact Us
          </h4>
          <p className="text-gray-700 lg:text-2xl group-hover:text-accent-green">
            {phoneNumber}
          </p>
        </div>
      </a>

      {/* Email */}
      <a
        href={`mailto:${emailAddress}`}
        className="flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-all hover:shadow-lg hover:shadow-accent-green/20 rounded-xl p-6"
      >
        <div className="p-6 bg-accent-green/10 rounded-full transition-all group-hover:bg-accent-green/20 flex items-center justify-center">
          <Mail
            className="text-accent-green group-hover:scale-110 transition-transform"
            size={40}
          />
        </div>
        <div>
          <h4 className="font-semibold text-primary-blue mb-1 lg:text-3xl">
            Email
          </h4>
          <p className="text-gray-700 lg:text-2xl group-hover:text-accent-green">
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
        className="flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-all hover:shadow-lg hover:shadow-accent-green/20 rounded-xl p-6"
      >
        <div className="p-6 bg-accent-green/10 rounded-full transition-all group-hover:bg-accent-green/20 flex items-center justify-center">
          <MapPin
            className="text-accent-green group-hover:scale-110 transition-transform"
            size={40}
          />
        </div>
        <div>
          <h4 className="font-semibold text-primary-blue mb-1 lg:text-3xl">
            Address
          </h4>
          <p className="text-gray-700 group-hover:text-accent-green lg:text-2xl">
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
      className="space-y-6 animate-fade-in-right bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-accent-green/10"
    >
      <div>
        <div>
          <h3 className="text-2xl font-bold text-primary-blue mb-4">
            Send Us a Message
          </h3>
          <p className=" text-gray-700 mb-6">
            We would like to hear from you. Please send us a message by filling
            out the form below and we will get back with you shortly.
          </p>
        </div>
        <label className="block text-sm font-medium text-primary-blue mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-green transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-blue mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-green transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-blue mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-green transition-colors"
          placeholder="(555) 000-0000"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary-blue mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-green transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-accent-green text-white rounded-lg font-semibold bg-accent-green-hover transition-transform hover:scale-105 active:scale-95"
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
      className={`relative py-20 lg:py-24 ${
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
          <h2 className="text-4xl font-bold text-primary-blue mb-4">{title}</h2>
          <p className="text-lg text-gray-700">{subtitle}</p>
        </div>

        {/* Grid */}
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {variant === "default" ? (
            <>
              {/* Landing page layout (unchanged) */}
              <div className="order-2">{contactForm}</div>
              <div className="order-1">{map}</div>
            </>
          ) : (
            <>
              {/* Contact page layout (no map inside grid) */}
              {!showInfo && <div className="order-1">{contactInfo}</div>}
              <div className="order-2">{contactForm}</div>
            </>
          )}
        </div>

        {/* Full-width map shown only on contact page */}
        {variant === "landing" && (
          <div className="mt-16 w-full">
            <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg h-[520px]">
              {map}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
