"use client";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      {/* 1ST SECTION */}
      <section className="py-0 mb-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Left Side: Grid Layout with Images */}
            <div className="md:w-1/2 lg:w-1/2 grid grid-cols-10 grid-rows-10 gap-4">
              {/* First Image */}
              <div className="col-span-5 row-span-5">
                <Image
                  src="/images/dish9.png"
                  alt="Dish 9"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-md shadow-lg hover:transition duration-300 transform hover:scale-95"
                />
              </div>

              {/* Second Image */}
              <div className="col-span-3 row-span-3">
                <Image
                  src="/images/dish6.png"
                  alt="Dish 6"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-md shadow-lg hover:transition duration-300 transform hover:scale-95"
                />
              </div>

              {/* Third Image */}
              <div className="col-span-2 row-span-2">
                <Image
                  src="/images/dish11.png"
                  alt="Dish 11"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-md shadow-lg hover:transition duration-300 transform hover:scale-95"
                />
              </div>

              {/* Fourth Image */}
              <div className="col-span-5 row-span-4">
                <Image
                  src="/images/dish10.png"
                  alt="Dish 10"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover rounded-md shadow-lg hover:transition duration-300 transform hover:scale-95"
                />
              </div>

              {/* Fifth Image */}
              <div className="col-span-2 row-span-2">
                <Image
                  src="/images/dish12.png"
                  alt="Dish 12"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-md shadow-lg hover:transition duration-300 transform hover:scale-95"
                />
              </div>

              {/* Sixth Image */}
              <div className="col-span-3 row-span-2">
                <Image
                  src="/images/dish13.png"
                  alt="Dish 13"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-md shadow-lg hover:transition duration-300 transform hover:scale-95"
                />
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left px-4 md:px-12 mt-10 md:mt-16 ">
              <h2 className="text-3xl text-brand mb-4 font-greatvibes">
                Why Choose Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-semibold text-white mb-8">
                <span className="text-brand">Ex</span>tra Ordinary Taste And
                Experience
              </h3>
              <p className="text-lg text-white mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                et minima saepe dolorum consequatur sunt dicta ab provident,
                assumenda at quas deserunt omnis voluptates praesentium.
              </p>

              <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-3 gap-6">
                <div className="bg-brand rounded-md shadow-lg flex flex-col items-center justify-center text-center w-28 h-28 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    fill="#fafafa"
                    viewBox="0 0 256 256"
                  >
                    <path d="M48.07,100H207.93a12,12,0,0,0,11.8-14.55c-3.39-16-14.56-30.68-31.46-41.23S150.11,28,128,28,84.49,33.76,67.73,44.22,39.66,69.41,36.27,85.45A12,12,0,0,0,48.07,100Zm-4-12.89C50.26,58,86.33,36,128,36s77.74,22,83.91,51.11a4,4,0,0,1-.82,3.39,4,4,0,0,1-3.16,1.5H48.07a4,4,0,0,1-3.16-1.5A4,4,0,0,1,44.09,87.11Zm186.54,69.13-42.56,15.48-38.58-15.43a4,4,0,0,0-3,0L108,171.69l-38.51-15.4a4,4,0,0,0-2.86,0l-44,16A4,4,0,0,0,24,180a4.08,4.08,0,0,0,1.37-.24L44,173v11a36,36,0,0,0,36,36h96a36,36,0,0,0,36-36V171.53l21.37-7.77a4,4,0,0,0-2.74-7.52ZM204,184a28,28,0,0,1-28,28H80a28,28,0,0,1-28-28V170.07l15.93-5.79,38.58,15.43a4,4,0,0,0,3,0L148,164.31l38.51,15.4a4,4,0,0,0,2.86,0L204,174.44ZM20,128a4,4,0,0,1,4-4H232a4,4,0,0,1,0,8H24A4,4,0,0,1,20,128Z"></path>
                  </svg>
                  <span className="text-white font-semibold">Fast Food</span>
                </div>

                <div className="bg-brand rounded-md shadow-lg flex flex-col items-center justify-center text-center w-28 h-28 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    fill="#fafafa"
                    viewBox="0 0 256 256"
                  >
                    <path d="M161.66,166.34a8,8,0,1,1-11.32,0A8,8,0,0,1,161.66,166.34Zm-75.32-8a8,8,0,1,0,11.32,0A8,8,0,0,0,86.34,158.34Zm3.32-56a8,8,0,1,0,0,11.32A8,8,0,0,0,89.66,102.34Zm36.68,16a8,8,0,1,0,11.32,0A8,8,0,0,0,126.34,118.34ZM228,128A100,100,0,1,1,128,28a4,4,0,0,1,4,4,44.05,44.05,0,0,0,44,44,4,4,0,0,1,4,4,44.05,44.05,0,0,0,44,44A4,4,0,0,1,228,128Zm-8.08,3.84a52.08,52.08,0,0,1-47.78-48,52.08,52.08,0,0,1-48-47.78,92,92,0,1,0,95.76,95.76Z"></path>
                  </svg>
                  <span className="text-white font-semibold">Lunch</span>
                </div>

                <div className="bg-brand rounded-md shadow-lg flex flex-col items-center justify-center text-center w-28 h-28 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    fill="#fafafa"
                    viewBox="0 0 256 256"
                  >
                    <path d="M201.5,104.8,179.72,30.87A4,4,0,0,0,175.89,28H80.11a4,4,0,0,0-3.83,2.87L54.5,104.8a59.51,59.51,0,0,0,16.32,60.62A83.39,83.39,0,0,0,124,187.91V236H88a4,4,0,1,0,0,8h80a4,4,0,1,0,0-8H132V187.91a83.39,83.39,0,0,0,53.18-22.49A59.51,59.51,0,0,0,201.5,104.8ZM83.1,36h89.8l20.93,71.06c.43,1.49.8,3,1.1,4.47-23.64,10.47-50.76.18-65.12-7.1-28.22-14.29-49.48-14.1-63.88-10.14Zm96.62,123.57a75.68,75.68,0,0,1-103.44,0,51.53,51.53,0,0,1-14.11-52.51l1-3.46c12.66-4.87,33.45-7,63,8C137,117,154.33,124,172.8,124A62.78,62.78,0,0,0,196,119.78,51.26,51.26,0,0,1,179.72,159.57Z"></path>
                  </svg>
                  <span className="text-white font-semibold">Dinner</span>
                </div>
              </div>
              <div className="mt-10 bg-white rounded-md shadow-lg flex items-center font-Helvetica w-96 h-24">
                <div className="bg-brand rounded-l-md py-12 px-2 mr-10"></div>
                <div className="text-5xl font-semibold text-brand mr-10">
                  30+
                </div>
                <div className="text-2xl text-black">
                  Years of{" "}
                  <span className="text-2xl font-semibold text-black">
                    Experienced
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
