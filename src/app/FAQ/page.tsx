"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const FAQPage = () => {
  // State for toggling questions
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((q) => q !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-gray-100 items-center px-4 py-8">
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
            <span className="text-brand">FAQ</span>
            <span className="text-white"> Page</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">faq</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      {/* FAQ Section */}
      <div className="container mx-auto max-w-7xl w-full bg-white flex flex-col shadow-lg rounded-lg p-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Questions Look Here
          </h2>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the...
          </p>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          {/* Left Column */}
          <div>
            <FAQItem
              index={0}
              question="How we serve food?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
              openQuestions={openQuestions}
              toggleQuestion={toggleQuestion}
            />
            <FAQItem
              index={1}
              question="How is our food quality?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
              openQuestions={openQuestions}
              toggleQuestion={toggleQuestion}
            />
            <FAQItem
              index={2}
              question="How do we give home delivery?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
              openQuestions={openQuestions}
              toggleQuestion={toggleQuestion}
            />
          </div>

          {/* Right Column */}
          <div>
            <FAQItem
              index={3}
              question="How do we get in touch with you?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
              openQuestions={openQuestions}
              toggleQuestion={toggleQuestion}
            />
            <FAQItem
              index={4}
              question="What will be delivered? And When?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
              openQuestions={openQuestions}
              toggleQuestion={toggleQuestion}
            />
            <FAQItem
              index={5}
              question="Is this restaurant 24 hours open?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
              openQuestions={openQuestions}
              toggleQuestion={toggleQuestion}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Item Component
const FAQItem = ({
  index,
  question,
  answer,
  openQuestions,
  toggleQuestion,
}: {
  index: number;
  question: string;
  answer: string;
  openQuestions: number[];
  toggleQuestion: (index: number) => void;
}) => {
  const isOpen = openQuestions.includes(index);

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center bg-orange-200 p-4 rounded-lg cursor-pointer"
        onClick={() => toggleQuestion(index)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-xl font-bold">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="mt-2 bg-orange-50 text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQPage;
