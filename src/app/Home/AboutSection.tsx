"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left pr-20">
            {/* "About us" */}
            <h2 className="text-3xl text-brand mb-4 font-greatvibes">
              About us
            </h2>

            {/* "The Art of Speed Food" */}
            <h3 className="text-5xl font-semibold font-Helvetica text-white mb-10">
              <span className="text-brand">We</span> Create the best foody
              product
            </h3>

            {/* Lorem Ipsum Text */}
            <p className="text-md text-white font-Inter">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum et
              minima saepe dolorum consequatur sunt dicta ab provident,
              assumenda at quas deserunt omnis voluptates praesentium voluptatum
              sit tempore ratione. Quisquam nisi ipsa dolorum. Velit,
              asperiores. Dignissimos aliquam quae excepturi. Dolorum.
            </p>

            {/* Key Points */}
            <ul className="list-none pl-0 text-white my-8">
              <li className="relative pl-6 mb-2">
                <span className="absolute left-0 top-0 text-2xl text-white">
                  &#10003;
                </span>
                Illum et minima saepe dolorum consequatur sunt dicta ab
                provident.
              </li>
              <li className="relative pl-6 mb-2">
                <span className="absolute left-0 top-0 text-2xl text-white">
                  &#10003;
                </span>
                Deserunt omnis voluptates praesentium voluptatum sit tempore
                ratione.
              </li>
              <li className="relative pl-6 mb-2">
                <span className="absolute left-0 top-0 text-2xl text-white">
                  &#10003;
                </span>
                Velit, asperiores. Dignissimos aliquam quae excepturi.
              </li>
            </ul>

            {/* Linked Button */}
            <Link href="../About">
            <button className="bg-brand text-white text-lg rounded-full px-14 py-4 mt-8 hover:bg-[#e68900] transition duration-300">
              Read More
            </button>
            </Link>
          </div>

          {/* Right Side: Grid Layout with Images */}
          <div className="w-full md:w-1/2 lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
            {/* First Image */}
            <div className="col-span-2 row-span-4">
              <Image
                src="/images/dish2.png" // Corrected path
                alt="Dish 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                width={800} // Optional: Adjust dimensions as needed
                height={800}
              />
            </div>

            {/* Second Image (Half of the First Image) */}
            <div className="col-span-1 row-span-2">
              <Image
                src="/images/dish3.png" // Corrected path
                alt="Dish 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                width={400} // Optional: Adjust dimensions as needed
                height={400}
              />
            </div>

            {/* Third Image (Same Size as Second Image) */}
            <div className="col-span-1 row-span-2">
              <Image
                src="/images/dish4.png" // Corrected path
                alt="Dish 4"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                width={400} // Optional: Adjust dimensions as needed
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
