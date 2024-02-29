import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  children,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
