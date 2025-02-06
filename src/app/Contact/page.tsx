"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Header Component */}
      <header className="relative h-[300px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/HeaderBG.png"
            alt="Header Background"
            fill // Replaces layout="fill"
            style={{ objectFit: "cover" }} // Replaces objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Overlay to darken the background image (optional) */}
        <div className="absolute inset-0 bg-opacity-10"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-brand">Contact</span>
            <span className="text-white"> Us</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Contact</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        {/* Contact Information */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">{`We would love to hear from you! Whether it's feedback, reservations, or just saying hello.`}</p>
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl mx-auto bg-gray-200 shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Contact Form
          </h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-lg px-4 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-white py-2 rounded-lg hover:bg-brand-dark"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Location and Contact Details */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
          <p className="text-lg">123 Delicious Avenue, Food City, Yummyland</p>
          <p className="text-lg mt-2">
            Phone: <span className="text-brand">+1 (234) 567-890</span>
          </p>
          <p className="text-lg mt-2">
            Email: <span className="text-brand">contact@fooddelight.com</span>
          </p>
        </section>
      </main>
    </>
  );
};

export default Contact;
