import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
  negative?: boolean;
};
const Button = ({ type, title, icon, full, negative }: ButtonProps) => {
  return (
    <button
      className={`btn-pink gap-3 rounded-full ${full && "w-full"} ${
        negative && "!btn-negative"
      } ${icon && icon}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
