import type { ButtonHTMLAttributes, ReactNode } from "react";

import "./Button.css";

type ButtonVariant = "nav" | "primary" | "light" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export function Button({
  children,
  variant = "nav",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
