import Image from "next/image";

type ExpertiseCardProps = {
  title: string;
  icon: string;
  description: string;
};

const ExpertiseCard = ({ title, icon, description }: ExpertiseCardProps) => {
  return (
    <div className="flex justify-center sm:w-[264px] sm:h-[467px]">
      <div className="flex flex-col gap-6 justify-center items-center text-[#000409] max-mobile:w-[264px]">
        <img src={icon} alt="icon" width={186} height={186} />
        <h2 className="text-lg font-normal justify-center text-center">
          {title}
        </h2>
        <p className="justify-center text-center text-sm font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExpertiseCard;
