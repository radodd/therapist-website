"use client";

import BlobLayer from "@/components/BlobLayer";
import Button from "@/components/Button";
import React from "react";

const Resources = () => {
  return (
    <div className="">
      <section className="p-10 relative z-20 h-full flex items-center flex-col w-full object-cover bg-primary">
        <BlobLayer />

        <h1 className="text-white pb-10 font-bold text-xl">Resources</h1>

        <div className="flex flex-row gap-5">
          <div className="bg-slate-200 rounded-lg h-[230px] w-[400px] flex justify-center items-center">
            Image
          </div>
          <div className="">
            <p className="text-white max-w-[500px]">
              My approach to therapy is collaborative to help you reduce stress
              and prevent burnout. I use motivational neuroscience to help you
              re-regulate your nervous system, build resilience, and perform
              with clarity in high-stakes situations. This process empowers you
              to navigate life’s uncertainties with greater ease, fostering
              hope, harmony and well-being.
            </p>
            <div className="pt-5 flex justify-end">
              <Button variant="btn-primary" title="Click Me" type="button" />
            </div>
          </div>
        </div>

        {/* START OF MAPPING */}
        <div className="pt-14 flex flex-row gap-5">
          <div className="bg-slate-200 rounded-lg h-[230px] w-[400px] flex justify-center items-center">
            Image
          </div>
          <div className="">
            <p className="text-white max-w-[500px]">
              My approach to therapy is collaborative to help you reduce stress
              and prevent burnout. I use motivational neuroscience to help you
              re-regulate your nervous system, build resilience, and perform
              with clarity in high-stakes situations. This process empowers you
              to navigate life’s uncertainties with greater ease, fostering
              hope, harmony and well-being.
            </p>
            <div className="pt-5 flex justify-end">
              <Button variant="btn-primary" title="Click Me" type="button" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
