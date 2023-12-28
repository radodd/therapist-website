import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <footer className="padding-x py-8 w-full bg-secondary">
        <nav className="border-2 border-red-500 flex justify-between items-center max-container padding-container max-small:top-0 ">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Gen Fulton website logo"
              width={87.44}
              height={47.16}
            />
            <span className="flex ml-2 text-white text-[40px]  max-[1130px]:hidden">
              Gen Fulton
            </span>
          </Link>

          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap text-white  max-small:gap-2">
            {footerLinks.map((section) => (
              <div key={section.title} className="px-10">
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-sm leading-normal hover:text-slate-gray cursor-pointer"
                    >
                      <a>{link.name} </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* <div className="container mx-auto flex flex-col mt-auto">
            <Button
              type="button"
              title="Schedule Consult"
              variant="btn-primary"
            />
          </div> */}
        </nav>
      </footer>
    </>
  );
};

export default Footer;
