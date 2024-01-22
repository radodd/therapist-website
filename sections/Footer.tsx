"use client";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { footerConnections } from "@/constants";
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
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-10"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="text-white flex flex-col justify-center items-end gap-3">
            <h3>Gen Fulton Consultancy</h3>
            {footerConnections.map((item) => (
              <div key={item.name} className="flex gap-2">
                <img src={item.icon} alt={`${item.name} icon`} />
                <Link
                  href={item.href}
                  target="_blank"
                  className="curser-pointer hover:text-slate-300"
                >
                  {item.name}
                </Link>
              </div>
            ))}
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
              <div className="grid grid-rows-3 grid-flow-col gap-1">
                {footerLinks.map((item, index) => (
                  <ul key={item.name}>
                    <li>
                      {index > 2 ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pl-10 max-mobileplus:pl-3"
                        >
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="text-white mt-5 flex flex-col justify-center items-center gap-2 w-max">
              <h3>Gen Fulton Consultancy</h3>
              {footerConnections.map((item, index) => (
                <div key={item.name} className="flex gap-2">
                  <img src={item.icon} alt={`${item.name} icon`} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
