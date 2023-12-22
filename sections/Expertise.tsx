import { specialties } from "@/constants";
import ExpertiseCard from "@/components/ExpertiseCard";

const Expertise = () => {
  return (
    <section id="therapy" className="max-container flex flex-col">
      <h1 className="flex justify-center text-[40px] font-bold pb-10 text-stone-blue">
        Gen's Expertise
      </h1>
      <div className="flex flex-col items-center justify-center gap-[72px] flex-wrap md:flex-row max-[640px]:flex-col-1">
        {specialties.map((specialty, index) => (
          <div>
            <ExpertiseCard key={specialty.title} {...specialty} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
