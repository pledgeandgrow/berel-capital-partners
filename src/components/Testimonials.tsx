'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    initials: 'SJ',
    name: 'Sarah Johnson',
    position: 'CEO, TechInnovate Inc.',
    testimonial:
      "Berel Capital Partners' startup financial solutions were instrumental in our growth. Their expertise helped us secure funding and manage our finances efficiently.",
  },
  {
    initials: 'MC',
    name: 'Michael Chen',
    position: 'Individual Investor',
    testimonial:
      "The micro portfolio investment service is perfect for small investors like me. I've seen impressive returns thanks to their strategic advice.",
  },
  {
    initials: 'AR',
    name: 'Amira Rodriguez',
    position: 'CFO, GreenEnergy Co.',
    testimonial:
      'Their advisory services on bonds and ETFs have been invaluable. We\'ve optimized our company\'s investment strategy with their guidance.',
  },
  {
    initials: 'YA',
    name: 'Yusuf Al-Farsi',
    position: 'Founder, TechWaqf',
    testimonial:
      "Berel Capital's understanding of both technology startups and diverse financial principles is unparalleled. They\'ve been crucial in helping us navigate complex investments.",
  },
  {
    initials: 'LM',
    name: 'Layla Mahmoud',
    position: 'Personal Finance Blogger',
    testimonial:
      'As someone who educates others on smart investing, I\'m impressed by Berel Capital\'s transparent and ethical approach. They\'ve become my go-to recommendation for readers seeking professional financial guidance.',
  },
  {
    initials: 'HD',
    name: 'Hassan Dridi',
    position: 'Managing Director, RealEstate Co.',
    testimonial:
      'The real estate investment strategies they suggested have yielded great results. Their deep understanding of market dynamics has been invaluable for our company.',
  },
  {
    initials: 'HD',
    name: 'Hassan Dridi',
    position: 'Managing Director, RealEstate Co.',
    testimonial:
      'The real estate investment strategies they suggested have yielded great results. Their deep understanding of market dynamics has been invaluable for our company.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-velvet">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-champagne">
          What Our Clients Say
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-4 mb-8 md:mb-0"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 0.5s ease-in-out',
                  }}
                >
                  <div className="rounded-lg border text-card-foreground shadow-sm bg-onyx border-silk/10 h-full">
                    <div className="p-6 pt-6">
                      <p className="mb-4 text-pearl">{testimonial.testimonial}</p>
                    </div>
                    <div className="p-6 pt-0 flex items-center">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mr-4">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-champagne text-onyx">
                          {testimonial.initials}
                        </span>
                      </span>
                      <div>
                        <p className="font-semibold text-silk">{testimonial.name}</p>
                        <p className="text-sm text-pearl">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className={`absolute top-1/2 left-3 transform -translate-y-1/2 bg-champagne text-onyx p-2 rounded-full hover:bg-silk transition-colors ${
              currentIndex === 0 ? 'opacity-50' : ''
            }`}
            disabled={currentIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-champagne text-onyx p-2 rounded-full hover:bg-silk transition-colors ${
              currentIndex === testimonials.length - 3 ? 'opacity-50' : ''
            }`}
            disabled={currentIndex === testimonials.length- 3}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
