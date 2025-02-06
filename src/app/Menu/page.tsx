"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Achievements from "../Home/OurAchivement";

const Menu = () => {
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
            <span className="text-white"> Menu</span>
            {/* Changed color to brand color #FF9F0D */}
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Menu</span>
            {/* Changed color to #FF9F0D */}
          </p>
        </div>
      </header>

      {/* This is the Menu Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
            {/* Dish Category Picture - Left */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <Image
                src="/images/1.Starter Menu.png"
                alt="Starter Menu"
                width={350}
                height={350}
                className="w-full md:w-auto h-auto object-cover mb-6 md:mb-0 md:mr-6"
              />

              <div className="w-full">
                {/* Starter Menu Title */}
                <h2 className="pl-10 text-3xl md:text-4xl font-bold text-gray-900 items-center mb-4">
                  <div className="flex pb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#ff9f0d"
                      viewBox="0 0 256 256"
                      className="mr-2"
                    >
                      <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#ff9f0d"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,112H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V216a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,120,8,8,0,0,0,224,112Zm-59.34,88a8,8,0,0,0-4.66,7.27V216H96v-8.71A8,8,0,0,0,91.34,200a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,200ZM81.77,55c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,88,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,88,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C70.37,74.81,73.38,65.43,81.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,128,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,128,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C110.37,74.81,113.38,65.43,121.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,168,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,168,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C150.37,74.81,153.38,65.43,161.77,55Z"></path>
                    </svg>
                  </div>
                  Starter Menu
                </h2>

                {/* Menu Items */}
                <div className="space-y-6">
                  {/* Menu Item */}
                  {[
                    {
                      name: "Alder Grilled Chinook Salmon",
                      description:
                        "Toasted French bread topped with romano, cheddar",
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
                      description:
                        "Spreadable cream cheese, crumbled blue cheese",
                      calories: "560 CAL",
                      price: "$35.00",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="pl-10 flex flex-col md:flex-row justify-between items-start md:items-center"
                    >
                      <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-400">{item.calories}</p>
                      </div>
                      <p className="text-xl font-bold text-brand md:ml-4">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full">
                {/* Main Course Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 items-center mb-4">
                  <div className="pb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#ff9f0d"
                      viewBox="0 0 256 256"
                    >
                      <path d="M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z"></path>
                    </svg>
                  </div>
                  Main Course
                </h2>

                {/* Menu Items */}
                <div className="space-y-6">
                  {/* Menu Item */}
                  {[
                    {
                      name: "Optic Big Breakfast Combo Menu",
                      description:
                        "Toasted French bread topped with romano, cheddar",
                      calories: "560 CAL",
                      price: "$32.00",
                    },
                    {
                      name: "Cashew Chicken With Stir-Fry",
                      description: "Gorgonzola, ricotta, mozzarella, taleggio",
                      calories: "700 CAL",
                      price: "$43.00",
                    },
                    {
                      name: " Vegetables & Green Salad",
                      description: "Ground cumin, avocados, peeled and cubed",
                      calories: "1000 CAL",
                      price: "$14.00",
                    },
                    {
                      name: "Spicy Vegan Potato Curry",
                      description:
                        "Spreadable cream cheese, crumbled blue cheese",
                      calories: "560 CAL",
                      price: "$35.00",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center"
                    >
                      <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-400">{item.calories}</p>
                      </div>
                      <p className="pr-20 text-xl font-bold text-brand md:ml-4">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Dish Category Picture - Right */}
              <Image
                src="/images/2.Main Course.png"
                alt="Main Course"
                width={350}
                height={350}
                className="w-full md:w-auto h-auto object-cover mb-6 md:mb-0 md:mr-6"
              />
            </div>
          </div>

          <Achievements />

          <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
            {/* Dish Category Picture - Left */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <Image
                src="/images/3.Dessert.png"
                alt="Starter Menu"
                width={350}
                height={350}
                className="w-full md:w-auto h-auto object-cover mb-6 md:mb-0 md:mr-6"
              />

              <div className="w-full">
                {/* Starter Menu Title */}
                <h2 className="pl-10 text-3xl md:text-4xl font-bold text-gray-900 items-center mb-4">
                  <div className="pb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#ff9f0d"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z"></path>
                    </svg>
                  </div>
                  Dessert
                </h2>

                {/* Menu Items */}
                <div className="space-y-6">
                  {/* Menu Item */}
                  {[
                    {
                      name: "Fig and lemon cake",
                      description:
                        "Toasted French bread topped with romano, cheddar",
                      calories: "560 CAL",
                      price: "$32.00",
                    },
                    {
                      name: "Creamy mascarpone cake",
                      description: "Gorgonzola, ricotta, mozzarella, taleggio",
                      calories: "700 CAL",
                      price: "$43.00",
                    },
                    {
                      name: "Pastry, blueberries, lemon juice",
                      description: "Ground cumin, avocados, peeled and cubed",
                      calories: "1000 CAL",
                      price: "$14.00",
                    },
                    {
                      name: "Pain au chocolaton",
                      description:
                        "Spreadable cream cheese, crumbled blue cheese",
                      calories: "560 CAL",
                      price: "$35.00",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="pl-10 flex flex-col md:flex-row justify-between items-start md:items-center"
                    >
                      <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-400">{item.calories}</p>
                      </div>
                      <p className="text-xl font-bold text-brand md:ml-4">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full">
                {/* Main Course Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 items-center mb-4">
                  <div className="pb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#ff9f0d"
                      viewBox="0 0 256 256"
                    >
                      <path d="M237.66,45.66A8,8,0,0,0,232,32H24a8,8,0,0,0-5.66,13.66L120,147.31V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.31ZM43.31,48H212.69l-16,16H59.31ZM128,132.69,75.31,80H180.69Z"></path>
                    </svg>
                  </div>
                  Drinks
                </h2>

                {/* Menu Items */}
                <div className="space-y-6">
                  {/* Menu Item */}
                  {[
                    {
                      name: "Caffè macchiato",
                      description:
                        "Toasted French bread topped with romano, cheddar",
                      calories: "560 CAL",
                      price: "$32.00",
                    },
                    {
                      name: "Aperol Spritz Capacianno",
                      description: "Gorgonzola, ricotta, mozzarella, taleggio",
                      calories: "700 CAL",
                      price: "$43.00",
                    },
                    {
                      name: "Caffe Latte Campuri",
                      description: "Ground cumin, avocados, peeled and cubed",
                      calories: "1000 CAL",
                      price: "$14.00",
                    },
                    {
                      name: "Tormentoso BushTea Pintoage",
                      description:
                        "Spreadable cream cheese, crumbled blue cheese",
                      calories: "560 CAL",
                      price: "$35.00",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center"
                    >
                      <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-400">{item.calories}</p>
                      </div>
                      <p className="pr-20 text-xl font-bold text-brand md:ml-4">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Dish Category Picture - Right */}
              <Image
                src="/images/4.Drinks.png"
                alt="Main Course"
                width={350}
                height={350}
                className="w-full md:w-auto h-auto object-cover mb-6 md:mb-0 md:mr-6"
              />
            </div>
          </div>
        </div>

        {/* Working Partners */}
        <div className="container mx-auto px-4 relative text-gray-800 z-10">
          <h2 className="flex justify-center text-lg mt-20 mb-4">
            Patners & Clients
          </h2>
          <h1 className="flex justify-center text-5xl font-bold pb-14">
            We work with the best pepole
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-center">
            {/* Image 1 */}
            <div>
              <Image
                src="/images/Partner1.png"
                alt="Professional Chefs"
                width={220}
                height={150}
                className="mx-auto mb-4"
                placeholder="empty"
              />
              <p className="text-xl font-semibold text-white">
                Professional Chefs
              </p>
              <p className="text-3xl font-bold text-white">420</p>
            </div>

            {/* Image 2 */}
            <div>
              <Image
                src="/images/Partner2.png"
                alt="Items of Food"
                width={160}
                height={150}
                className="mx-auto mb-4"
                placeholder="empty"
              />
              <p className="text-xl font-semibold text-white">Items of Food</p>
              <p className="text-3xl font-bold text-white">320</p>
            </div>

            {/* Image 3 */}
            <div>
              <Image
                src="/images/Partner3.png"
                alt="Years of Experience"
                width={150}
                height={150}
                className="mx-auto mb-4"
                placeholder="empty"
              />
              <p className="text-xl font-semibold text-white">
                Years of Experience
              </p>
              <p className="text-3xl font-bold text-white">30+</p>
            </div>

            {/* Image 4 */}
            <div>
              <Image
                src="/images/Partner4.png"
                alt="Happy Customers"
                width={140}
                height={150}
                className="mx-auto mb-4"
                placeholder="empty"
              />
              <p className="text-xl font-semibold text-white">
                Happy Customers
              </p>
              <p className="text-3xl font-bold text-white">1720</p>
            </div>

            {/* Image 5 */}
            <div>
              <Image
                src="/images/Partner5.png"
                alt="Happy Customers"
                width={170}
                height={150}
                className="mx-auto mb-4"
                placeholder="empty"
              />
              <p className="text-xl font-semibold text-white">
                Happy Customers
              </p>
              <p className="text-3xl font-bold text-white">1720</p>
            </div>

            {/* Image 6 */}
            <div>
              <Image
                src="/images/Partner6.png"
                alt="Happy Customers"
                width={120}
                height={150}
                className="mx-auto mb-4"
                placeholder="empty"
              />
              <p className="text-xl font-semibold text-white">
                Happy Customers
              </p>
              <p className="text-3xl font-bold text-white">1720</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
