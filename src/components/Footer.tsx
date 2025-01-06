import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-velvet py-12 px-4 border-t border-silk/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <a href="/" className="text-2xl font-bold text-champagne">
            Berel Capital Partners
          </a>
          <p className="mt-2 text-sm text-pearl">Shaping the Future of Finance</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-6">
          <a
            href="#"
            className="text-sm text-pearl hover:text-silk transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-pearl hover:text-silk transition-colors"
          >
            Terms of Service
          </a>
        </nav>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pearl hover:text-silk transition-colors"
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
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pearl hover:text-silk transition-colors"
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
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pearl hover:text-silk transition-colors"
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
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-silk/10 text-center text-sm text-pearl">
        © 2025 Berel Capital Partners. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
