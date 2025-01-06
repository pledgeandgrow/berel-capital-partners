import Image from 'next/image'
import React from 'react'


const AboutSection = () => {
  return (
    <section className="py-20 px-4 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <Image
              alt="About Berel Capital Partners"
              loading="lazy"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl h-[500px]"
              src="/user.jpg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-champagne">
              About Berel Capital Partners
            </h2>
            <p className="mb-4 text-pearl">
              At Berel Capital Partners, we blend cutting-edge financial technology with decades of industry expertise to deliver unparalleled financial solutions. Our approach is rooted in innovation, ethical practices, and a deep understanding of global financial markets.
            </p>
            <p className="mb-4 text-pearl">
              Founded in 2010, our team of seasoned professionals brings together diverse experiences from top-tier financial institutions, tech startups, and regulatory bodies. This unique combination allows us to offer forward-thinking strategies while maintaining a strong foundation in traditional financial principles.
            </p>
            <p className="mb-4 text-pearl">
              We pride ourselves on our ability to cater to a wide range of clients, from individual investors to startups and established corporations. Our services include comprehensive financial advisory, innovative debt reconstruction, strategic wealth management, and specialized solutions for emerging markets and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
