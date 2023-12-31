"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

type ExpertiseCardProps = {
  title: string;
  icon: string;
  description: string;
  expanded: string;
};

const ExpertiseCard = ({
  title,
  icon,
  description,
  expanded,
}: ExpertiseCardProps) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="flex flex-col gap-6 justify-center items-center text-[#000409]  max-mobile:w-[264px]">
      <img src={icon} alt="icon" width={186} height={186} />
      <h2 className="text-lg text-primary font-semibold justify-center text-center tracking-[-1.5px]">
        {title}
      </h2>
      <p className="justify-center text-center text-sm font-normal">
        {description}
      </p>

      {/* ONLY See More Content */}
      <p
        className={`justify-center text-center text-sm font-normal long-text  ${
          collapse ? "expanded" : "hidden"
        }`}
      >
        {expanded}
      </p>
      <div className="">
        <Button
          type="button"
          title={collapse ? "See Less" : "See More"}
          variant="btn-card"
          onClick={() => setCollapse((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default ExpertiseCard;
