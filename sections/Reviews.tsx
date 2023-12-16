import Carousel from "@/components/Carousel";
import { reviews } from "@/constants";

const Reviews = () => {
  return (
    <section>
      <div className="border-green-600 border-2 w-full overflow-hidden">
        <Carousel />
      </div>
    </section>
  );
};

export default Reviews;
