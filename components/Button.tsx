import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
  icon?: string;
  onClick?: () => void;
};

const Button = ({ type, title, variant, icon, onClick }: ButtonProps) => {
  return (
    <button
      className={`gap-3 rounded-full ${variant}
      ${icon && "btn-icon"}
      `}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="text-sm font-extrabold whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
