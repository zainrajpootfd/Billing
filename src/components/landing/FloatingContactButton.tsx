"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FormspreeForm from "@/components/landing/FormspreeForm";

export default function FloatingContactButton() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const phoneNumber = "+1 (512) 704-7074";
  const emailAddress = "Support@encorebillinggroup.com";

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls 200px (indicates engagement)
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 200);
    };

    // Check initial scroll position
    handleScroll();

    // Throttle scroll events for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="floating-contact-button"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-5 md:right-5 z-40"
          >
            <div className="relative flex items-end gap-3">
              {/* Contact Modal - Positioned to the left of button */}
              <AnimatePresence>
                {isModalOpen && (
                  <>
                    {/* Backdrop - Click outside to close */}
                    <motion.div
                      key="modal-backdrop"
                      className="fixed inset-0 z-[90] bg-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsModalOpen(false)}
                    />
                    {/* Modal Content */}
                    <motion.div
                      key="contact-modal"
                      className="fixed left-4 bottom-24 sm:fixed sm:left-auto sm:right-[calc(1.25rem+80px)] sm:bottom-24 z-[100]"
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20, scale: 0.9 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-[280px] sm:w-[320px] max-w-[calc(100vw-4rem)] p-4 sm:p-5 relative max-h-[85vh] overflow-y-auto">
                        <div className="w-full">
                          <h2 className="text-lg sm:text-xl font-semibold mb-3 text-[#004b87]">Contact Us</h2>
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              const form = e.currentTarget;
                              const formData = new FormData(form);

                              try {
                                const response = await fetch("https://formspree.io/f/myznrvvj", {
                                  method: "POST",
                                  body: formData,
                                  headers: { Accept: "application/json" },
                                });

                                if (response.ok) {
                                  form.reset();
                                  const { toast } = await import("sonner");
                                  toast.success("✅ Message Sent!", {
                                    description: "We've received your message and will get back with you soon.",
                                  });
                                  setIsModalOpen(false);
                                } else {
                                  const { toast } = await import("sonner");
                                  toast.error("⚠️ Something went wrong!", {
                                    description: "Please try again later.",
                                  });
                                }
                              } catch (error) {
                                const { toast } = await import("sonner");
                                toast.error("⚠️ Network error!", {
                                  description: "Please check your internet connection.",
                                });
                              }
                            }}
                            className="space-y-3"
                          >
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              required
                              className="w-full border border-gray-300 bg-white p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent-green"
                            />
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              required
                              className="w-full border border-gray-300 bg-white p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent-green"
                            />
                            <textarea
                              name="message"
                              placeholder="Your message..."
                              required
                              rows={4}
                              className="w-full border border-gray-300 bg-white p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent-green resize-none"
                            />
                            <input type="hidden" name="formType" value="contact" />
                            <button
                              type="submit"
                              className="w-full py-2 px-4 rounded-md text-white bg-accent-green hover:bg-[#004b87] transition text-sm font-medium shadow-md hover:shadow-lg"
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Floating Button Icons */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-3 flex flex-col gap-3 hover:shadow-2xl transition-shadow duration-300">
              {/* Contact Icon */}
              <div className="relative group">
                <button
                  onClick={() => setIsModalOpen(true)}
                  onMouseEnter={() => setHoveredItem("contact")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="Contact us"
                >
                  <MessageCircle className="text-accent-green hover:text-accent-green/80" size={28} />
                </button>
                {/* Hover Tooltip */}
                {hoveredItem === "contact" && (
                  <motion.div
                    key="contact-tooltip"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#004b87] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-50"
                  >
                    <p className="font-semibold text-sm">Contact</p>
                    <p className="text-xs text-gray-200">Send us a message</p>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#004b87]"></div>
                  </motion.div>
                )}
              </div>

              {/* Email Icon */}
              <div className="relative group">
                <a
                  href={`mailto:${emailAddress}`}
                  onMouseEnter={() => setHoveredItem("email")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="Email us"
                >
                  <Mail className="text-accent-green hover:text-accent-green/80" size={28} />
                </a>
                {/* Hover Tooltip */}
                {hoveredItem === "email" && (
                  <motion.div
                    key="email-tooltip"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#004b87] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-50"
                  >
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-xs text-gray-200">{emailAddress}</p>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#004b87]"></div>
                  </motion.div>
                )}
              </div>

              {/* Phone Icon */}
              <div className="relative group">
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  onMouseEnter={() => setHoveredItem("phone")}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label="Call us"
                >
                  <Phone className="text-accent-green hover:text-accent-green/80" size={28} />
                </a>
                {/* Hover Tooltip */}
                {hoveredItem === "phone" && (
                  <motion.div
                    key="phone-tooltip"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#004b87] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-50"
                  >
                    <p className="font-semibold text-sm">Phone</p>
                    <p className="text-xs text-gray-200">{phoneNumber}</p>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#004b87]"></div>
                  </motion.div>
                )}
              </div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
