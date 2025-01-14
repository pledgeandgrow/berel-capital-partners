"use client";
import React, { useState } from "react";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

function ContactPage() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-gray-100 py-12">
      <header className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full h-full lg:w-7/12 px-6">
              <h2 className="text-4xl lg:text-6xl font-bold leading-snug">
                Apportons un <span className="text-indigo-500">éclat inégalé</span> à
                votre marque!
              </h2>
            </div>
            <div className="w-full lg:w-5/12 px-6">
              <p className="text-lg">
                Envie de discuter d’une collaboration ou d’échanger vos idées ?
                Contactez-nous pour un accompagnement sur mesure dans votre
                croissance digitale. Ensemble, faisons de vos ambitions une
                réalité, en ouvrant la voie à de nouvelles opportunités et en
                construisant un avenir radieux.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-6 lg:px-12 my-16">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full lg:w-5/12 px-6">
            <h6 className="text-lg font-semibold mb-4">Contactez-nous</h6>
            <h2 className="text-3xl font-bold mb-6">Discutons ensemble</h2>
            <p className="mb-6 text-gray-700">
              Que vous soyez prêt pour un nouveau projet ou que vous ayez juste
              envie de dire bonjour, nous serions ravis de vous entendre !
              Votre message est le premier pas vers une collaboration
              fructueuse.
            </p>
            <div className="text-lg font-semibold">
              <a
                href="mailto:contact@pledgeandgrow.com"
                className="text-indigo-500 block mb-2"
              >
                contact@pledgeandgrow.com
              </a>
              <a
                href="tel:+33753695840"
                className="text-indigo-500 block"
              >
                +33 7 53 69 58 40
              </a>
            </div>
            <ul className="flex mt-8 space-x-6 items-center">
              <li>
                <Link
                  href={"https://www.instagram.com/pledgeandgrow"}
                  target="_blank"
                  className="text-gray-700 "
                >
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://fr.linkedin.com/company/pledge-and-grow"}
                  target="_blank"
                  className="text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="29"
                    viewBox="0 0 750 850"
                  >
                    <path
                      fill="currentColor"
                      d="M165 90q0 35-21 59t-62 24q-37 0-59-24T0 95q0-35 23-61T83 8t60 24t22 58M0 750h165V214H0zm560-528q-32 0-57 8t-45 21t-33 27t-21 27h-4l-9-70H243q0 34 2 74t2 86v355h165V457q0-12 1-22t3-19q4-11 11-23t16-21t22-16t29-6q44 0 64 32t19 83v285h165V445q0-57-14-99t-38-70t-58-41t-72-13"
                    />
                  </svg>
                </Link>
              </li>
              <li className="">
                <Link target='_blank' href={'https://www.tiktok.com/@pledgeandgrowfr'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </Link>
              </li>
              <li className="">
                <Link target='_blank' href={'https://x.com/pledgeandgrow'}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="33" viewBox="0 0 48 48">
                    <linearGradient id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1" x1="4.338" x2="38.984" y1="-10.056" y2="49.954" gradientUnits="userSpaceOnUse"><stop offset="0" ></stop><stop offset=".247" ></stop><stop offset=".686" ></stop><stop offset="1" ></stop></linearGradient><path fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                  </svg></Link>
              </li>
              <li className="">
                <Link target='_blank' href={'https://web.facebook.com/people/Pledge-Grow/100095753672290/'}>
                  <Facebook />
                </Link>
              </li>

            </ul>


          </div>

          <div className="w-full lg:w-7/12 px-6">
            <form
              className="bg-white shadow-lg rounded-lg p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="mt-6">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mt-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none"
                >
                  Parlons!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
