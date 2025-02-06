import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <section className="container mx-auto relative  py-6 mb-20">
      {/* Background Image */}
      <div className="absolute bg-base inset-0">
        <Image
          src="/images/Rectangle BG_Achivements.png"
          alt="Achievements Background"
          width={1837}
          height={468}
          className="w-screen h-full object-cover opacity-20 -z-10"
        />
      </div>

      {/* Achievements Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="flex justify-center text-4xl text-brand mb-10 font-greatvibes">
          Our Achivements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Image 1 */}
          <div>
            <Image
              src="/images/professional_chefs.png"
              alt="Professional Chefs"
              width={120}
              height={120}
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
              src="/images/items_of_food.png"
              alt="Items of Food"
              width={120}
              height={120}
              className="mx-auto mb-4"
              placeholder="empty"
            />
            <p className="text-xl font-semibold text-white">Items of Food</p>
            <p className="text-3xl font-bold text-white">320</p>
          </div>

          {/* Image 3 */}
          <div>
            <Image
              src="/images/years_of_experience.png"
              alt="Years of Experience"
              width={120}
              height={120}
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
              src="/images/happy_customers.png"
              alt="Happy Customers"
              width={120}
              height={120}
              className="mx-auto mb-4"
              placeholder="empty"
            />
            <p className="text-xl font-semibold text-white">Happy Customers</p>
            <p className="text-3xl font-bold text-white">1720</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
