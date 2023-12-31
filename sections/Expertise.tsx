import { expertise } from "@/constants";
import ExpertiseCard from "@/components/ExpertiseCard";

const Expertise = () => {
  return (
    <section id="therapy" className="max-container flex flex-col">
      <h1 className="flex max-small:flex-col justify-center text-xl font-normal pb-10 text-primary text-center">
        Areas of&nbsp;
        <span className="max-mobile:inline-block">Expertise</span>
      </h1>
      <div className="flex mx-auto items-center justify-center gap-[72px] flex-wrap max-mobile:mb-8 max-[1440px]:grid max-[1440px]:grid-cols-2 max-small:flex">
        {expertise.map((item, index) => (
          <div className="justify-center mobile:w-[280px] mobile:h-[566px]">
            <ExpertiseCard key={item.title} {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
