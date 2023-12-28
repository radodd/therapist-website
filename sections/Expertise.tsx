import { expertise } from "@/constants";
import ExpertiseCard from "@/components/ExpertiseCard";

const Expertise = () => {
  return (
    <section id="therapy" className="max-container flex flex-col">
      <h1 className="flex justify-center text-[40px] font-bold pb-10 text-primary">
        Areas of Expertise
      </h1>
      <div className="flex flex-col items-center justify-center gap-[72px]  flex-wrap md:flex-row max-[640px]:flex-col-1">
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
