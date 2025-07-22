"use client";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

import styles from "../app/scss/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <FooterLinks />
      <div className="text-white flex flex-col justify-center items-center gap-2">
        <ContactInfo />
        <SocialIcons />
        <div className={styles.docContainer}>
          <Link href="/docs/Privacy Policy.pdf" target="_blank">
            <span>Privacy Policy | </span>
          </Link>
          <Link href="/docs/Disclaimer.pdf" target="_blank">
            <span>Disclaimer</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = () => (
  <div className={styles.navLinks}>
    <Link href="/" className="flex items-center">
      <Image
        src="/favicon.ico"
        alt="Gen Fulton website logo"
        width={70}
        height={70}
      />
      <h2>Gen Fulton</h2>
    </Link>
    <div className="grid grid-rows-2 grid-flow-col gap-1 max-[1306px]:pb-6">
      {footerLinks.map((item, index) => {
        const isHidden = index >= footerLinks.length - 2;
        return (
          <ul key={index} className="flex">
            <li
              className={`flex  items-center ${
                isHidden ? "hidden min-[1306px]:flex" : ""
              }`}
            >
              {index > 3 ? (
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
        );
      })}
    </div>
  </div>
);
const ContactInfo = () => (
  <>
    <span>Gen Fulton Consultancy</span>
    <Link href="mailto:info@genfulton.com">
      <div className="flex gap-2 aspect-3/4">
        <Image
          src="/footer/email.svg"
          alt="Gen Fulton's email address"
          width={24}
          height={24}
        />
        <span>info@genfulton.com</span>{" "}
      </div>
    </Link>

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
  </>
);

const SocialIcons = () => (
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
);

export default Footer;
