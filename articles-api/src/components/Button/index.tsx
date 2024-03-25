import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IGeneralButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type?: "submit" | "button" | "reset";
  className?: string;
  onClick?: () => void;
}

const Button = (props: IGeneralButtonProps) => {
  const {
    type,
    className,
    children,
  } = props;

  return (
    <div className={`flex items-center justify-center text-textColor h-10 bg-buttonColor rounded ${className}`}>
      <button
        type={type ?? "submit"}
        onClick={props.onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
