"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MetOurChefs = () => {
  return (
    <section className="py-12 pb-10">
      <div className="container mx-auto px-4">
        {/* Top Text Section */}
        <div className="text-center mb-16 mt-10">
          <h2 className="text-3xl text-brand mb-4 font-greatvibes">Chefs</h2>
          <h3 className="text-5xl font-semibold text-white">
            <span className="text-brand">Me</span>et Our Chefs
          </h3>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Image */}
          <div className="relative group">
            <Image
              src="/images/Chef card01.png" // Correct path
              alt="Chef 1"
              width={400} // Set appropriate width
              height={400} // Set appropriate height
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-105"
            />
          </div>

          {/* Second Image */}
          <div className="relative">
            <Image
              src="/images/Chef card02.png"
              alt="Chef 2"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-105"
            />
          </div>

          {/* Third Image */}
          <div className="relative">
            <Image
              src="/images/Chef card03.png"
              alt="Chef 3"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-105"
            />
          </div>

          {/* Fourth Image */}
          <div className="relative">
            <Image
              src="/images/Chef card04.png"
              alt="Chef 4"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link href="./Chefs">
            <button className="rounded-full border-2 border-spacing-2 border-brand text-white text-lg px-8 py-2 mt-10 hover:bg-[#e68900] transition duration-300">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MetOurChefs;
