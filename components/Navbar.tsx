"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const DropdownMenu = () => (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-full w-full bg-white border border-gray-300 shadow-md py-2 z-10 lg:hidden"
    >
      {navLinks.map((item, index) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            className={`block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 ${
              index === navLinks.length - 1 ? "btn-pink" : ""
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </motion.ul>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-8 py-8 w-full bg-secondary"
    >
      <nav className="flex justify-between items-center max-container padding-container relative">
        <Link href="/" className="flex items-center">
          <Image
            src="/favicon.ico"
            alt="Gen Fulton website logo"
            width={87.44}
            height={47.16}
          />
          <span className="flex ml-2 text-white text-lg max-tablet:hidden">
            Gen Fulton
          </span>
        </Link>

        {/* Navigation links for large screens */}
        <ul className="flex-1 flex justify-end items-center h-full gap-12 max-navscreen:hidden ">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={link.key}
              target="_blank"
              className={`${
                index === navLinks.length - 1
                  ? "btn-primary"
                  : " text-white flexCenter cursor-pointer transition-all hover:font-bold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Hamburger menu for small screens */}
        <div className="navscreen:hidden">
          <div
            className="inline-block cursor-pointer mx-8 max-tablet:mx-0"
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
            }}
          >
            <Image src="/hamburger.svg" alt="menu" width={32} height={32} />
          </div>
        </div>

        {/* Conditionally render Dropdown menu for small screens */}
        <AnimatePresence>{dropdownOpen && <DropdownMenu />}</AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
