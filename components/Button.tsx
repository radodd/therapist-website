import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: "button" | "submit";
  title?: string;
  variant?: string;
  icon?: string;
  onClick?: () => void;
  selected?: boolean;
  href?: string;
};

const Button = ({
  type,
  title,
  variant,
  icon,
  onClick,
  selected,
  href,
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`gap-3 rounded-full ${variant}`}
        onClick={onClick}
      >
        {icon && <img src={icon} alt={title} />}
        <label className="whitespace-nowrap cursor-pointer">{title}</label>
      </Link>
    );
  }

  return (
    <button
      className={`gap-3 rounded-full ${variant}`}
      type={type}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={title} />}
      <label className="whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
