"use client";

import { useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function TopBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="w-full bg-accent-green text-white py-2 sticky top-0 z-50">
        <div className="flex items-center justify-center gap-2 lg:gap-6 text-sm flex-wrap">
          <Link
            href="tel:+15129884965"
            className="flex items-center gap-2 hover:underline hover:text-gray-200 transition-colors"
          >
            <Phone size={16} className="text-white" />
            <span>+1 (512) 988-4965</span>
          </Link>

          <span className="text-white hidden sm:inline">|</span>

          {/* ✨ Flashing text */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative text-white font-semibold animate-bounce "
          >
            Medical Billing Starts @2.49$
          </button>

          <span className="text-white hidden sm:inline">|</span>

          <Link
            href="mailto:support@encorebillinggroup.com"
            className="flex items-center gap-2 hover:underline hover:text-gray-200 transition-colors"
          >
            <Mail size={16} className="text-white" />
            <span>Support@encorebillinggroup.com</span>
          </Link>
        </div>
      </div>

      {/* 🔹 Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-semibold text-center mb-4 text-primary">
                Get a Free Quote
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-accent-green outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-accent-green outline-none"
                />
                <textarea
                  rows={3}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-accent-green outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-accent-green text-white py-2 rounded-md font-medium hover:bg-secondary transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
