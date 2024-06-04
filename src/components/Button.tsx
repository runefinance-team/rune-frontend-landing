import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-[2px] text-dark uppercase text-button-size px-[10px] py-[5px] bg-yellow font-bold cursor-pointer active:scale-95 transition-all select-none outline-none hover:scale-110 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
