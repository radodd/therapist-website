import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { footerConnections } from "@/constants";
import Button from "../components/Button";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-primary px-[70px] py-6">
        <nav className="flex justify-center">
          {/* condition render for normal screen size  */}
          <div className="max-tablet:hidden flex justify-between text-white w-full">
            <div className="flex items-center gap-14 text-base">
              <div className="flex items-center text-[40px] gap-5">
                <Link href="/" className="">
                  <Image
                    src="logo.svg"
                    alt="Gen fulton website logo"
                    width={87.44}
                    height={47.16}
                  />
                </Link>
                <h2>Gen Fulton</h2>
              </div>
              <div className="flex flex-col gap-3">
                {footerLinks.map((item) => (
                  <ul key={item.name}>
                    <p>{item.name}</p>
                  </ul>
                ))}
              </div>
            </div>
            <div className="text-white flex flex-col justify-center items-end gap-3">
              <h3>Gen Fulton Psychotherapy</h3>
              {footerConnections.map((item) => (
                <div key={item.name} className="flex gap-2">
                  <img src={item.icon} alt={`${item.name} icon`} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditional render for mobile screen  */}
          <div className="tablet:hidden ">
            <div className="flex flex-1 justify-around lg:gap-10 gap-10 flex-wrap text-white">
              <Link href="/" className="flex items-center">
                <Image
                  src="/favicon.ico"
                  alt="Gen Fulton website logo"
                  width={87.44}
                  height={47.16}
                />
              </Link>
              <div className="flex flex-col gap-1">
                {footerLinks.map((item) => (
                  <ul key={item.name}>{item.name}</ul>
                ))}
              </div>
            </div>
            <div className="text-white mt-5 flex flex-col justify-center items-center gap-2 w-max">
              <h3>Gen Fulton Psychotherapy</h3>
              {footerConnections.map((item) => (
                <div key={item.name} className="flex gap-2">
                  <img src={item.icon} alt={`${item.name} icon`} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;