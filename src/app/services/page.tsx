// app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { servicesData, Service } from "@/data/servicesData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Phone, Award, TrendingUp, Users } from "lucide-react";
import { Headphones } from "lucide-react"; // if your lucide build uses different name, adjust
import KPI from "@/components/landing/Kpi";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dr. Michael O'Connor",
    role: "Doctor",
    image:
      "https://images.unsplash.com/photo-1612636321938-2a60d4febfae?auto=format&q=85",
    text: "Outstanding service! The billing process has become seamless and efficient. Our practice has seen a significant improvement in revenue cycle management.",
  },
  {
    name: "Dr. Sophia Martinez",
    role: "Doctor",
    image:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&q=85",
    text: "Switching to this billing service was the best decision! Their team is professional, accurate, and stress-free. Highly recommend!",
  },
  {
    name: "Dr. Rajesh Patel",
    role: "Doctor",
    image:
      "https://images.unsplash.com/photo-1612636321938-2a60d4febfae?auto=format&q=85",
    text: "Top-notch medical billing services! They've streamlined our billing process, reduced denials, and improved our revenue.",
  },
  {
    name: "Dr. Emily Carter",
    role: "Doctor",
    image:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&q=85",
    text: "Amazing service! They handle our billing efficiently, reduce errors, and boost revenue. A must-have for any practice!",
  },
];

const faqs: FAQ[] = [
  {
    question: "What services do you provide?",
    answer:
      "We offer end-to-end medical billing services, including claims submission, payment posting, denial management, patient billing, and revenue cycle management.",
  },
  {
    question: "How do you ensure compliance?",
    answer:
      "We strictly adhere to HIPAA and other regulatory standards, ensuring the privacy, security, and compliance of all billing processes.",
  },
  {
    question: "Can you help reduce claim denials?",
    answer:
      "Absolutely! Our team specializes in identifying and resolving claim denials, ensuring timely resubmission and maximizing your reimbursements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us via phone or email, and our team will guide you through a seamless onboarding process tailored to your practice's needs.",
  },
];

export default function ServicesPage(): ReactElement {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  return (
    <main className="bg-white text-[#004b87] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 px-6 md:px-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#004b87]">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Comprehensive medical billing services tailored to boost revenue,
            ensure compliance, and streamline practice operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {servicesData.map((service: Service) => {
              const Icon = service.icon;
              return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card className="group h-full flex flex-col rounded-3xl border border-transparent bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  {/* Icon + Title */}
                  <CardHeader className="p-6 text-center">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-50 group-hover:from-blue-100 group-hover:via-blue-200/50 group-hover:to-blue-100 transition-all duration-500 shadow-lg shadow-blue-500/10 group-hover:shadow-xl group-hover:shadow-blue-500/20 group-hover:scale-110">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-400/10 group-hover:to-blue-500/10 blur-xl transition-all duration-500"></div>
                        <div className="absolute inset-0 rounded-2xl border border-blue-200/50 group-hover:border-blue-300/70 transition-all duration-500"></div>
                        <div className="relative z-10 text-blue-600 group-hover:text-blue-700 transition-all duration-300 group-hover:rotate-3">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-2xl font-semibold mb-3 text-blue-600 transition-colors">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </CardTitle>

                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  {/* Button */}
                  <CardContent className="p-6 pt-0 mt-auto">
                    <Link href={`/services/${service.slug}`}>
                      <Button className="w-full bg-accent-green text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              We deliver excellence in every aspect of medical billing
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                Our services are customized to meet your specific requirements
                with the best results.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Revenue</h3>
              <p className="text-gray-600">
                Our optimized billing solutions are designed to reduce errors,
                minimize denials, and increase your bottom line.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Focus on Patient Care</h3>
              <p className="text-gray-600">
                By taking the burden of billing off your shoulders, we enable
                you to concentrate on providing excellent care.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Ready to address any questions or concerns with speed and
                professionalism.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl font-bold mb-2">10+</div>
            <div className="text-2xl">Years of Experience</div>
          </motion.div>
        </div>
      </section> */}
      <KPI />

      {/* FAQ */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004b87] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Explore answers to common questions about our medical billing
              services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white mb-4 rounded-lg border px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-[#004b87] text-[#004b87]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004b87] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700">
              Hear from healthcare professionals who trust us with their billing
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-gray-700 text-lg mb-4 italic leading-relaxed">
                        "{testimonials[currentTestimonial].text}"
                      </p>
                      <div>
                        <p className="font-bold text-xl text-[#004b87]">
                          {testimonials[currentTestimonial].name}
                        </p>
                        <p className="text-gray-600">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#004b87] mb-4">
              Ready to Optimize Your Billing?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Contact us today and discover how we can transform your practice's
              financial health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5127047074">
                <Button
                  size="lg"
                  className="bg-accent-green text-white hover:bg-[#004b87] text-lg px-8 py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 512-704-7074
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#004b87] text-[#004b87] hover:bg-blue-50 text-lg px-8 py-6"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
