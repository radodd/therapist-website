import Carousel from "@/components/Carousel";
import { reviews } from "@/constants";

const Reviews = ({ ...reviews }) => {
  return (
    <section className=" border-blue-400 border-2 flex justify-center items-center py-10 ">
      <div className=" border-purple-400 border-2 flex flex-col justify-center items-center gap-6 ">
        <img
          src="carousel-icon.svg"
          alt="carousel icon"
          className=" flex justify-center"
        />
        <Carousel text={reviews.text} />
      </div>
    </section>
  );
};

export default Reviews;
