"use client";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Food {
  imageUrl: string; // URL
  name: string;
  price: number;
  originalPrice: number;
  slug: string;
}

interface CartItem extends Food {
  quantity: number;
}

export default function FoodPage() {
  const [food, setFood] = useState<Food[]>([]);
  const [price, setPrice] = useState<number>(500); // Default value
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [wishlistItems, setWishlistItems] = useState<CartItem[]>(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const query = `*[_type == "food"]{
          "slug": slug.current,
          "imageUrl": image.asset->url,
          name,
          price,
          originalPrice
        }`;

        const food: Food[] = await client.fetch(query);
        setFood(food);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching foods:", error);
        setError("Failed to fetch foods.");
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const handleAddToCart = (item: Food) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const handleAddToWishlist = (item: Food) => {
    setWishlistItems([...wishlistItems, { ...item, quantity: 1 }]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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

          {/* Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {food.map((food) => (
              <div key={food.slug} className="cursor-pointer">
                <Link href={`/Shop/${food.slug}`} passHref>
                  <div>
                    {/* Image */}
                    <Image
                      src={food.imageUrl}
                      alt={food.name}
                      width={400}
                      height={300}
                      className="mb-1 w-full h-auto object-cover rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-95"
                    />
                    {/* Food Name */}
                    <h3 className="text-lg font-bold mb-2">{food.name}</h3>
                    {/* Price & Discount */}
                    <div className="flex items-center gap-4 mb-4">
                      <p className="text-brand font-semibold">${food.price}</p>
                      {food.originalPrice && (
                        <p className="line-through text-gray-600">${food.originalPrice}</p>
                      )}
                    </div>
                  </div>
                </Link>
                <button onClick={() => handleAddToCart(food)} className="text-blue-500">Add to Cart</button>
                <button onClick={() => handleAddToWishlist(food)} className="text-red-500">Add to Wishlist</button>
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
          {/* Search Food */}
          <div className="flex mb-6 h-10 w-60">
            <div className="flex items-center h-10">
              <input
                type="text"
                id="search"
                placeholder="Search by Food"
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
                max="100"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-brand"
                id="priceRange"
                aria-label="Price range filter"
                title="Adjust price range"
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

          {/* Food Tags */}
          <div>
            <p className="font-bold mb-2">Food Tags</p>
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
}