import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] ">
      <div className="border-blue-500 border-2 get-app">
        <div className="border-white border-2 z-20 w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="border-white border-2 bold-40 pb-2 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10 pb-2">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Download App"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="border-white border-2 flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
