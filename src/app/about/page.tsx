"use client";

import Image from "next/image";
import {
  hero,
  missionVision,
  coreValues,
  whyChooseUs,
  specialties,
  testimonials,
} from "../../data/aboutData";
import { User, Shield, Lightbulb, Users, Star } from "lucide-react";

const icons = [User, Shield, Lightbulb, Users, Star];
export default function AboutUs() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 px-6 md:px-20 text-center md:text-left animate-fade-in">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              {hero.description}
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={hero.image}
              alt="About Us Image"
              width={500}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 md:gap-20 items-center">
          {/* Vision - First Row */}
          <div className="flex flex-col md:flex-row items-center gap-6 animate-fade-in">
            <div className="md:w-1/2">
              <Image
                src="/vision-banner.png" // Vision image
                alt="Vision Image"
                width={500}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                {missionVision[1].title}
              </h2>
              <p className="text-gray-700">{missionVision[1].description}</p>
            </div>
          </div>

          {/* Mission - Second Row */}
          <div className="flex-col-reverse flex sm:flex-col md:flex-row items-center gap-6 mt-10 md:mt-0 animate-fade-in">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                {missionVision[0].title}
              </h2>
              <p className="text-gray-700">{missionVision[0].description}</p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/mission-banner.jpg" // Mission image
                alt="Mission Image"
                width={500}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate-fade-in">
          Our Core Values
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {coreValues.map((value, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className=" p-6 bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:bg-red-100 hover:text-white animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4 text-blue-600 group-hover:text-white">
                  <Icon size={36} />
                </div>
                <h3 className="font-semibold mb-2 text-lg">{value.title}</h3>
                <p className="text-gray-600 group-hover:text-white">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {whyChooseUs.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Image
              src={whyChooseUs.image}
              alt="Why Choose Us"
              width={500}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate-fade-in">
          Our Reach
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate-fade-in">
          Client Testimonials
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 rounded-xl shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="text-gray-700 italic">"{testi.quote}"</p>
              <p className="mt-4 font-semibold">— {testi.author}</p>
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
}
