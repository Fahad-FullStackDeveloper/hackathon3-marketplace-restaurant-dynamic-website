"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { IoPlayOutline } from "react-icons/io5";
import Rating from "../components/Rating";

const AboutPage = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      personImage: "/images/testimonials_person.png",
      flowerImage: "/images/testimonials_flower.png",
      Quotes: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#ff9f0d"
          viewBox="0 0 256 256"
        >
          <path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"></path>
        </svg>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dolor vitae justo gravida cursus.",
      rating: 5,
    },
    {
      personImage: "/images/testimonials_person.png",
      flowerImage: "/images/testimonials_flower.png",
      Quotes: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#ff9f0d"
          viewBox="0 0 256 256"
        >
          <path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"></path>
        </svg>
      ),
      text: "Suspendisse potenti. Ut vehicula justo eget justo malesuada pharetra.",
      rating: 4,
    },
    {
      personImage: "/images/testimonials_person.png",
      flowerImage: "/images/testimonials_flower.png",
      Quotes: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#ff9f0d"
          viewBox="0 0 256 256"
        >
          <path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"></path>
        </svg>
      ),
      text: "Cras sed libero non est cursus pellentesque sit amet eu eros.",
      rating: 4,
    },
    {
      personImage: "/images/testimonials_person.png",
      flowerImage: "/images/testimonials_flower.png",
      Quotes: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#ff9f0d"
          viewBox="0 0 256 256"
        >
          <path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"></path>
        </svg>
      ),
      text: "Pellentesque quis sapien a arcu volutpat luctus.",
      rating: 5,
    },
  ];
  const handleReviewChange = (index: number) => {
    setCurrentReview(index);
  };
  const menuItems = [
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "$32.00",
    },
    {
      name: "Berries and Creme Tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "$43.00",
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "$14.00",
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "$35.00",
    },
    {
      name: "Grilled Herb Chicken",
      description: "Served with roasted vegetables and creamy sauce",
      calories: "650 CAL",
      price: "$28.00",
    },
    {
      name: "Lobster Bisque Soup",
      description: "Rich and creamy soup with chunks of fresh lobster",
      calories: "450 CAL",
      price: "$25.00",
    },
    {
      name: "Vegan Avocado Salad",
      description: "Mixed greens, ripe avocados, and citrus vinaigrette",
      calories: "320 CAL",
      price: "$18.00",
    },
    {
      name: "Classic Margherita Pizza",
      description: "Fresh basil, mozzarella, and tomatoes on a crispy crust",
      calories: "900 CAL",
      price: "$22.00",
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
            <span className="text-brand">About</span>
            <span className="text-white"> Us</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">About</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      <div className="container mx-auto p-8">
        {/* Frist Section: Content and Buttons */}
        <section className="text-white body-font">
          <div className="container mx-auto flex px-5 py-24">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
              <Image
                className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
                alt="hero"
                src="/images/about-img1.png"
                width={309}
                height={536}
              />
            </div>
            {/* Right Images */}
            <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
              <Image
                className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
                alt="image2"
                src="/images/about-img2.png"
                width={309}
                height={271}
              />
              {/* Bottom Image */}
              <Image
                className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
                alt="image3"
                src="/images/about-img3.png"
                width={309}
                height={382}
              />
            </div>
            {/* Text Content and Buttons */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-28">
              <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
                About us _____
              </h1>
              <p className="text-gray-800 title-font text-6xl font-bold">
                Food is an important part of a balanced Diet
              </p>
              <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit
                eu velit in consequat.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                  Show More
                </button>
                <button className="ml-4 inline-flex text-black  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                  <IoPlayOutline className="mr-2 block" />{" "}
                  {/* Icon on the left */}
                  Watch video
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <div className="mb-8 text-gray-800">
          <h2 className="font-bold text-6xl text-center mt-20 mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-lg ml-96 mr-96 mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            src="/images/BG_Why Choose Us.png"
            alt="Why Choose Us"
            width={1320}
            height={386}
            className="mx-auto mb-4 block w-full"
          ></Image>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="#1f2937"
                viewBox="0 0 256 256"
                className="h-mx-auto mb-10"
              >
                <path d="M225.27,60.21l-96-32a4,4,0,0,0-2.54,0l-96,32A4,4,0,0,0,28,64v80a4,4,0,0,0,8,0V69.55L79.88,84.18a60,60,0,0,0,24.54,91c-20.86,5.74-39,19.13-51.77,38.65a4,4,0,0,0,6.7,4.36C75.17,193.92,100.2,180,128,180s52.83,13.92,68.65,38.18a4,4,0,0,0,6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60,60,0,0,0,24.54-91l49.15-16.39a4,4,0,0,0,0-7.58ZM180,120A52,52,0,1,1,87.93,86.86l38.8,12.93a3.95,3.95,0,0,0,2.54,0l38.8-12.93A51.85,51.85,0,0,1,180,120ZM128,91.78,44.65,64,128,36.22,211.35,64Z"></path>
              </svg>
              <h3 className="text-2xl mb-5 font-bold">Best Chef</h3>
              <p className="text-sm pl-10 pr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
            <div className="flex flex-col items-center mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="#1f2937"
                viewBox="0 0 256 256"
                className="h-mx-auto mb-10"
              >
                <path d="M84,56V24a4,4,0,0,1,8,0V56a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,120,60Zm32,0a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,152,60Zm92,60v8a36,36,0,0,1-36,36h-.41a92.53,92.53,0,0,1-35.76,48H208a4,4,0,0,1,0,8H32a4,4,0,0,1,0-8H68.17A92.34,92.34,0,0,1,28,136V88a4,4,0,0,1,4-4H208A36,36,0,0,1,244,120Zm-40,16V92H36v44a84.28,84.28,0,0,0,48.21,76h71.58A84.28,84.28,0,0,0,204,136Zm32-16a28,28,0,0,0-24-27.71V136a91.75,91.75,0,0,1-2.2,19.94A28,28,0,0,0,236,128Z"></path>
              </svg>
              <h3 className="text-2xl mb-5 font-bold">120 Food Items</h3>
              <p className="text-sm pl-10 pr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
            <div className="flex flex-col items-center mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="#1f2937"
                viewBox="0 0 256 256"
                className="h-mx-auto mb-10"
              >
                <path d="M128,68a28,28,0,1,0-28-28A28,28,0,0,0,128,68Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,128,20Zm87.42,116.78-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,138.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,176l29.58,51a16,16,0,0,0,29.08-13.35L167,138.7l25.9,20.77a16,16,0,0,0,22.56-22.69Zm-5.76,16.87a8,8,0,0,1-11.31,0,3.11,3.11,0,0,0-.33-.29l-35.51-28.48a4,4,0,0,0-6.38,4.13L179,215.94a4.12,4.12,0,0,0,.24.67,8,8,0,1,1-14.5,6.76c-.05-.11-.11-.21-.17-.32L131.46,166a4,4,0,0,0-6.92,0L91.42,223.05c-.06.11-.12.21-.17.32a8,8,0,1,1-14.5-6.76,4.12,4.12,0,0,0,.24-.67L99.87,129a4,4,0,0,0-6.38-4.13L58,153.36a3.11,3.11,0,0,0-.33.29,8,8,0,0,1-11.31-11.31l.17-.18L91.83,90.77a20,20,0,0,1,15-6.77h42.34a20,20,0,0,1,15,6.77l45.32,51.39.17.18A8,8,0,0,1,209.66,153.65Z"></path>
              </svg>
              <h3 className="text-2xl mb-5 font-bold">Clean Environment</h3>
              <p className="text-sm pl-10 pr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Image Section */}
        <div className="relative mb-8 w-full h-80">
          <Image
            src="/images/BG_TeamMember.png"
            alt="Full Width Image"
            width={1920}
            height={800}
            className="w-full object-cover rounded -z-10"
          />
          {/* Text for Team Member */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-contrast mb-20">
            <h1 className="text-3xl font-bold">Team Member</h1>
            <p className="text-sm font-semibold text-center wrap ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative -mt-44 pl-24 pr-24">
          {/* First Image */}
          <div className="relative group">
            <Image
              src="/images/TeamMembers.png"
              alt="Mark Henry Owner"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg duration-300 transform hover:scale-105 translate-y-16 sm:translate-y-20 lg:translate-y-0"
            />
            <div className="absolute inset-x-0 -bottom-4 bg-white text-center p-2 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">Mark Henry</h3>
              <p className="text-sm text-gray-500">Owner</p>
            </div>
          </div>

          {/* Second Image */}
          <div className="relative group">
            <Image
              src="/images/TeamMembers.png"
              alt="Moon Henry Founder"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg duration-300 transform hover:scale-105 translate-y-16 sm:translate-y-20 lg:translate-y-0"
            />
            <div className="absolute inset-x-0 -bottom-4 bg-white text-center p-2 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">Moon Henry</h3>
              <p className="text-sm text-gray-500">Founder</p>
            </div>
          </div>

          {/* Third Image */}
          <div className="relative group">
            <Image
              src="/images/TeamMembers.png"
              alt="Lucky Helen Chef"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg duration-300 transform hover:scale-105 translate-y-16 sm:translate-y-20 lg:translate-y-0"
            />
            <div className="absolute inset-x-0 -bottom-4 bg-white text-center p-2 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">Lucky Helen</h3>
              <p className="text-sm text-gray-500">Chef</p>
            </div>
          </div>

          {/* Fourth Image */}
          <div className="relative group">
            <Image
              src="/images/TeamMembers.png"
              alt="Tom Monrow Specialist"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-lg duration-300 transform hover:scale-105 translate-y-16 sm:translate-y-20 lg:translate-y-0"
            />
            <div className="absolute inset-x-0 -bottom-4 bg-white text-center p-2 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">Tom Monrow</h3>
              <p className="text-sm text-gray-500">Specialist</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center px-6 mt-40 mb-28">
          {/* Testimonials Heading */}
          <div className="mb-10">
            <h2 className="text-3xl text-brand mb-4 font-greatvibes">
              Testimonials
            </h2>
            <h3 className="text-5xl font-semibold font-Helvetica text-base-dark mb-20">
              <span className="text-brand">Wh</span>at our client are saying
            </h3>
          </div>

          {/* Review Cards */}
          <div className="relative bg-base-contrast p-6 rounded-md w-full max-w-5xl h-full max-h-5xl">
            {/* Person Image */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <Image
                className="object-cover rounded-full shadow-lg"
                src={reviews[currentReview].personImage}
                alt="Testimonials Person"
                width={100}
                height={100}
              />
            </div>

            {/* Flower Image */}
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 opacity-20">
              <Image
                className="object-cover rounded-md shadow-lg"
                src={reviews[currentReview].flowerImage}
                alt="Testimonials Flower"
                width={200}
                height={200}
              />
            </div>

            {/* Review Text */}
            <div className="text-center mt-16">
              <p className="text-md text-base font-Inter mb-4">
                {reviews[currentReview].text}
              </p>
            </div>
            {/* 5-Star Bottom Rating */}
            <div className="flex justify-center mt-6">
              <Rating maxStars={5} color="brand" size={24} currentRating={5} />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center mt-10 gap-4">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full cursor-pointer ${
                  currentReview === index ? "bg-brand-light" : "bg-brand-dark"
                }`}
                onClick={() => handleReviewChange(index)}
              ></div>
            ))}
          </div>
        </div>
        <div className="text-center mb-12 px-4 md:px-12 lg:px-24">
          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-base-dark mb-6 md:mb-8">
            Our Food Menu
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-center max-w-3xl mx-auto mb-10 md:mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          {/* Navbar Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 text-base-dark text-base sm:text-lg mb-10 md:mb-16">
            <a
              href="#breakfast"
              className="text-brand hover:text-brand-light hover:underline transition-colors"
            >
              Breakfast
            </a>
            <a
              href="#lunch"
              className="hover:text-brand hover:underline transition-colors"
            >
              Lunch
            </a>
            <a
              href="#dinner"
              className="hover:text-brand hover:underline transition-colors"
            >
              Dinner
            </a>
            <a
              href="#dessert"
              className="hover:text-brand hover:underline transition-colors"
            >
              Dessert
            </a>
            <a
              href="#drink"
              className="hover:text-brand hover:underline transition-colors"
            >
              Drink
            </a>
            <a
              href="#snack"
              className="hover:text-brand hover:underline transition-colors"
            >
              Snack
            </a>
            <a
              href="#soups"
              className="hover:text-brand hover:underline transition-colors"
            >
              Soups
            </a>
          </nav>
        </div>
        <div className="bg-gray-50 py-0 px-4 sm:px-8 lg:px-16">
          <h2 className=" text-3xl font-bold text-center text-base-dark mb-8">
            Our Food Menu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:shadow-brand transition-shadow duration-300 border-b border-brand hover:border-brand-light"
              >
                <h3 className="text-lg font-semibold text-base-dark hover:text-brand transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                <p className="text-xs text-gray-500 mt-1">{item.calories}</p>
                <p className="text-brand font-bold mt-2">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mb-28">
          <Link href="./Menu">
            <button className="border-2 border-spacing-2 border-brand text-base-dark text-lg px-8 py-2 mt-10 hover:bg-brand hover:text-white transition duration-300">
              See More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
