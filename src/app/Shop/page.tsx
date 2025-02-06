"use client";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ShopPage = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Fresh Lime",
      price: "$38.00",
      discountPrice: "$45.00",
      image: "/images/product6.png",
    },
    {
      id: 2,
      name: "Chocolate Muffin",
      price: "$28.00",
      image: "/images/product7.png",
    },
    {
      id: 3,
      name: "Burger",
      price: "$21.00",
      discountPrice: "$45.00",
      image: "/images/product8.png",
    },
    {
      id: 4,
      name: "Country Burger",
      price: "$45.00",
      image: "/images/Burger.png",
    },
    { id: 5, name: "Drink", price: "$24.00", image: "/images/Drink.png" },
    {
      id: 6,
      name: "Pizza",
      price: "$10.00",
      discountPrice: "23.00",
      image: "/images/Pizza.png",
    },
    {
      id: 7,
      name: "Cheese Butter",
      price: "$25.00",
      image: "/images/Cheese Butter.png",
    },
    {
      id: 8,
      name: "Sandwiches",
      price: "$12.00",
      image: "/images/Sandwiches.png",
    },
    {
      id: 9,
      name: "Chicken Soup",
      price: "$45.00",
      discountPrice: 3,
      image: "/images/Chicken Soup.png",
    },
    {
      id: 10,
      name: "Country Burger",
      price: "$25.00",
      image: "/images/Burger.png",
    },
    {
      id: 11,
      name: "Drink",
      price: "$45.00",
      discountPrice: "$65.00",
      image: "/images/Drink.png",
    },
    { id: 12, name: "Pizza", price: "$25.00", image: "/images/Pizza.png" },
    {
      id: 13,
      name: "Cheese Butter",
      price: "$15.00",
      image: "/images/Cheese Butter.png",
    },
    {
      id: 14,
      name: "Sandwiches",
      price: "$15.00",
      image: "/images/Sandwiches.png",
    },
    {
      id: 15,
      name: "Chicken soup",
      price: "$23.00",
      image: "/images/Chicken Soup.png",
    },
  ]);
  const [price, setPrice] = useState(400);

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
            <span className="text-white"> Shop</span>
            {/* Changed color to brand color #FF9F0D */}
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Shop</span>
            {/* Changed color to brand */}
          </p>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 p-20 text-gray-800">
        {/* Main Content */}
        <main className="flex-grow">
          {/* Sort and Show */}
          <div className="flex items-center mb-4">
            <div className="flex items-center gap-2 mr-10">
              <label htmlFor="sort" className="font-bold">
                Sort by:
              </label>
              <select id="sort" className="p-2 border rounded">
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="show" className="font-bold">
                Show:
              </label>
              <select id="show" className="p-2 border rounded">
                <option value="default">Default</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {products.map((product) => (
              <div key={product.id} className="">
                {/* Image with increased size */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400} // Increased width
                  height={300} // Increased height
                  className=" mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <div className="flex items-center gap-4">
                  {/* Display price and discount in the same line */}
                  <p className="text-brand font-semibold">{product.price}</p>
                  {[1, 3, 5, 11].includes(product.id) && (
                    <p className="text-gray-500 line-through">
                      {product.discountPrice}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12">
            {[
              { page: "<<" },
              { page: 1 },
              { page: 2 },
              { page: 3 },
              { page: ">>" },
            ].map((item) => (
              <button
                key={item.page}
                className="px-4 py-2 border rounded mx-1 text-brand hover:bg-brand hover:text-white font-bold"
              >
                {item.page}
              </button>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white boarder border-gray-300 p-4">
          {/* Search Product */}
          <div className="flex mb-6 h-10 w-60">
            <div className="flex items-center h-10">
              <input
                type="text"
                id="search"
                placeholder="Search by Product"
                className="w-full p-2 border bg-orange-100"
              />
            </div>
            {/* Search Icon */}
            <div className="flex items-center justify-center bg-brand w-12">
              <Link href="/Search">
                <svg
                  className="transition duration-300 cursor-pointer hover:text-brand"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" // Adjust size here
                  height="24" // Adjust size here
                  fill="#fafafa"
                  id="search-icon"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <p className="font-bold mb-2">Category</p>
            <ul className="space-y-2">
              {[
                "Sandwiches",
                "Burger",
                "Chicken Chup",
                "Drink",
                "Pizza",
                "Thi",
                "Non Veg",
                "Uncategorized",
              ].map((category) => (
                <li key={category}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-grow p-4 rounded-lg shadow-md">
            <p className="font-bold mb-2">Filter by Price</p>
            <div className="flex flex-col gap-2">
              <input
                type="range"
                min="0"
                max="1000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-brand"
              />
              <div className="flex justify-between items-center text-gray-500">
                <span>From $0 to ${price}</span>
                <button className="px-3 py-1 bg-brand text-white rounded">
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Image */}
          <div className="mb-6">
            <Image
              src="/images/Ads Banner.png"
              alt="Ad"
              width={300}
              height={200}
              className="rounded"
            />
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4 mb-8">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              {[
                {
                  image: "/images/recent1.png",
                  date: "22 oct 2022",
                  description: "Lorem ipsum dolor sit amet",
                },
                {
                  image: "/images/recent1.png",
                  date: "22 oct 2022",
                  description: "Lorem ipsum dolor sit amet",
                },
                {
                  image: "/images/recent1.png",
                  date: "22 oct 2022",
                  description: "Lorem ipsum dolor sit amet",
                },
                {
                  image: "/images/recent1.png",
                  date: "22 oct 2022",
                  description: "Lorem ipsum dolor sit amet",
                },
              ].map((post, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Image
                    src={post.image}
                    alt="Recent Post"
                    width={80}
                    height={80}
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

          {/* Product Tags */}
          <div>
            <p className="font-bold mb-2">Product Tags</p>
            <ul className="flex flex-wrap text-sm gap-2">
              {[
                "Services",
                "Our Menu",
                "Pizza",
                "Cupcake",
                "Burger",
                "Cookies",
                "Our Shop",
                "Tandoori Chicken",
              ].map((tag) => (
                <li
                  key={tag}
                  className="px-3 py-1 text-gray-700 underline cursor-pointer hover:text-brand hover:underline"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default ShopPage;
