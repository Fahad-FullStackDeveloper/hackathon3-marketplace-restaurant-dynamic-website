"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainRecipe = () => {
  return (
    <section className="py-12 relative">
      {/* Background Image */}
      <Image
        src="/images/Rectangle BG_Main.png" // Relative path to the image inside the public folder
        alt="Background"
        fill // Use boolean `fill` instead of `layout="fill"`
        style={{ objectFit: "cover" }} // Use style for object-fit
        className="absolute bottom-0 left-0 w-full h-full opacity-15 z-10"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-wrap items-center relative z-10">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-2/5 lg:w-2/5 text-center md:text-left pr-0 md:pr-20">
          <h2 className="text-3xl text-brand font-greatvibes mb-4">
            {`It’s Quick & Amusing!`}
          </h2>
          <h3 className="text-6xl font-semibold text-white mb-10">
            <span className="text-brand">Th</span>e Art of Speed Food Quality
          </h3>
          <p className="text-lg text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum lacus felis, id elementum urna egestas non.
          </p>
          <Link href="/Menu">
            <button className="bg-brand text-white text-lg rounded-full px-14 py-4 mt-4 hover:bg-[#e68900] transition duration-300">
              See Menu
            </button>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-3/5 lg:w-3/5 relative">
          <Image
            src="/images/dish1.png" // Relative path to the image inside the public folder
            alt="Recipe"
            width={700}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MainRecipe;
