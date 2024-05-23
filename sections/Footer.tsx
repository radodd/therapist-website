"use client";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

import Button from "../components/Button";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center w-full bg-primary px-[70px] py-6 max-mobileplus:px-3">
        {/* condition render for normal screen size  */}
        <div className="max-small:hidden flex justify-between text-white w-full ">
          <div className="flex items-center gap-10">
            <div className="flex items-center text-[40px] gap-4">
              <Link href="/" className="">
                <Image
                  src="/favicon.ico"
                  alt="Gen fulton website logo"
                  width={70}
                  height={70}
                />
              </Link>
              <h2>Gen Fulton</h2>
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-1">
              {footerLinks.map((item, index) => (
                <ul key={item.name} className="">
                  <li className={index > 2 ? "justify-self-center" : ""}>
                    {index > 2 ? (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-10"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link href={item.href}>{item.name}</Link>
                    )}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="text-white flex flex-col justify-center items-end gap-2">
            <h3>Gen Fulton Consultancy</h3>

            <Link href="tel:+14155792187">
              <div className="flex gap-2 aspect-3/4">
                <Image
                  src="/footer/whatsapp.png"
                  alt="Gen Fulton's WhatsApp phone number"
                  width={24}
                  height={24}
                />
                <span>+1 (415) 579-2187</span>
              </div>
            </Link>

            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/gen-fulton-lmft-sep-96a38566/"
                target="_blank"
              >
                <Image
                  src="/footer/linkedin.png"
                  alt="Gen Fulton's LinkedIn"
                  width={18}
                  height={17}
                />
              </Link>
              <Link
                href="https://www.instagram.com/genfultonconsultancy/"
                target="_blank"
              >
                <Image
                  src="/footer/instagram.png"
                  alt="Gen Fulton's Instagram"
                  width={18}
                  height={17}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Conditional render for mobile screen  */}
        <div className="small:hidden justify-center items-center place-content-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex  gap-6 flex-wrap text-white">
              <Link href="/" className="flex items-center">
                <Image
                  src="/favicon.ico"
                  alt="Gen Fulton website logo"
                  width={70}
                  height={70}
                />
              </Link>
              <div className="grid grid-rows-3 grid-flow-col gap-1 pb-6">
                {footerLinks.map((item, index) => (
                  <ul key={item.name}>
                    <li
                      className={`${
                        index <= footerLinks.length - 3 ? "" : "hidden"
                      }`}
                    >
                      {index > 2 ? (
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pl-10 max-mobileplus:pl-3"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Link href={item.href}>{item.name}</Link>
                      )}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="text-white flex flex-col justify-center items-center gap-2">
              <h3>Gen Fulton Consultancy</h3>
              <Link href="tel:+14155792187">
                <div className="flex gap-2 aspect-3/4">
                  <Image
                    src="/footer/whatsapp.png"
                    alt="Gen Fulton's WhatsApp phone number"
                    width={24}
                    height={24}
                  />
                  <span>+1 (415) 579-2187</span>
                </div>
              </Link>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/in/gen-fulton-lmft-sep-96a38566/"
                  target="_blank"
                >
                  <Image
                    src="/footer/linkedin.png"
                    alt="Gen Fulton's LinkedIn"
                    width={18}
                    height={17}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/genfultonconsultancy/"
                  target="_blank"
                >
                  <Image
                    src="/footer/instagram.png"
                    alt="Gen Fulton's Instagram"
                    width={18}
                    height={17}
                  />
                </Link>
              </div>
              <div>
                <Link href="/docs/Privacy Policy.pdf" target="_blank">
                  <span>Privacy Policy | </span>
                </Link>
                <Link href="/docs/Disclaimer.pdf" target="_blank">
                  <span>Disclaimer</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
