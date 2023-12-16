import { specialties } from "@/constants";

import FocusCard from "@/components/FocusCard";

const Focus = () => {
  return (
    <section className="max-container flex flex-col">
      <h1 className="justify-center">Gen's Focus</h1>
      <div className="flex justify-center gap-20 flex-wrap md:flex-row lg:max-w-[1024px]">
        {specialties.map((specialty) => (
          <FocusCard key={specialty.title} {...specialty} />
        ))}
      </div>
    </section>
  );
};

export default Focus;
