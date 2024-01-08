"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants";
import Button from "../components/Button";
import "hamburgers/dist/hamburgers.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const DropdownMenu = () => (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-full w-screen left-0 text-center bg-primary border border-primary shadow-md rounded-b-2xl z-50 navscreen:hidden"
    >
      <div className="my-4 gap-3 max-mobile:my-6 max-mobile:gap-6">
        {navLinks.map((item, index) => (
          <li key={item.label} className="pb-3 last:pb-0">
            <a
              href={item.href}
              target={index !== navLinks.length - 1 ? "" : "_blank"}
              className={`block text-xm font-normal text-white hover:bg-secondary hover:font-bold ${
                index === navLinks.length - 1 ? "font-semibold" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </div>
    </motion.ul>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-8 py-8 w-full bg-primary relative"
    >
      <nav className="flex justify-between items-center max-container padding-container ">
        <Link href="/" className="flex items-center">
          <Image
            src="logo.svg"
            alt="Gen Fulton website logo"
            width={31}
            height={54}
          />
          <span className="flex ml-2 text-white text-xl max-tablet:hidden">
            Gen Fulton
          </span>
        </Link>

        {/* Navigation links for large screens */}
        <ul className="flex-1 flex justify-end items-center h-full gap-12 text-md max-navscreen:hidden ">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={link.key}
              target={`${index === navLinks.length - 1 ? "_blank" : ""}`}
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
            {/* <Image src="/hamburger.svg" alt="menu" width={32} height={32} /> */}

            <button
              className={`hamburger hamburger--collapse ${
                dropdownOpen ? "is-active" : ""
              } `}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Conditionally render Dropdown menu for small screens */}
        <AnimatePresence>{dropdownOpen && <DropdownMenu />}</AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
