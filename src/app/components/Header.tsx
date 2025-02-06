"use client";
import React from "react";
import Link from "next/link";

// Header1 Component
export const Header = () => {
  return (
    <header className="text-base-contrast py-4">
      <div className="container mx-auto px-4 flex justify-center items-center mt-5">
        <Link href="#" className="text-2xl font-bold">
          <span className="text-brand">Food</span>
          <span className="text-base-contrast">tuck</span>
        </Link>
      </div>
    </header>
  );
};
