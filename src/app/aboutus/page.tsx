"use client"

import React, { useState } from "react";
import ServicesSection from "@/components/ServicesSection";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function openAccordion(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <main className="text-black">
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">OUR IDENTITY</h1>
        <p className="mt-4 text-xl max-w-3xl">
          An unusual story, driven by a deep and ambitious mission: to foster
          innovation and co-shape solutions, created by a team of passionate
          experts.
        </p>
      </section>

      {/* About Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="mb-8">
          <button className="px-6 py-2 mb-4 text-sm font-bold text-black bg-white rounded-lg shadow-lg hover:bg-gray-200">
            WHO ARE WE
          </button>
          <h2 className="text-3xl font-semibold">
            A forward-looking vision, driven by expertise
          </h2>
        </div>
        <p className="text-lg text-gray-700 max-w-3xl">
          We are a swift development agency based in Paris. Our team, composed
          of engineers from the best schools, is committed to transforming your
          ideas into digital realities.
        </p>
      </section>

      {/* Accordion Section */}
      <section className="h-screen flex flex-col justify-center items-center section-padding bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 mb-8">
              <h2 className="text-2xl font-bold text-center">Our Values</h2>
              <div className="accordion mt-8 space-y-6">
                {[
                  {
                    title: "Excellence and Ethics",
                    content:
                      "We are committed to providing you with impeccable quality, ensuring total transparency at every stage of our collaboration, and rigorous follow-up to guarantee the success of your projects.",
                  },
                  {
                    title: "Culture & Heritage",
                    content:
                      "Rooted in French culture, we celebrate 'Made in France' craftsmanship by combining tradition and innovation while promoting the country's cultural heritage in a modern and visionary approach.",
                  },
                  {
                    title: "Loyalty & Exclusivity",
                    content:
                      "True to our commitments, we offer exclusive services in every industry, ensuring solid partnerships that are free from any conflict of interest.",
                  },
                ].map((item, index: number) => (
                  <div
                    key={index}
                    className="accordion-item border rounded-lg shadow-sm"
                  >
                    <div
                      className="accordion-title px-6 py-4 flex justify-between items-center cursor-pointer bg-white hover:bg-gray-50"
                      onClick={() => openAccordion(index)}
                    >
                      <h6 className="text-lg font-semibold">{item.title}</h6>
                      <span className="text-xl">
                        {activeIndex === index ? "-" : "+"}
                      </span>
                    </div>
                    <div
                      className="accordion-info overflow-hidden transition-all duration-300 text-gray-700"
                      style={{
                        height: activeIndex === index ? "auto" : "0",
                        padding: activeIndex === index ? "16px 24px" : "0",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
    </main>
  );
}
