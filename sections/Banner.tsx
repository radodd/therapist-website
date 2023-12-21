import Button from "../components/Button";

const Banner = () => {
  return (
    <section
      id="banner"
      className="w-full h-full flex flex-col justify-center bg-banner-bg-color object-cover p-2"
    >
      <div className="flex flex-col justify-start leading-normal mt-24 gap-[24px] max-sm:mt-8 sm:mx-[70px] max-sm:mx-8">
        <h1 className="text-trim font-montserrat text-xl font-normal text-white whitespace-pre justify-start">
          Gen Fulton
        </h1>
        <h2 className="font-montserrat text-lg font-normal text-white">
          Coaching & Consulting
        </h2>
        <p className="text-base font-light text-white sm:max-w-3xl">
          Gen works with her clients based on where they are and what they hope
          to achieve rather than imposing an agenda on her clients. This
          holistic, person-centered approach has helped reduce intolerable and
          uncomfortable symptoms and increased insight, hope and harmony.
        </p>
        <div className="mb-[13px] font-extrabold">
          <Button type="button" variant="btn-primary" title="View Services" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
