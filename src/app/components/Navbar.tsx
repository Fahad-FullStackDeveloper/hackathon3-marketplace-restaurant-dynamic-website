"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MagnifyingGlass, User, Tote, X, List } from "@phosphor-icons/react"; // Importing icons from Phosphor Icons
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-base py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-base-contrast">
          <span className="text-base-contrast">Food</span>
          <span className="text-brand">tuck</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-base-contrast focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-6 absolute lg:relative left-0 right-0 top-full lg:top-auto bg-base lg:bg-transparent z-50 p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ${
            isMenuOpen ? "flex flex-col space-y-2" : "hidden"
          }`}
        >
          <li className="relative">
            <Link
              href="/"
              className="text-base-contrast hover:text-brand block py-2 lg:py-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Menu"
              className="text-base-contrast hover:text-brand block py-2 lg:py-0"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/Blog"
              className="text-base-contrast hover:text-brand block py-2 lg:py-0"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/Pages"
              className="flex items-center text-base-contrast hover:text-brand py-2 lg:py-0"
            >
              <DropdownMenu>
                <DropdownMenuTrigger>Pages</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="hover:bg-amber-200">
                    Open Pages
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  {/* Chefs Link */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/Chefs"
                      className="block w-full text-brand text-xs"
                    >
                      Our Chefs
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  {/* Error Link */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/Error"
                      className="block w-full text-brand text-xs"
                    >
                      404 Error
                    </Link>
                  </DropdownMenuItem>

                  {/* FAQ Link */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/FAQ"
                      className="block w-full text-brand text-xs"
                    >
                      FAQ
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  {/* SignIn Link */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/SignIn"
                      className="block w-full text-brand text-xs"
                    >
                      SignIn
                    </Link>
                  </DropdownMenuItem>

                  {/* SignUp Link */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/SignUp"
                      className="block w-full text-brand text-xs"
                    >
                      SignUp
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  {/* Subscription Link */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/subscription"
                      className="block w-full text-brand text-xs"
                    >
                      Subscription (coming soon)
                    </Link>
                  </DropdownMenuItem>
                  {/* Developer Link */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/Developer"
                      className="block w-full text-brand text-xs"
                    >
                      About Developer
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dropdown Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#fafafa"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className=" text-base-contrast hover:text-brand block py-2 lg:py-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Shop"
              className="text-base-contrast hover:text-brand block py-2 lg:py-0"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-base-contrast hover:text-brand block py-2 lg:py-0"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/search" className="text-base-contrast hover:text-brand">
            <MagnifyingGlass size={24} />
          </Link>
          <Link href="/SignIn" className="text-base-contrast hover:text-brand">
            <User size={24} />
          </Link>
          <Link href="/ShoppingCart" className="text-base-contrast hover:text-brand">
            <Tote size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
