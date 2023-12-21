import Carousel from "@/components/Carousel";
import { reviews } from "@/constants";

const Reviews = ({ ...reviews }) => {
  return (
    <section className="flex justify-center items-center py-10 ">
      <div className="flex flex-col justify-center items-center gap-6 ">
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
