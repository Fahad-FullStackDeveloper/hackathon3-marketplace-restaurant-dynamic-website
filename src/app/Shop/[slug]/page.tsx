"use client";

import Navbar from "../../components/Navbar";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";

interface CartItem extends FoodDetails {
  quantity: number;
}

const FoodPage = () => {
  const { slug } = useParams();
  const [food, setFood] = useState<FoodDetails | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addToCart, getCartCount] = useState();
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [getCartCount] = useState(() => {
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return cartCount;
  });
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const handleIncrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddReview = (rating: number, comment: string) => {
    if (food) {
      const updatedFood = {...food, reviews: [...food.reviews, { rating, comment }] };
      setFood(updatedFood);
    }
  };

  const [wishlistItems, setWishlistItems] = useState<CartItem[]>(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    setCartCount(getCartCount());
  }, [getCartCount]);

  const handleAddToCart = () => {
    if (food) {
      addToCart({ ...food, quantity });
      setCartCount(getCartCount());
    }
  };

  useEffect(() => {
    const fetchFood = async () => {
      const query = `*[_type == "food" && slug.current == $slug][0]{
    "imageUrl": image.asset->url,
    name,
    price,
    originalPrice,
    description,
    category,
    tags,
    available,
    reviews,
    "slug": slug.current
    }`;

      const food: FoodDetails | null = await client.fetch(query, {
        slug: slug,
      });
      setFood(food);
    };
    fetchFood();
  }, [slug]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const handleAddToCart = () => {
    if (food) {
      setCartItems([...cartItems, { ...food, quantity }]);
    }
  };

  const handleAddToWishlist = () => {
    if (food) {
      setWishlistItems([...wishlistItems, { ...food, quantity }]);
    }
  };

  if (!food) {
    return <p className="text-center p-10">Loading...</p>;
  }

  return (
    <div className="container mx-auto max-w-full mb-20">
      <Navbar cartCount={cartCount} />
      {/* Header Component */}
      <header className="relative h-[300px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/HeaderBG.png"
            alt="Header Background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-opacity-10"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-brand">Food</span>
            <span className="text-white"> Detail</span>
          </h1>
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            Shop {">"} <span className="text-brand">Food Detail</span>
          </p>
        </div>
      </header>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
        {/* Side Images */}
        <div className="col-span-12 md:col-span-2 flex md:flex-col justify-center gap-4 md:gap-2 pt-4 md:pt-10 pl-4 md:pl-8">
          {["product2", "product3", "product4", "product5"].map(
            (pic, index) => (
              <Image
                key={index}
                src={`/images/${pic}.png`} // Correct interpolation for src
                alt={`Product ${index + 1}`} // Correct interpolation for alt
                width={100}
                height={64}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover border rounded-md"
              />
            )
          )}
        </div>

        {/* Main Image */}
        <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <Image
            src={food.imageUrl}
            alt="Main Food"
            width={350}
            height={350}
            className="w-3/4 sm:w-5/6 md:w-11/12 lg:w-full h-auto max-h-96 object-contain"
          />
        </div>

        <div className="col-span-12 md:col-span-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between space-x-4">
            <span className="bg-brand text-white px-3 py-1 text-sm font-medium rounded mt-4 md:mt-20">
              In Stock
            </span>
            <div className="flex items-center space-x-2 mt-2 md:mt-0">
              <button className="text-gray-400 hover:text-gray-500 font-semibold">
                &larr; Prev
              </button>
              <button className="text-gray-400 hover:text-gray-500 font-semibold">
                Next &rarr;
              </button>
            </div>
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
            {food.name}
          </h1>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            {food.description}
          </p>

          <h1 className="text-xl sm:text-2xl font-bold text-base">{`USD $${food.price}`}</h1>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex text-yellow-500">
              {Array.from({ length: 4 }, (_, index) => (
                <FaStar key={index} />
              ))}
              <FaStarHalfAlt />
            </div>
            <span className="text-gray-400 text-xs">| 4.5</span>
            <span className="text-blue-500 text-xs">
              | {food.reviews} Reviews
            </span>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-semibold">
              Dictum/cursus/Risus
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-2 sm:px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-3 sm:px-5 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 sm:px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="px-4 sm:px-5 py-2 bg-brand text-white hover:bg-brand-dark flex items-center gap-2"
            >
              Add to Cart
              <FaHeart />
            </button>
          </div>
          <hr className="my-4 sm:my-6 border-t-2 border-gray-300 w-full" />

          <div className="space-y-4 text-xs sm:text-sm md:text-base">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button
                onClick={handleAddToWishlist}
                className="flex space-x-2 text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#4b5563"
                  viewBox="0 0 256 256"
                >
                  <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
                </svg>
                <span>Add to Wishlist</span>
              </button>
              <button className="flex space-x-2 text-gray-500 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#4b5563"
                  viewBox="0 0 256 256"
                >
                  <path d="M112,152a8,8,0,0,0-8,8v28.69L66.34,151A8,8,0,0,1,64,145.37V95a32,32,0,1,0-16,0v50.38a23.85,23.85,0,0,0,7,17L92.69,200H64a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,112,152ZM40,64A16,16,0,1,1,56,80,16,16,0,0,1,40,64Zm168,97V110.63a23.85,23.85,0,0,0-7-17L163.31,56H192a8,8,0,0,0,0-16H144a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31L189.66,105a8,8,0,0,1,2.34,5.66V161a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,200,208Z"></path>
                </svg>
                <span>Compare</span>
              </button>
            </div>

            <div className="space-y-1">
              <p>
                <strong>Category:</strong> {food.category}
              </p>
              <p>
                <strong>Tag:</strong> {food.tags.join(", ")}
              </p>
            </div>

            <p className="flex flex-wrap items-center gap-2 sm:gap-4">
              <strong>Share:</strong>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600"
              >
                <FaLinkedin size={16} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600"
              >
                <FaFacebook size={16} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600"
              >
                <FaInstagram size={16} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600"
              >
                <FaTwitter size={16} />
              </Link>
            </p>
          </div>
        </div>
      </div>

      <hr className="my-6 border-t-2 border-gray-300 w-full" />

      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-start items-start space-x-8">
          <h2 className="text-lg md:text-xl font-bold border-b-2 bg-brand text-white px-4 py-2">
            Description
          </h2>
          <h2 className="text-lg md:text-xl font-semibold text-gray-500">
            Reviews (24)
          </h2>
        </div>

        <p className="text-xs text-gray-600 my-4 ">
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
          purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
          sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
          sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
          Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
          interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi.
          In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
          <br />
          <br />
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
          blandit justo urna, id porttitor est dignissim nec. Pellentesque
          scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan
          et sagittis massa. Aliquam aliquam accumsan lectus quis auctor.
          Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula
          fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor
          sodales. Suspendisse eu fringilla leo, non aliquet sem.
        </p>

        <div className="text-xs mt-6">
          <h3 className="text-sm md:text-sm font-bold text-gray-600">
            Key Benefits
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li>
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
            </li>
            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
            <li>Mauris eget diam magna, in blandit turpis.</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-8 py-6 h-16 text-2xl font-bold text-black">
        <h1>Similar Foods</h1>
      </div>
      <div className="container mx-auto px-8 py-6 grid grid-cols-1 md:grid-cols-4 gap-0">
        {[
          {
            id: "product6",
            name: "Fresh Lime",
            price: "$38.00",
            discountPrice: "$45.00",
            image: "/images/product6.png",
          },
          {
            id: "product7",
            name: "Chocolate Muffin",
            price: "$28.00",
            image: "/images/product7.png",
          },
          {
            id: "product8",
            name: "Burger",
            price: "$21.00",
            image: "/images/product8.png",
          },
          {
            id: "product9",
            name: "Fresh Lime",
            price: "$38.00",
            discountPrice: "$45.00",
            image: "/images/product9.png",
          },
        ].map((product) => (
          <div
            key={product.id}
            className="text-center p-4 rounded-lg relative "
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto object-contain "
            />
            <h3 className="text-md font-semibold mt-2">{product.name}</h3>
            <div className="flex items-center justify-center gap-1">
              <p className="text-brand text-md font-semibold">
                {product.price}
              </p>
              <p className="text-gray-400 font-bold line-through text-sm">
                {product.discountPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
