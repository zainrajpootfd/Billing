"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsAppButton() {
  const phoneNumber = "923001234567"; // 👈 replace with your number (no + or 0)
  const message = "Hello! I would like to learn more about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <IconBrandWhatsapp className="w-5 h-5" />
      <span className="text-sm font-medium">Chat with us</span>
    </a>
  );
}
