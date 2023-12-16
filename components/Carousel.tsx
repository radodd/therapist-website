"use client";
import { reviews } from "@/constants";
// import { reviews } from "@/constants";
// import Button from "./Button";
// import { useState } from "react";

// type ReviewProps = {
//   text: string[];
// };

// const Carousel = ({ text }: ReviewProps) => {
//   let [current, setCurrent] = useState();

//   let previousSlide = () => {
//     if (current === 0) setCurrent(text.length - 1);
//     else setCurrent(current - 10);
//   };

//   let nextSlide = () => {
//     if (current === tex) setCurrent(text.length - 1);
//     else setCurrent(current - 10);
//   };

//   return (
//     <div className="overflow-hidden relative">
//       <div className="flex transition ease-out duration-400">
//         {reviews.map((review, index) => (
//           <p key={index}>{review.text}</p>
//         ))}
//       </div>

//     </div>
//   );
// };
// export default Carousel;

// import React, { useState } from "react";
// import Button from "./Button";

// type CarouselProps = {
//   id: number;
//   text: string[];
// };

// const Carousel: React.FC<CarouselProps> = ({ text, id }) => {
//   const [current, setCurrent] = useState<number>(0);

//   const previousSlide = () => {
//     if (current === 0) setCurrent(reviews.length - 1);
//     else setCurrent(current - 1);
//   };

//   const nextSlide = () => {
//     if (current === reviews.length - 1) setCurrent(0);
//     else setCurrent(current + 1);
//   };

//   // Rest of your component logic

//   return (
//     <div className="overflow-hidden relative">
//       <div className="flex transition ease-out duration-400">
//         {reviews.map((review) => (
//           <div key={review.id} className="border-orange-700 border-2">
//             <p className="border-orange-400 border-2">{review.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-2xl">
//         <Button
//           type="button"
//           title=""
//           icon="arrow-left.svg"
//           onClick={() => previousSlide()}
//         />
//         <Button
//           type="button"
//           title=""
//           icon="arrow-right.svg"
//           onClick={() => nextSlide()}
//         />
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
import Button from "./Button";

type CarouselProps = {
  text: string[];
};

const Carousel: React.FC<CarouselProps> = ({ text }) => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-400"
        // style={{
        //   transform: `translateX(-${current * 100}%)`,
        // }}
      >
        {reviews.map((item, index) => (
          <p
            key={index}
            className={`border-orange-400 border-2 ${
              index === current ? "" : "hidden"
            }`}
          >
            {item.text}
          </p>
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-2xl">
        <Button
          type="button"
          title=""
          icon="arrow-left.svg"
          onClick={previousSlide}
        />
        <Button
          type="button"
          title=""
          icon="arrow-right.svg"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;
