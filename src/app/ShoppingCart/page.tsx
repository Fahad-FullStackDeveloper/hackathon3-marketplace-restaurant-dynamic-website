"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  image: string;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Burger",
      price: 5,
      quantity: 1,
      rating: 5,
      image: "/images/burger.png",
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 8,
      quantity: 1,
      rating: 4,
      image: "/images/Drink.png",
    },
    {
      id: 3,
      name: "Pizza",
      price: 26,
      quantity: 1,
      rating: 3,
      image: "/images/pizza.png",
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: 6,
      quantity: 1,
      rating: 5,
      image: "/images/3.Dessert.png",
    },
    {
      id: 5,
      name: "Cheese Butter",
      price: 28,
      quantity: 1,
      rating: 4,
      image: "/images/dish9.png",
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = (): string => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
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
            <span className="text-brand">Shopping</span>
            <span className="text-white"> Cart</span>
            {/* Changed color to brand color #FF9F0D */}
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Shopping cart</span>
            {/* Changed color to brand */}
          </p>
        </div>
      </header>

      {/* Main Section */}
      <div className="flex flex-col items-center gap-8 p-4 sm:p-6 lg:p-8">
        {/* Shopping Cart Container */}
        <div className="w-full lg:w-3/4 bg-white p-4 sm:p-6 border rounded shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 text-sm sm:text-base">
                    Product
                  </th>
                  <th className="border-b py-2 text-sm sm:text-base">Price</th>
                  <th className="border-b py-2 text-sm sm:text-base">
                    Quantity
                  </th>
                  <th className="border-b py-2 text-sm sm:text-base">Total</th>
                  <th className="border-b py-2 text-sm sm:text-base">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <p className="text-sm sm:text-base">{item.name}</p>
                        <p className="text-brand text-sm text-base">
                          {"★".repeat(item.rating)}
                          {"☆".repeat(5 - item.rating)}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 text-sm sm:text-base">${item.price}</td>
                    <td className="py-2">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <button
                          className="px-2 py-1 sm:px-3 sm:py-2 bg-yellow-300 rounded text-sm sm:text-base"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="px-2 py-1 sm:px-3 sm:py-2 bg-green-300 rounded text-sm sm:text-base"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 text-sm sm:text-base">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-2">
                      <button
                        className="text-sm sm:text-base text-gray-500 text-base hover:text-brand"
                        onClick={() => handleRemove(item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coupon Code and Total Bill */}
        <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-white p-4 sm:p-6 border rounded shadow">
            <h2 className="font-bold text-base sm:text-lg mb-4">Coupon Code</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="p-2 border rounded w-full"
              />
              <button className="bg-brand text-white px-4 py-2 text-sm sm:text-base rounded">
                Apply
              </button>
            </div>
          </div>
          <div className="flex-1 bg-white p-4 sm:p-6 border rounded shadow">
            <h2 className="font-bold text-base sm:text-lg mb-4">Total Bill</h2>
            <div className="text-sm sm:text-base">
              <p className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>${calculateTotal()}</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping Charge</span>
                <span>$0.00</span>
              </p>
              <p className="flex justify-between font-bold">
                <span>Total Amount</span>
                <span>${calculateTotal()}</span>
              </p>
            </div>
            <button className="bg-brand text-white w-full py-2 mt-4 rounded text-sm sm:text-base">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
