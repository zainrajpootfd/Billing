"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner"; // ✅ Added Sonner toast

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

  // ✅ Updated to use Formspree + Sonner
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // toast.loading("Sending message...");

    try {
      const response = await fetch("https://formspree.io/f/myznrvvj", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        toast.success("✅ Message Sent!", {
          description:
            "We’ve received your message and will get back with you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("⚠️ Something went wrong!", {
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("⚠️ Network error!", {
        description: "Please check your internet connection.",
      });
    }
  };

  const phoneNumber = "+1 (512) 988-4965";
  const emailAddress = "Support@encorebillinggroup.com";
  const mapAddress = "718 Kingston Pl, Cedar Park, TX 78613";

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
            size={40}
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

      {/* ✅ Hidden inputs for Formspree */}
      <input type="hidden" name="_subject" value="New Contact Form Message" />
      <input type="hidden" name="formType" value="contact" />

      <button
        type="submit"
        className="w-full px-6 py-3 bg-accent-green text-white rounded-lg font-semibold hover:bg-[#004b87]
 transition-transform hover:scale-105 active:scale-95"
      >
        Send Message
      </button>
    </form>
  );

  // --- Map JSX ---
  const map = (
    <div className="animate-fade-in-right h-full w-full rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.651822764253!2d-97.7789554848836!3d30.513444781722315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d2cfcc44fab9%3A0xa78b20b63947980b!2s718%20Kingston%20Pl%2C%20Cedar%20Park%2C%20TX%2078613%2C%20USA!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {variant === "default" ? (
            <>
              <div className="order-2">{contactForm}</div>
              <div className="order-1">{map}</div>
            </>
          ) : (
            <>
              {!showInfo && <div className="order-1">{contactInfo}</div>}
              <div className="order-2">{contactForm}</div>
            </>
          )}
        </div>

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
