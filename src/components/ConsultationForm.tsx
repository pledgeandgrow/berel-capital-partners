"use client"

import React from 'react'
import { useState } from 'react';


const ConsultationForm = () => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <section className="py-20 px-4 bg-pearl">
    <div className="container mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold mb-8 text-center text-onyx" style={{ opacity: 1, transform: "none" }}>
        Schedule a Consultation
      </h2>
      <form className="space-y-6" style={{ opacity: 1, transform: "none" }}>
        <input
          className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-silk border-velvet text-onyx placeholder-velvet/50 focus:border-champagne transition-all duration-300"
          placeholder="Your Name"
          required
          type="text"
          name="name"
        />
        <input
          className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-silk border-velvet text-onyx placeholder-velvet/50 focus:border-champagne transition-all duration-300"
          placeholder="Your Email"
          required
          type="email"
          name="email"
        />
        
              <select
                className="w-full h-10 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-silk border-velvet text-onyx"
              >
                <option value="advisory">Select a service:</option>
                <option value="advisory">Comprehensive Financial Advisory</option>
                <option value="debt-reconstruction">Strategic Debt Reconstruction</option>
                <option value="wealth-management">Wealth Management</option>
                <option value="cash-flow">Cash Flow Optimization</option>
                <option value="micro-portfolio">Micro Portfolio Investments</option>
                <option value="startup-solutions">Start-up Financial Solutions</option>
                <option value="bonds-etfs">Bonds & ETFs Advisory</option>
              </select>
            

        <textarea
          className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-silk border-velvet text-onyx placeholder-velvet/50 focus:border-champagne transition-all duration-300"
          name="message"
          placeholder="Your Message"
          required
        />
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 text-silk item-center border-silk hover:bg-silk hover:text-onyx">
          Request consultation
        </button>
      </form>
    </div>
  </section>
  )
}

export default ConsultationForm
