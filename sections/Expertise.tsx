import { expertise } from "@/constants";
import ExpertiseCard from "@/components/ExpertiseCard";

const Expertise = () => {
  return (
    <section id="therapy" className="max-container flex flex-col">
      <h1 className="flex max-mobile:flex-col justify-center text-xl font-normal pb-10 text-primary text-center">
        Areas of&nbsp;
        <span className="max-mobile:inline-block">Expertise</span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-[72px] flex-wrap md:flex-row max-[640px]:flex-col-1 max-mobile:mb-8">
        {expertise.map((item, index) => (
          <div>
            <ExpertiseCard key={item.title} {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
