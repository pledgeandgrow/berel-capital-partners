import React from 'react'



const services = [
    {
      title: 'Comprehensive Financial Advisory',
      description:
        'Expert financial guidance tailored to your unique needs, combining deep market knowledge with innovative strategies.',
      icon: (
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
          className="lucide lucide-briefcase w-12 h-12 text-velvet group-hover:text-champagne transition-colors duration-300"
        >
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          <rect width="20" height="14" x="2" y="6" rx="2"></rect>
        </svg>
      ),
    },
    {
      title: 'Strategic Debt Reconstruction',
      description:
        'Optimize your debt structure for better financial health, reducing stress and improving cash flow.',
      icon: (
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
          className="lucide lucide-arrow-up-down w-12 h-12 text-velvet group-hover:text-champagne transition-colors duration-300"
        >
          <path d="m21 16-4 4-4-4"></path>
          <path d="M17 20V4"></path>
          <path d="m3 8 4-4 4 4"></path>
          <path d="M7 4v16"></path>
        </svg>
      ),
    },
    {
      title: 'Wealth Management',
      description:
        'Grow and protect your assets with personalized investment strategies aligned with your goals and values.',
      icon: (
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
          className="lucide lucide-bar-chart w-12 h-12 text-velvet group-hover:text-champagne transition-colors duration-300"
        >
          <line x1="12" x2="12" y1="20" y2="10"></line>
          <line x1="18" x2="18" y1="20" y2="4"></line>
          <line x1="6" x2="6" y1="20" y2="16"></line>
        </svg>
      ),
    },
    {
      title: 'Cash Flow Optimization',
      description:
        'Maximize liquidity and operational efficiency with our cash flow management solutions.',
      icon: (
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
          className="lucide lucide-coins w-12 h-12 text-velvet group-hover:text-champagne transition-colors duration-300"
        >
          <circle cx="8" cy="8" r="6"></circle>
          <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
          <path d="M7 6h1v4"></path>
          <path d="m16.71 13.88.7.71-2.82 2.82"></path>
        </svg>
      ),
    },
    {
      title: 'Micro Portfolio Investments',
      description:
        'Smart investment strategies for portfolios under $10k, leveraging cutting-edge financial technologies.',
      icon: (
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
          className="lucide lucide-line-chart w-12 h-12 text-velvet group-hover:text-champagne transition-colors duration-300"
        >
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
    {
      title: 'Start-up Financial Solutions',
      description:
        'Specialized financial expertise to fuel your start-up\'s growth, from seed funding to expansion capital.',
      icon: (
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
          className="lucide lucide-rocket w-12 h-12 text-velvet group-hover:text-champagne transition-colors duration-300"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
      ),
    },
  ];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-marble">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-onyx">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="rounded-lg border text-card-foreground shadow-sm bg-silk border-velvet/10 hover:border-champagne transition-all duration-300 overflow-hidden h-full flex flex-col group">
            <div className="flex flex-col space-y-1.5 flex-grow relative bg-gradient-to-br from-silk to-champagne p-6">
              <div className="absolute inset-0 bg-onyx opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold tracking-tight text-xl mb-2 text-onyx text-center  group-hover:text-velvet transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-velvet text-center group-hover:text-onyx transition-colors duration-300">
                {service.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ServicesSection
