import Button from "@/components/Button";

const Consult = () => {
  return (
    <div className="flex mt-10 gap-6 flex-col justify-center items-center text-white">
      <h1 className="font-bold text-[40px]">Ready to take the next step?</h1>
      <p className="font-ling text-2xl">
        Request a free 30 minute Consultation.
      </p>
      <Button type="button" title="Schedule a Free Consultation" />
    </div>
  );
};

export default Consult;
