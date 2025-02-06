import React from "react";
import { Header } from "./components/Header";
import HomeNavbar from "./components/homeNavbar";
import MainRecipe from "./Home/Main";
import AboutUsSection from "./Home/AboutSection";
import FoodCategory from "./Home/FoodCategory";
import WhyChooseUs from "./Home/WhyChooseUs";
import Achivements from "./Home/OurAchivement";
import ChooseAndPick from "./Home/ChooseAndPick";
import MetOurChefs from "./Home/MeetOurChefs";
import Testimonial from "./Home/Testimonials";
import RestaurantActiveProcess from "./Home/RestaurantActiveProcess";
import BlogPost from "./Home/BlogPost";

const page = () => {
  return (
    <div className="bg-base text-white">
      <Header />
      <HomeNavbar />
      <MainRecipe />
      <AboutUsSection />
      <FoodCategory />
      <WhyChooseUs />
      <Achivements />
      <ChooseAndPick />
      <MetOurChefs />
      <Testimonial />
      <RestaurantActiveProcess />
      <BlogPost />
    </div>
  );
};

export default page;