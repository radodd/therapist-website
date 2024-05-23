import { expertise } from "@/constants";
import ExpertiseCard from "@/components/ExpertiseCard";

const Expertise = () => {
  return (
    <section id="expertise" className="max-container flex flex-col">
      <h1 className="flex max-small:flex-col justify-center text-xl font-normal pb-10 text-primary text-center">
        Areas of&nbsp;
        <span className="max-mobile:inline-block">Expertise</span>
      </h1>
      <div
        className="flex mx-auto items-center justify-center gap-14 flex-wrap
      max-mobile:mb-8
      max-wide:grid
      max-wide:grid-cols-2
      max-small:flex"
      >
        {expertise.map((item, index) => (
          <div key={index} className="justify-center">
            <ExpertiseCard key={item.title} {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
