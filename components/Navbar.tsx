"use client";

import { navLinks } from "@/constants";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const DropdownMenu = () => (
    <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-md py-2">
      {navLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="padding-x py-8  z-10 w-full bg-navy-blue">
      <nav className="border-2 border-red-500 flex justify-between items-center max-container padding-container">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="logo" width={74} height={29} />
          <span className="flex ml-2 text-white text-4xl font-montserrat">
            Gen Fulton
          </span>
        </Link>

        {/* Navigation links for large screens */}

        <ul className="flex-1 flex justify-end items-center h-full gap-12 lg:flex max-lg:hidden font-montserrat">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={link.key}
              // className="border-2 border-red-800 regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              className={`${
                index === navLinks.length - 1
                  ? "btn-pink"
                  : " text-white flexCenter cursor-pointer transition-all hover:font-bold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Hamburger menu for small screens */}
        <div className="lg:hidden">
          <Image
            src="hamburger.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
        </div>

        {/* Conditionally render Dropdown menu for small screens */}
        {dropdownOpen && <DropdownMenu />}
      </nav>
    </header>
  );
};

export default Navbar;
