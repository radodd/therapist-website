"use client";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

const Consult = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 394px)").matches);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  // const handleClick = () => {
  //   router.push("https://calendly.com/genfultonconsultancy/");
  // };

  // Navigation function
  const handleClick = () => {
    window.open("https://calendly.com/genfultonconsultancy/", "_blank");
  };
  return (
    <section
      id="contact"
      className="z-10 object-cover h-full w-full consult-bg-style max-tablet:px-10"
    >
      <div className="bg-consult-bg-color py-10 px-[70px] ">
        <div className="flex gap-8 flex-col justify-center items-center text-center text-white">
          <h1 className="font-normal text-xl max-mobile:text-center">
            Ready to take the next step?
          </h1>
          <p className="font-normal text-md">
            Request a free 30 minute Consultation.
          </p>
          <Button
            type="button"
            title={`Schedule a Free ${isMobile ? "Consult" : "Consult"}`}
            variant="btn-primary"
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Consult;
