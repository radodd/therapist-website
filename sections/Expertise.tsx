import { specialties } from "@/constants";
import ExpertiseCard from "@/components/ExpertiseCard";

const Expertise = () => {
  return (
    <section className="max-container flex flex-col border-green-700 border-2">
      <h1 className="flex justify-center text-[40px] font-bold pb-10">
        Gen's Expertise
      </h1>
      <div className="flex flex-col justify-center gap-[72px] flex-wrap md:flex-row border-green-300 border-2">
        {specialties.map((specialty) => (
          <ExpertiseCard key={specialty.title} {...specialty} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
