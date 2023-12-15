// import Image from "next/image";
// import React from "react";
// import Button from "./Button";

// const Banner = () => {
//   return (
//     <section className="border-blue-500 border-2 max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
//       {/* LEFT */}
//       <div className="border-orange-500 border-2 relative z-20  xl:w-1/2">
//         <div className="border-orange-800 border-2 flex flex-col max-w-[375px] ">
//           <h1 className="text-[64px]">Gen Fulton</h1>
//           <h2 className="text-[32px]">Coaching & Consulting</h2>
//           <p className="regular-16 mt-6 pb-6 text-gray-30 xl:max-w-[520px]">
//             Welcome to an oasis of therapeutic wisdom and eclectic
//             sophistication. Our website is a haven curated by a uniquely skilled
//             therapist, blending an array of therapeutic approaches to cater to
//             your individual journey with the utmost refinement and expertise."
//           </p>
//         </div>
//         <Button type="button" title="View Services" variant="btn_black" />
//       </div>
//     </section>
//   );
// };

// export default Banner;
import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <section
      id="banner"
      className="w-full flex flex-col justify-center gap-10 max-container border-2 border-red-500 p-2"
    >
      <div className="flex flex-col justify-start gap-[24px]">
        <h1 className="mt-24 font-montserrat text-xl font-normal text-white">
          Gen Fulton
        </h1>
        <h2 className="font-montserrat text-lg font-normal text-white">
          Coaching & Consulting
        </h2>
        <p className="font-montserrat text-base font-light text-white sm:max-w-3xl">
          Gen works with her clients based on where they are and what they hope
          to achieve rather than imposing an agenda on her clients. This
          holistic, person-centered approach has helped reduce intolerable and
          uncomfortable symptoms and increased insight, hope and harmony.
        </p>
        <div className="mb-[13px] font-extrabold">
          <Button type="button" full={false} title="View Services" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
