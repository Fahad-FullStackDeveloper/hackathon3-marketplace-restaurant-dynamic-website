import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const Pages = () => {
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
            <span className="text-brand">Our</span>
            <span className="text-white"> Pages</span>
            {/* Changed color to brand color #FF9F0D */}
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Pages</span>
            {/* Changed color to brand */}
          </p>
        </div>
      </header>

      <h1>Pages</h1>
    </>
  );
};

export default Pages;
