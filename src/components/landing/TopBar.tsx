"use client";

import { useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FormspreeForm from "@/components/landing/FormspreeForm"; // ✅ import your form component

export default function TopBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="w-full bg-[#004b87] text-white py-2 sticky top-0 z-50">
        <div className="flex items-center justify-center gap-2 lg:gap-6 text-sm flex-wrap">
          <Link
            href="tel:+15129884965"
            className="flex items-center gap-2 hover:underline hover:text-gray-200 transition-colors"
          >
            <Phone size={16} className="text-white" />
            <span>(512) 704-7074</span>
          </Link>

          <span className="text-white hidden sm:inline">|</span>

          {/* ✨ Flashing text */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative text-white font-semibold animate-bounce"
          >
            Medical Billing Starts @2.49%
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

      {/* 🔹 Quote Modal */}
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
              {/* ✅ Reused Formspree Form */}
              <FormspreeForm
                formType="quote"
                title="Get a Free Quote"
                onSuccess={() => setIsModalOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
