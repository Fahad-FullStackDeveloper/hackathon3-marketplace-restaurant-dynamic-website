"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  weight: string;
}

const checkout = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<CartItem[]>([]);
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [deliveryDate, setDeliveryDate] = useState("");
  // const [deliveryTime, setDeliveryTime] = useState("");
  // const [orderNotes, setOrderNotes] = useState("");
  // const [paymentStatus, setPaymentStatus] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("");
  // const [address, setAddress] = useState("");
  // const [paymentDetails, setPaymentDetails] = useState("");
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState(false);
  // const [loading, setLoading] = useState(false); 
  // const [orderPlaced, setOrderPlaced] = useState(false);
  // const [paymentMethod, setPaymentMethod] = useState("");
  // const [address, setAddress] = useState("");
  // const [paymentDetails, setPaymentDetails] = useState("");
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState(false);

  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleAddToWishlist = (item: CartItem) => {
    setWishlistItems([...wishlistItems, item]);
    localStorage.setItem("wishlist", JSON.stringify([...wishlistItems, item]));
  };

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
              href="/ShoppingCart"
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
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div>
                  <p className="text-lg font-semibold text-black w-40">
                    {item.quantity} {item.name}
                  </p>
                  <p className="text-gray-600">{item.weight}</p>
                  <p className="font-semibold text-gray-800">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
              <button
                onClick={() => handleAddToWishlist(item)}
                className="text-blue-500"
              >
                Add to Wishlist
              </button>
            </div>
          ))}

          {/* Receipt Summary */}
          <div className="flex justify-between text-gray-800 mb-2">
            <p>Sub-Total</p>
            <p>
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between text-gray-800 mb-2">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between text-gray-800 mb-2">
            <p>Discount -25%</p>
            <p>
              ${" "}
              {(
                cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) * 0.25
              ).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between text-gray-800 mb-2">
            <p>Tax +30%</p>
            <p>
              ${" "}
              {(
                cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) * 0.3
              ).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between text-black font-semibold mb-4">
            <p>Total</p>
            <p>
              ${" "}
              {(
                cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) * 1.05
              ).toFixed(2)}
            </p>
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
    <select
      aria-label={label}
      className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      <option value="">Select Country</option>
      <option value="Pakistan">
        Pakistan
        <option value="">Select City</option>
        <option value="Karachi">Karachi</option>
        <option value="Faisalabad">Faisalabad</option>
        <option value="Gujranwala">Gujranwala</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Sindh">Sindh</option>
        <option value="Sialkot">Sialkot</option>
        <option value="Sukkur">Sukkur</option>
        <option value="Gujrat">Gujrat</option>
        <option value="Bahawalpur">Bahawalpur</option>
        <option value="Jhang">Jhang</option>
        <option value="Sheikhupura">Sheikhupura</option>
        <option value="Kasur">Kasur</option>
        <option value="Rahim Yar Khan">Rahim Yar Khan</option>
        <option value="Khanewal">Khanewal</option>
        <option value="Larkana">Larkana</option>
        <option value="Mardan">Mardan</option>
        <option value="Khuzdar">Khuzdar</option>
        <option value="Kohat">Kohat</option>
        <option value="Moroj">Moroj</option>
        <option value="Nawabshah">Nawabshah</option>
        <option value="Okara">Okara</option>
        <option value="Balochistan">Balochistan</option>
        <option value="Punjab">Punjab</option>
        <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
        <option value="Sindhupalcherry">Sindhupalcherry</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Kashmir">Kashmir</option>
        <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
        <option value="AJK">AJK</option>
        <option value="Islamabad Capital Territory">
          Islamabad Capital Territory
        </option>
        <option value="Bahawalpur">Bahawalpur</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Rawalpindi">Rawalpindi</option>
        <option value="Peshawar">Peshawar</option>
        <option value="Quetta">Quetta</option>
        <option value="Sargodha">Sargodha</option>
        <option value="Multan">Multan</option>
        <option value="Faisalabad">Faisalabad</option>
      </option>
      <option value="United States">
        United States
        <option value="">Select State</option>
        <option value="New York">New York</option>
        <option value="California">California</option>
        <option value="Texas">Texas</option>
        <option value="Florida">Florida</option>
        <option value="Ohio">Ohio</option>
        <option value="Illinois">Illinois</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Maryland">Maryland</option>
        <option value="Virginia">Virginia</option>
        <option value="North Carolina">North Carolina</option>
        <option value="Georgia">Georgia</option>
        <option value="Alabama">Alabama</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Indiana">Indiana</option>
        <option value="Michigan">Michigan</option>
        <option value="Ohio">Ohio</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="New Jersey">New Jersey</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Washington">Washington</option>
        <option value="Oregon">Oregon</option>
        <option value="Colorado">Colorado</option>
        <option value="Arizona">Arizona</option>
      </option>
    </select>
  </div>
);

// City Dropdown Component
const CityDropdown = ({ label }: { label: string }) => (
  <div className="mb-4">
    <label className="block text-black font-semibold mb-2">{label}</label>
    <select
      aria-label={label}
      className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      <option value="">Select City</option>
      <option value="Karachi">Karachi</option>
      <option value="Lahore">Lahore</option>
      <option value="Islamabad">Islamabad</option>
      <option value="Rawalpindi">Rawalpindi</option>
      <option value="Peshawar">Peshawar</option>
      <option value="Quetta">Quetta</option>
      <option value="Multan">Multan</option>
      <option value="Faisalabad">Faisalabad</option>
    </select>
  </div>
);

export default checkout;
