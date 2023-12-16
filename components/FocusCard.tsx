type FocusCardProps = {
  title: string;
  description: string;
};

const FocusCard = ({ title, description }: FocusCardProps) => {
  return (
    <div className="flex rounded-[20px] px-4 py-8 sm:w-[468px] sm:min-w-[350px] sm:h-[320px] bg-pink-card">
      <div className="flex flex-col gap-6 justify-center items-center border-violet-800 border-4">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FocusCard;
