import Image from "next/image";

type ExpertiseCardProps = {
  title: string;
  icon: string;
};

const ExpertiseCard = ({ title, icon }: ExpertiseCardProps) => {
  return (
    <div className="flex rounded-[20px] justify-center px-6 py-10 sm:w-[250px] sm:min-w-[300px] sm:h-[320px] bg-navy-blue">
      <div className="flex flex-col gap-8 justify-center items-center text-white border-violet-800 border-4">
        <h2 className="text-lg font-normal justify-center text-center whitespace-pre-wrap">
          {title}
        </h2>
        <img src={icon} alt="icon" width={80} height={80} />
      </div>
    </div>
  );
};

export default ExpertiseCard;
