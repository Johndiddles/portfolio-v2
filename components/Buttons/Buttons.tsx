"use client";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant: "fill" | "outline";
  text?: string;
  children?: ReactNode;
}
export const PillButton = ({
  variant = "outline",
  text,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${
        variant === "outline" ? "border border-[#1E1E1E] text-[#1E1E1E]" : ""
      } rounded-[50px] px-10 py-5 font-inter font-medium`}
      {...props}
    >
      {children ? children : text ? text : null}
    </button>
  );
};
