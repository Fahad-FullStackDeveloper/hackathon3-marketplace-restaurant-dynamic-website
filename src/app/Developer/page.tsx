import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const developers = [
  {
    name: "Fahad Khakwani",
    role: "Full Stack Developer(Senior)",
    description:
      "Specializes in React, Next.js, Tailwind CSS, and crafting beautiful UI/UX designs.",
    Tools:
      "TS, React, Next.js, Tailwind CSS, Node.js, MongoDB, Shadcn UI, Phosphor Icons, Firebase, and more.",
    image: "/images/developer1.jpg",
    socialLinks: {
      github: "https://github.com/Fahad-FullStackDeveloper",
      linkedin: "https://www.linkedin.com/in/fahad-khakwani-3aa655265/",
      twitter: "https://x.com/FahadKhakwani25",
    },
  },
  {
    name: "Fahad Khakwani",
    role: "Full Stack Developer(Senior)",
    description:
      "Specializes in React, Next.js, Tailwind CSS, and crafting beautiful UI/UX designs.",
    Tools:
      "TS, React, Next.js, Tailwind CSS, Node.js, MongoDB, Shadcn UI, Phosphor Icons, Firebase, and more.",
    image: "/images/developer1.jpg",
    socialLinks: {
      github: "https://github.com/Fahad-FullStackDeveloper",
      linkedin: "https://www.linkedin.com/in/fahad-khakwani-3aa655265/",
      twitter: "https://x.com/FahadKhakwani25",
    },
  },
];

export default function Developer() {
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
            <span className="text-brand">Dev</span>
            <span className="text-white">elopers</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Developers</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Developers
            </h1>
            <p className="text-gray-600 text-lg">
              Our team of passionate developers is dedicated to crafting
              seamless, innovative, and user-friendly solutions for Foodtuck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 text-center"
              >
                <Image
                  src={dev.image}
                  alt={dev.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded-full mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-800">
                  {dev.name}
                </h2>
                <p className="text-gray-500 mb-2">{dev.role}</p>
                <p className="text-gray-600 mb-4">{dev.description}</p>

                <div className="flex justify-center space-x-4">
                  <Link
                    href={dev.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/github.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link
                    href={dev.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/linkedin.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link
                    href={dev.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/icons/x.svg" alt="X" width={24} height={24} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
