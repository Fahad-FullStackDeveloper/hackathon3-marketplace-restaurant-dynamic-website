"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const RestaurantActiveProcess = () => {
  return (
    <div className="relative bg-base inset-0 mt-10">
      {/* Using next/image component for the background */}
      <div className="relative h-full">
        <Image
          src="/images/BG_RestaurantActiveProcess.png" // Path to the image
          alt="Restaurant Active Process Background"
          fill // Use boolean `fill` instead of `layout="fill"`
          style={{ objectFit: "cover", objectPosition: "center" }} // Use style for object-fit and object-position
          className="absolute inset-0" // Position the image absolutely
        />
        <div className="container px-10 relative z-10 flex flex-col items-end h-full text-right">
          <div className="p-8 rounded-lg max-w-2xl">
            <h2 className="text-4xl text-brand mb-6 font-greatvibes">
              Restaurent Active Process
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              <span className="text-brand">We</span> Document Every Food Bean
              Process until it is saved
            </h3>
            <p className="text-lg text-white mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum et
              minima saepe dolorum consequatur sunt dicta ab provident,
              assumenda at quas deserunt omnis voluptates praesentium.
            </p>
            <div className="flex justify-end gap-4">
              <Link href="./chef">
                <button className="flex items-center gap-2 rounded-full border-2 border-brand text-white text-lg px-8 py-2 hover:bg-[#e68900] transition duration-300">
                  Read More
                </button>
              </Link>
              <button className="flex items-center gap-2 rounded-full border-2 border-brand text-brand text-lg px-6 py-2 hover:bg-[#e68900] hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-5.197-3.028A1 1 0 008 8.944v6.112a1 1 0 001.555.832l5.197-3.028a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9z"
                  />
                </svg>
                Play Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantActiveProcess;
