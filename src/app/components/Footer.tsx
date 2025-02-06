"use client";
import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base text-base-contrast py-12 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Support Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-brand ml-28 mr-28">
          {/* Text Section */}
          <div className="text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold">
              <span className="text-brand">St</span>ill You Need Our Support ?
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              {`Don't wait, make a smart & logical quote here. It's pretty easy.`}
            </p>
          </div>

          {/* Input and Button Section */}
          <div className="flex flex-col sm:flex-row items-center md:text-xs md:-space-x-2 sm:space-y-0 sm:-space-x-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-3 bg-brand text-base-contrast placeholder-base-contrast rounded-sm focus:outline-none"
            />
            <button className="px-6 py-3 bg-base-contrast text-brand rounded-sm hover:bg-brand hover:text-base-contrast">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
          {/* About Us Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">About Us</h3>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              interdum aliquam arcu, sit amet venenatis nulla commodo vel.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-brand rounded flex justify-center items-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M132,80v45.74l38.06,22.83a4,4,0,0,1-4.12,6.86l-40-24A4,4,0,0,1,124,128V80a4,4,0,0,1,8,0Zm92-20a4,4,0,0,0-4,4V92.85C211.33,82.46,203,73,193.05,63a92,92,0,1,0-1.9,132,4,4,0,0,0-5.5-5.82,84,84,0,1,1,1.73-120.5C197.7,79,206.39,89,215.53,100H184a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V64A4,4,0,0,0,224,60Z"></path>
                </svg>
              </div>
              <p className="text-lg">
                Opening Hours:
                <p className="text-sm text-balance">
                  Mon - Sun (9AM - 10PM){" "}
                  <p className="text-yellow-300">Friday - Closed</p>
                </p>
              </p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Useful Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/About" },
                { label: "News", href: "#" },
                { label: "Partners", href: "#" },
                { label: "Team", href: "#" },
                { label: "Menu", href: "/Menu" },
                { label: "Contacts", href: "../Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-md hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Help?</h3>
            <ul className="space-y-3">
              {[
                { label: "FAQ", href: "/FAQ" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Reporting", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "Support Policy", href: "#" },
                { label: "Privacy", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-md hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Recent Posts</h3>
            <div className="space-y-3">
              {[
                {
                  src: "/images/dish1.png",
                  label: "Dish 1 - Delicious Pasta",
                  date: "December 5, 2024",
                },
                {
                  src: "/images/dish2.png",
                  label: "Dish 2 - Spicy Tacos",
                  date: "December 3, 2024",
                },
                {
                  src: "/images/dish3.png",
                  label: "Dish 3 - Crispy Chicken",
                  date: "December 1, 2024",
                },
              ].map((post) => (
                <div key={post.label} className="flex items-center space-x-3">
                  <Image
                    src={post.src}
                    alt={post.label}
                    width={60} // Specify width
                    height={60} // Specify height
                    className="rounded-sm"
                    style={{ objectFit: "cover" }} // Use style for object-fit
                  />
                  <div>
                    <p className="text-sm">{post.label}</p>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-12 text-sm text-gray-400 space-y-4 sm:space-y-0">
            {/* Copyright Text */}
            <p>&copy; Copyright 2024 by Ayeman. All rights reserved.</p>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              {[
                {
                  href: "https://www.facebook.com",
                  icon: <FaFacebook />,
                  color: "text-blue-600",
                },
                {
                  href: "https://www.twitter.com",
                  icon: <FaTwitter />,
                  color: "text-blue-400",
                },
                {
                  href: "https://www.instagram.com",
                  icon: <FaInstagram />,
                  color: "text-pink-600",
                },
                {
                  href: "https://www.youtube.com",
                  icon: <FaYoutube />,
                  color: "text-red-600",
                },
                {
                  href: "https://www.pinterest.com",
                  icon: <FaPinterest />,
                  color: "text-red-600",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 bg-base-contrast flex justify-center items-center rounded-md shadow-md hover:bg-brand ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
