"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCalendarAlt, FaUserAlt, FaComment } from "react-icons/fa";

const BlogDetails: React.FC = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission logic here, e.g., saving it or sending it to an API
    console.log("Comment Submitted:", { name, email, comment });
  };

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
            <span className="text-brand">Blog</span>
            <span className="text-white"> Details</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Blog Details</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Post */}
          <div className="lg:col-span-2">
            <Image
              src="/images/blog_img1.png"
              alt="Blog Header Image"
              width={800}
              height={500}
              className="rounded-lg"
            />
            <div className="flex items-center text-brand mt-4 space-x-4">
              <div className="flex items-center space-x-1">
                <FaCalendarAlt />
                <span>Feb 14, 2022</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaComment />
                <span className="text-sm">24 Comments</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaUserAlt />
                <span>Admin</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold mt-4">
              10 Reasons To Do A Digital Detox Challenge
            </h1>
            <p className="mt-4 text-gray-700">
              Netus pretium tellus nulla commodo massa adipiscing in elementum
              magna congue condimentum placerat habitasse potenti ac orci a
              quisque tristique elementum et viverra at condimentum scelerisque
              eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque
              aliquet tempus faucibus quam ac aliquet nibh a condimentum
              suspendisse hac integer leo erat aliquam ut himenaeos.
            </p>
            <p className="mt-4 text-gray-700">
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis
              varius per a augue magna hac. Nec hac et vestibulum duis a
              tincidunt per a aptent interdum purus feugiat a id aliquet erat
              himenaeos nunc torquent euismod adipiscing adipiscing dui gravida
              justo.
            </p>
            {/* Quote Section */}
            <div className="bg-brand text-white px-4 py-2 mt-4 text-lg font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M100,60H40A12,12,0,0,0,28,72v64a12,12,0,0,0,12,12h64v12a36,36,0,0,1-36,36,4,4,0,0,0,0,8,44.05,44.05,0,0,0,44-44V72A12,12,0,0,0,100,60Zm4,80H40a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h60a4,4,0,0,1,4,4ZM216,60H156a12,12,0,0,0-12,12v64a12,12,0,0,0,12,12h64v12a36,36,0,0,1-36,36,4,4,0,0,0,0,8,44.05,44.05,0,0,0,44-44V72A12,12,0,0,0,216,60Zm4,80H156a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h60a4,4,0,0,1,4,4Z"></path>
              </svg>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </div>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>

            <div className="container mx-auto p-4">
              {/* Tags Section */}
              <div className="mb-4">
                <span className="text-sm font-bold text-gray-600 mr-3">
                  Tags:{" "}
                </span>
                <span className="bg-gray-200 px-2 py-1 text-xs text-gray-700 rounded-full mr-2">
                  Restaurant
                </span>
                <span className="bg-gray-200 px-2 py-1 text-xs text-gray-700 rounded-full mr-2">
                  Dinner
                </span>
                <span className="bg-gray-200 px-2 py-1 text-xs text-gray-700 rounded-full mr-2">
                  Pizza
                </span>
                <span className="bg-gray-200 px-2 py-1 text-xs text-gray-700 rounded-full mr-2">
                  Yummy
                </span>
              </div>

              {/* Share Icons Section */}
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-600">
                  Share:{" "}
                </span>
                <a href="#" className="text-blue-500 hover:text-blue-700 mr-2">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600 mr-2">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700 mr-2">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="#" className="text-red-500 hover:text-red-700">
                  <i className="fab fa-pinterest"></i> Pinterest
                </a>
              </div>

              {/* Comments Section */}
              <div className="comments-section">
                <h3 className="text-xl font-semibold mb-4">Comments</h3>

                {/* Comment 1 */}
                <div className="comment mb-4">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">MD Sojib Khan</span>
                    <span className="text-sm text-gray-500">June 22, 2020</span>
                  </div>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et
                    sem. Fusce hendrerit faucibus sollicitudin.
                  </p>
                </div>

                {/* Comment 2 */}
                <div className="comment mb-4">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">John Doe</span>
                    <span className="text-sm text-gray-500">
                      March 15, 2021
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Donec a urna at purus tincidunt laoreet eu ac nulla. Aliquam
                    erat volutpat. Curabitur fringilla mi eget diam tempus, non
                    condimentum odio malesuada.
                  </p>
                </div>

                {/* Comment 3 */}
                <div className="comment mb-4">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Jane Smith</span>
                    <span className="text-sm text-gray-500">
                      November 10, 2022
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Phasellus vestibulum felis eu arcu viverra, eget vehicula
                    nulla mollis. Nulla facilisi. Integer auctor ipsum et felis
                    lacinia, id fermentum purus pretium.
                  </p>
                </div>
              </div>

              {/* Post a Comment Section */}
              <div className="post-comment mt-8">
                <h3 className="text-xl font-semibold mb-4">Post a Comment</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Comment
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Search Box */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search"
                className="w-full border py-2 pl-10 pr-4"
              />
              <AiOutlineSearch className="absolute top-2.5 left-3 text-gray-500" />
            </div>

            {/* Author Image */}
            <div className="bg-white shadow-lg p-4 rounded-lg text-center mb-8">
              <Image
                src="/images/prince_miyako.png"
                alt="Author Image"
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
              <h3 className="text-lg font-bold mt-2">Prince Miyako</h3>
              <p className="text-sm text-gray-600">Digital Content Creator</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis distinctio, odio eligendi suscipit reprehenderit atque
              </p>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-4 mb-8">
              <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-2">
                {[
                  {
                    image: "/images/dish15.png",
                    date: "22 oct 2022",
                    description: "Lorem ipsum dolor sit amet",
                  },
                  {
                    image: "/images/dish16.png",
                    date: "22 oct 2022",
                    description: "Lorem ipsum dolor sit amet",
                  },
                  {
                    image: "/images/dish17.png",
                    date: "22 oct 2022",
                    description: "Lorem ipsum dolor sit amet",
                  },
                  {
                    image: "/images/dish18.png",
                    date: "22 oct 2022",
                    description: "Lorem ipsum dolor sit amet",
                  },
                ].map((post, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Image
                      src={post.image}
                      alt="Recent Post"
                      width={100}
                      height={100}
                    />
                    <div className="text-start">
                      <span className="text-sm text-gray-400">{post.date}</span>
                      <span className="block text-sm text-gray-400">
                        {post.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter by Menu */}
            <div className="bg-white p-4 mb-8">
              <h3 className="text-lg font-bold mb-4">Filter by Menu</h3>
              <ul className="space-y-4">
                {[
                  { name: "Chiken Fry", price: 26, image: "/images/1.png" },
                  { name: "Burger Food", price: 46, image: "/images/2.png" },
                  { name: "Pizza", price: 16, image: "/images/3.png" },
                  { name: "Fresh Fruits", price: 36, image: "/images/4.png" },
                  { name: "Vegitables", price: 16, image: "/images/5.png" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 object-cover"
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-gray-600">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-4 mb-8">
              <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Lifestyle",
                  "Technology",
                  "Health",
                  "Travel",
                  "Food",
                  "Fitness",
                  "Education",
                  "Finance",
                  "Fashion",
                  "Business",
                  "Entertainment",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-200 text-gray-700 px-2 py-1 cursor-pointer hover:bg-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="bg-white p-4 mb-8">
              <h3 className="text-lg font-bold mb-4">Photo Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  "/images/gallary1.png",
                  "/images/gallary2.png",
                  "/images/gallary3.png",
                  "/images/gallary4.png",
                  "/images/gallary5.png",
                  "/images/gallary6.png",
                ].map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
