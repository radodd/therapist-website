import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title?: string;
  variant?: string;
  icon?: string;
  onClick?: () => void;
  selected?: boolean;
};

const Button = ({
  type,
  title,
  variant,
  icon,
  onClick,
  selected,
}: ButtonProps) => {
  return (
    <button
      className={`gap-3 rounded-full ${variant}`}
      type={type}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={title} />}
      <label className="text-xm whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
