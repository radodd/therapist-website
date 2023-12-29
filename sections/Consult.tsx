import Button from "@/components/Button";

const Consult = () => {
  // const Mobile = window.matchMedia("(max-width: 394px)").matches;
  return (
    <section
      id="contact"
      className="object-cover h-full w-full bg-consult-bg-color p-10"
    >
      <div className="flex mt-10 gap-6 flex-col justify-center items-center text-white max-mobile:mt-0">
        <h1 className="font-normal text-xl max-mobile:text-center">
          Ready to take the next step?
        </h1>
        <p className="font-normal text-md">Request a free 30 minute Consult.</p>
        <Button
          type="button"
          // title={`Schedule a Free ${Mobile ? "Consult" : "Consultation"}`}
          variant="btn-primary"
        />
      </div>
    </section>
  );
};

export default Consult;
