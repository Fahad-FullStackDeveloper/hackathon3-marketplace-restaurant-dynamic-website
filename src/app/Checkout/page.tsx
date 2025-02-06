"use client";
// import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const ShippingPage = () => {
  return (
    <section className="min-h-screen bg-gray-0">
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
            <span className="text-brand">Check</span>
            <span className="text-white">out Page</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Checkout</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      {/* Main Section with 3 Grids */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {/* Left Column (First 5 inputs) */}
        <div className="bg-white text-black p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Shipping Address</h2>

          <div>
            <InputField label="First Name" />
            <InputField label="Last Name" />
            <InputField label="Email Address" type="email" />
            <InputField label="Phone Number" />
            <InputField label="Company" />
            <Link
              href="/shopping_cart"
              className="border border-brand text-[#4F4F4F] px-32 py-3 w-full hover:bg-brand-dark mt-4"
            >
              Back to Cart
            </Link>
          </div>
        </div>

        {/* Center Column (Last 5 inputs) */}
        <div className="bg-white  text-black  p-6 mb-8">
          <div>
            <CountryDropdown label="Country" />
            <CityDropdown label="City" />
            <InputField label="Zip Code" />
            <InputField label="Address 1" />
            <InputField label="Address 2" />

            <div className="flex items-center my-4">
              <input type="checkbox" id="billing-address" />
              <label htmlFor="billing-address" className="ml-2">
                Billing address is the same
              </label>
            </div>

            <button className="w-full bg-brand text-base-contrast py-3 rounded-md hover:bg-brand-dark mt-4">
              Proceed for Shopping
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 256 256"
                className="inline-block ml-2"
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column (Receipt) */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-black mb-4">Receipt</h3>

          {/* Receipt Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-4 ">
              <Image
                src="/images/chicken-tikka.png" // Replace with your image path
                alt="Chicken Tikka Kabab"
                width={100}
                height={100}
                className="rounded-md"
              />
              <div>
                <p className="text-lg font-semibold text-black w-40">
                  1 Chicken Tikka Kabab
                </p>
                <p className="text-gray-600">150 gm net</p>
                <p className="font-semibold text-gray-800">$65.00</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/chicken-tikka.png" // Replace with your image path
                alt="Chicken Tikka Kabab"
                width={100}
                height={100}
                className="rounded-md"
              />
              <div>
                <p className="text-lg font-semibold text-black  w-40">
                  1 Chicken Tikka Kabab
                </p>
                <p className="text-gray-600">150 gm net</p>
                <p className="font-semibold text-gray-800">$65.00</p>
              </div>
            </div>
          </div>

          {/* Receipt Summary */}
          <div className="flex justify-between text-gray-800 mb-2">
            <p>Sub-Total</p>
            <p>$ 130.00</p>
          </div>
          <div className="flex justify-between text-gray-800 mb-2">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between text-gray-800 mb-2">
            <p>Discount -25%</p>
            <p>$ 32.50</p>
          </div>
          <div className="flex justify-between text-gray-800 mb-2">
            <p>Tax +30%</p>
            <p>$ 29.25</p>
          </div>
          <div className="flex justify-between text-black font-semibold mb-4">
            <p>Total</p>
            <p>$ 126.75</p>
          </div>

          {/* Place Order Button */}
          <button className="w-full bg-brand text-base-contrast py-3 rounded-md hover:bg-brand-dark mt-4">
            Place an Order
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#ffffff"
              viewBox="0 0 256 256"
              className="inline-block ml-2"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Input Field Component
const InputField = ({
  label,
  type = "text",
}: {
  label: string;
  type?: string;
}) => (
  <div className="mb-4">
    <label className="block text-black mb-2">{label}</label>
    <input
      type={type}
      placeholder={label}
      className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>
);

// Country Dropdown Component
const CountryDropdown = ({ label }: { label: string }) => (
  <div className="mb-4">
    <label className="block text-black font-semibold mb-2">{label}</label>
    <select className="w-full px-4 py-4 border border-gray-300focus:outline-none focus:ring-2 focus:ring-orange-400">
      <option value="">Select Country</option>
      <option value="Pakistan">Pakistan</option>
      <option value="India">India</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Sri Lanka">Sri Lanka</option>
    </select>
  </div>
);

// City Dropdown Component
const CityDropdown = ({ label }: { label: string }) => (
  <div className="mb-4">
    <label className="block text-black font-semibold mb-2">{label}</label>
    <select className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400">
      <option value="">Select City</option>
      <option value="Karachi">Karachi</option>
      <option value="Lahore">Lahore</option>
      <option value="Islamabad">Islamabad</option>
      <option value="Rawalpindi">Rawalpindi</option>
    </select>
  </div>
);

export default ShippingPage;
