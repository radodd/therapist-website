import Carousel from "@/components/Carousel";
import { reviews } from "@/constants";

const Reviews = ({ ...reviews }) => {
  return (
    <section className="flex justify-center items-center py-10 ">
      <div className="flex justify-center items-center">
        <Carousel text={reviews.text} slideIndex={0} />
      </div>
    </section>
  );
};

export default Reviews;
// className="flex flex-col justify-center items-center gap-6
