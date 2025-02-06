import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <>
      <section className="min-h-screen bg-gray-0 items-center justify-center">
        <Navbar />
        {/* Header Component */}
        <header className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
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
              <span className="text-brand">Sign</span>
              <span className="text-white"> up page</span>
              {/* Changed color to brand color #FF9F0D */}
            </h1>

            {/* Page Route */}
            <p className="text-lg">
              Home <span className="mx-2">{">"}</span>
              <span className="text-brand">sign up</span>
              {/* Changed color to brand */}
            </p>
          </div>
        </header>

        {/* Sign-Up Container */}
        <div className="container mx-auto mt-20 mb-20 bg-base-text-base-contrast shadow-lg rounded-lg p-8 w-full max-w-md border-brand border">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Sign Up
          </h2>

          {/* Form */}
          <form className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-user text-gray-400"></i>
              </span>
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-envelope text-gray-400"></i>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-lock text-gray-400"></i>
              </span>
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-brand border-gray-300 rounded focus:ring-brand"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me?
              </label>
            </div>

            {/* Sign-Up Button */}
            <button
              type="submit"
              className="w-full bg-brand text-base-contrast py-2 rounded-lg hover:bg-[#e88e0a] transition"
            >
              Sign Up
            </button>

            {/* Forgot Password */}
            <p className="text-right text-sm text-gray-600">
              <a href="#" className="text-brand hover:underline">
                Forgot password?
              </a>
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="border-t w-full"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="border-t w-full"></div>
          </div>

          {/* Social Sign-Up */}
          <div className="space-y-4">
            {/* Sign Up with Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center pr-24 border border-gray-300 py-2 rounded-lg text-gray-600 hover:bg-gray-100 "
            >
              <Image
                src="/icons/Google-logo-png-plants.png"
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-20"
              />
              Sign Up with Google
            </button>

            {/* Sign Up with Apple */}
            <button
              type="button"
              className="w-full flex items-center justify-center pr-24 border border-gray-300 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <Image
                src="/icons/apple-logo.png"
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-24"
              />
              Sign Up with Apple
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
