"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCalendarAlt, FaUserAlt, FaComment } from "react-icons/fa";

const BlogList = () => {
  const posts = [
    {
      title: "10 Reasons To Do A Digital Detox Challenge",
      date: "Feb 14, 2022",
      admin: "Admin",
      comments: 24,
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      image: "/images/blog_img1.png",
    },
    {
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      date: "Mar 1, 2022",
      admin: "Chef John",
      comments: 18,
      description:
        ".At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      image: "/images/blog_img2.png",
    },
    {
      title: "Spicy Jalapeno Burger",
      date: "Apr 10, 2022",
      admin: "Admin",
      comments: 30,
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      image: "/images/blog_img3.png",
    },
    {
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      date: "May 15, 2022",
      admin: "Chef Emily",
      comments: 12,
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      image: "/images/blog_img4.png",
    },
  ];

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
            <span className="text-white"> List</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Blog List</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      <div className="bg-white py-8 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Content */}
          <div className="lg:col-span-2 space-y-8">
            {posts.map((post, index) => (
              <div
                key={post.title + index}
                className="bg-white overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={600}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-center text-brand mb-4 space-x-4">
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaComment />
                      <span className="text-sm">{post.comments} Comments</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUserAlt />
                      <span className="text-sm">{post.admin}</span>
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {post.description}
                  </p>
                  <Link href="/BlogDetails">
                    <button className="text-base-dark border border-brand px-4 py-2 text-sm sm:text-base flex items-center hover:bg-brand hover:text-white rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
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

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8">
          <button className="border border-brand text-brand px-4 py-2 mx-1 hover:bg-brand hover:text-white">
            &lt;&lt;
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className="border border-brand text-brand px-4 py-2 mx-1 hover:bg-brand hover:text-white"
            >
              {page}
            </button>
          ))}
          <button className="border border-brand text-brand px-4 py-2 mx-1 hover:bg-brand hover:text-white">
            &gt;&gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogList;
