"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Consult = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 394px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    window.open("https://calendly.com/genfultonconsultancy/", "_blank");
  };
  return (
    <section
      id="contact"
      className="z-10 object-cover h-full w-full consult-bg-style "
    >
      <div
        className="grid grid-cols-7 bg-consult-bg-color py-10 px-[70px] max-tablet:px-10
      max-[1000px]:flex
      max-[1000px]:flex-col"
      >
        <div
          className="flex col-start-1 col-span-2 justify-start items-center
        max-[1000px]:justify-center"
        >
          <Link href="https://marquiswhoswho.com/" target="_blank">
            <Image
              src="/badge.png"
              alt="professional certification"
              width={200}
              height={200}
              className="ml-[63px]
            max-[1000px]:ml-0
            max-[1000px]:pb-6"
            />
          </Link>
        </div>

        <div
          className="flex col-start-3 col-span-3 gap-8 flex-col justify-center items-center text-center text-white
        max-[1380px]:col-span-4
        max-[1100px]:col-span-5"
        >
          <h1 className="font-normal text-xl text-pretty max-mobile:text-center">
            Ready to take the next step?
          </h1>
          <p className="font-normal text-md text-pretty">
            Request a free 30{" "}
            <span className="max-consultsection:block">
              minute consultation.
            </span>
          </p>
          <Button
            type="button"
            title={`Schedule a  ${isMobile ? "Consult" : "Consult"}`}
            variant="btn-primary"
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Consult;
