import React from "react";

const Copyright = () => {
  return (
    <div
      className="flex flex-row ml-[80px] gap-2 py-2 text-[12px]
    max-tablet:justify-center
    max-tablet:ml-2"
    >
      <img src="/copyright.svg" height={18} width={18} />
      <p className="">2024 Gen Fulton Consultancy All Rights Reserved.</p>
    </div>
  );
};

export default Copyright;
