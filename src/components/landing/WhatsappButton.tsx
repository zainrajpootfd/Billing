"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsAppButton() {
  const phoneNumber = "15129884965"; // 👈 replace with your number (no + or 0)
  const message = "Hello! I would like to learn more about your services.";

  return (
    <div className="fixed bottom-5 right-5 flex items-center gap-3 z-50">
      {/* Text on the left */}
      <div className="bg-white text-gray-800 px-4 py-2 rounded-full  shadow-md text-sm font-medium">
        Chat with us on WhatsApp!
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <IconBrandWhatsapp />
      </a>
    </div>
  );
}
