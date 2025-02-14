import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <section className=" items-center justify-center px-4">
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
            <span className="text-brand">404</span>
            <span className="text-white"> Error</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">404</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      {/* Found 404 Error */}
      <div className="text-center mt-20 mb-36">
        <h1 className="text-8xl font-bold text-brand mb-8 font-Helvetica">
          404
        </h1>
        <h2 className="text-3xl text-gray-800 font-semibold mb-2">
          Oops! Look likes something going wrong
        </h2>
        <p className="text-gray-600 mb-8">
          {`Page Cannot be found! We'll have it figured out in no time.`}
          <p>Meanwhile, check out these fresh ideas:</p>
        </p>

        {/* Button to Go Back */}
        <Link href="/">
          <button className="bg-brand text-white py-3 px-8 rounded-md shadow hover:bg-brand-dark transition">
            Go to home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
