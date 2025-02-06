"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FoodCategory = () => {
  return (
    <section className="py-12 mb-20">
      <div className="container mx-auto px-4">
        {/* Top Text Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-brand mb-4 font-greatvibes">
            Food Category
          </h2>
          <h3 className="text-5xl font-semibold text-white">
            <span className="text-brand">Ch</span>oose Food Item
          </h3>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Image (With Overlay Text) */}
          <div className="relative group">
            <Image
              src="/images/dish5.png" // Correct path
              alt="Dish 5"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-105"
            />
            <div className="absolute top-6 left-16 mt-20 bg-white text-brand font-bold text-lg px-3 py-1 rounded-md shadow-md">
              Save 30%
            </div>
            {/* Link added for Fast Food Dish */}
            <Link href="/Menu">
              <button
                onClick={() => alert("Fast Food Dish Link Clicked!")}
                className="absolute bottom-6 mb-20 bg-brand text-white font-semibold text-lg px-6 py-2 rounded-md hover:bg-[#e68900] transition duration-300"
              >
                Fast Food Dish
              </button>
            </Link>
          </div>

          {/* Second Image */}
          <div>
            <Image
              src="/images/dish6.png" // Correct path
              alt="Dish 6"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-105"
            />
          </div>

          {/* Third Image */}
          <div>
            <Image
              src="/images/dish7.png" // Correct path
              alt="Dish 7"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-105"
            />
          </div>

          {/* Fourth Image */}
          <div>
            <Image
              src="/images/dish8.png" // Correct path
              alt="Dish 8"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
