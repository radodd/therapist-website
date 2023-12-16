import Button from "../components/Button";

const Banner = () => {
  return (
    <section
      id="banner"
      className="w-full flex flex-col justify-center max-container border-2 border-red-500 p-2"
    >
      <div className="flex flex-col justify-start mt-24 gap-[24px] max-sm:mt-8 ">
        <h1 className="font-montserrat text-xl font-normal text-white whitespace-pre justify-start">
          Gen Fulton
        </h1>
        <h2 className="font-montserrat text-lg font-normal text-white">
          Coaching & Consulting
        </h2>
        <p className="font-montserrat text-base font-light text-white sm:max-w-3xl">
          Gen works with her clients based on where they are and what they hope
          to achieve rather than imposing an agenda on her clients. This
          holistic, person-centered approach has helped reduce intolerable and
          uncomfortable symptoms and increased insight, hope and harmony.
        </p>
        <div className="mb-[13px] font-extrabold">
          <Button type="button" full={false} title="View Services" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
