
"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  // Specify that `year` is a `number` or `null`
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-velvet py-12 px-4 border-t border-silk/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-champagne">
            Berel Capital Partners
          </Link>
          <p className="mt-2 text-sm text-pearl">Shaping the Future of Finance</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-6">
          <Link
            href="/personaldata"
            className="text-sm text-pearl hover:text-silk transition-colors"
          >
            Personal data
          </Link>
          <Link
            href="/legalnotice"
            className="text-sm text-pearl hover:text-silk transition-colors"
          >
            Legal notice
          </Link>
          <Link
            href="/generalcondition"
            className="text-sm text-pearl hover:text-silk transition-colors"
          >
           General conditions
          </Link>
          <Link
            href="/aboutus"
            className="text-sm text-pearl hover:text-silk transition-colors"
          >
           About us
          </Link>
          <Link
            href="/contact"
            className="text-sm text-pearl hover:text-silk transition-colors"
          >
           Contact us
          </Link>
        </nav>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pearl hover:text-silk transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pearl hover:text-silk transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pearl hover:text-silk transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-silk/10 text-center text-sm text-pearl">
        © {year || 'Loading...'} Berel Capital Partners. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
