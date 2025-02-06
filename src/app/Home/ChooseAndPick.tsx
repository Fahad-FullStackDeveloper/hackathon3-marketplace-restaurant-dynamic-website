import React from "react";
import Image from "next/image";

const ChooseAndPick = () => {
  return (
    <>
      <section className="py-6 pb-10">
        <div className="container mx-auto px-4">
          {/* Top Text Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl text-brand mb-4 font-greatvibes">Choose & pick</h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-white mb-8">
              <span className="text-brand">Fr</span>om Our Menu
            </h3>

            {/* Navbar Links */}
            <nav className="flex flex-wrap justify-center gap-20 text-white text-lg mb-16">
              <a href="#breakfast" className="text-brand hover:text-brand-light transition-colors">
                Breakfast
              </a>
              <a href="#lunch" className="hover:text-brand transition-colors">
                Lunch
              </a>
              <a href="#dinner" className="hover:text-brand transition-colors">
                Dinner
              </a>
              <a href="#dessert" className="hover:text-brand transition-colors">
                Dessert
              </a>
              <a href="#drink" className="hover:text-brand transition-colors">
                Drink
              </a>
              <a href="#snack" className="hover:text-brand transition-colors">
                Snack
              </a>
              <a href="#soups" className="hover:text-brand transition-colors">
                Soups
              </a>
            </nav>
          </div>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left Section: Single Image */}
            <div className="lg:w-2/5 flex justify-center items-center">
              <Image
                src="/images/dish14.png"
                alt="Featured Dish"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right Section: Grid of Cards */}
            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Recent Posts Section */}
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-gray-0 rounded-lg shadow">
                  <Image
                    src={`/images/dish${i + 1}.png`}
                    alt={`Dish ${i + 1}`}
                    width={100}
                    height={100}
                    className="object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg text-white font-medium">Dish {i + 1} - Delicious Meal</p>
                    <span className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur elit.</span>
                    <p className="text-brand text-lg">Price: $ {10.5+i + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseAndPick;
