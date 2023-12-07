"use client";

import { NAV_LINKS } from "@/constants";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5 bg-slate-300">
      <div className="border-2 border-purple-500 container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="logo" width={74} height={29} />
          <span className="ml-2 text-black text-4xl">Gen Fulton</span>
        </Link>

        {/* Hamburger menu for small screens */}
        <div className="lg:hidden">
          <button onClick={toggle} className="text-white focus:outline-none">
            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
              onClick={toggle}
            />
            {/* <svg
              className="h-6 w-6 inline-block cursor-pointer lg:hidden"
              width={32}
              height={32}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            > */}
            {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg> */}
          </button>
        </div>
        {/* Navigation links for large screens */}
        <div className="hidden lg:flex space-x-4">
          <ul className=" h-full gap-12 flex space-x-4 lg:flex">
            {NAV_LINKS.map((link, index) => (
              <Link
                href={link.href}
                key={link.key}
                // className="border-2 border-red-800 regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                className={`${
                  index === NAV_LINKS.length - 1
                    ? "btn_book_appointment"
                    : " regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        {/* Dropdown menu for small screens */}
        {navOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-gray-800">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggle}
                className="flex justify-center px-4 py-2 text-white hover:bg-gray-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
        {/* <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
