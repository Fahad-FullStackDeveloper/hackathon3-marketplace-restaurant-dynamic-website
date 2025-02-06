"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-base py-4 shadow-md relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-base-contrast hover:text-brand"
          >
            <Menu size={24} />
            Menu
          </button>
        </div>

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
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 bg-brand rounded-full w-2 h-2"></div>
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

        {/* Search Bar and Shopping Icon */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-5 pr-16 py-4 rounded-full border-2 border-brand bg-base text-base-contrast placeholder-base-contrast focus:outline-none"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-contrast cursor-pointer hover:text-brand"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              id="search"
              fill="none"
            >
              <path
                d="M21 20l-5.2-5.2a7.9 7.9 0 1 0-1.4 1.4L19 20h2zM10 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="">
            {/* Handbag Icon */}
            <Link href="/ShoppingCart">
              <svg
                className="transition duration-300 cursor-pointer hover:text-brand"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#ffffff"
                id="handbag"
                viewBox="0 0 256 256"
              >
                <path d="M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32ZM32,200,46.33,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h33.75l14.17,120Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
