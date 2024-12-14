"use client";
import { ComponentProps, ReactNode } from "react";
import arrowTopRightWhite from "@/assets/icons/arrow-top-right-white.svg";
import arrowTopRight from "@/assets/icons/arrow-top-right.svg";
import Image from "next/image";

interface ButtonProps extends ComponentProps<"button"> {
  variant: "fill" | "outline";
  text?: string;
  children?: ReactNode;
  customStyle?: string;
}
export const PillButton = ({
  variant = "outline",
  text,
  children,
  customStyle,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${
        variant === "outline"
          ? "border border-[#1E1E1E] text-[#1E1E1E]"
          : "bg-[#1E1E1EE9] text-[#F8F8F8] hover:bg-[#000000] duration-300 ease-in-out"
      } rounded-[50px] px-10 py-4 font-inter font-medium cursor-pointer ${
        customStyle ? customStyle : ""
      }`}
      {...props}
    >
      {children ? children : text ? text : null}
    </button>
  );
};

interface ViewProjectButtonProps {
  text: string;
  url: string;
  customStyle?: string;
}

export const ViewCodeButton = ({
  text,
  url,
  ...props
}: ViewProjectButtonProps) => {
  return (
    <a
      className={`border border-[#1E1E1E] text-[#1E1E1E] bg-[#F8F8F8] rounded-[50px] px-6 py-3 font-inter font-medium cursor-pointer`}
      href={url}
      target="_blank"
      {...props}
    >
      <div className="flex items-center gap-2">
        <p className="font-inter text-sm md:text-base text-center">{text}</p>
        <Image src={arrowTopRight} alt="arrow" />
      </div>
    </a>
  );
};

export const ViewProjectButton = ({
  text,
  url,
  customStyle,
  ...props
}: ViewProjectButtonProps) => {
  return (
    <a
      className={`rounded-[50px] font-inter font-medium border border-[#1E1E1E] bg-[#F8F8F8] cursor-pointer ${
        customStyle ? customStyle : ""
      }`}
      href={url}
      target="_blank"
      {...props}
    >
      <div className="flex items-center gap-2 rounded-[50px] px-6 py-3 bg-[#1E1E1E] text-[#F8F8F8] h-full w-full -translate-x-2 -translate-y-2 md:hover:translate-x-0 md:hover:translate-y-0 duration-500 cursor-pointer">
        <p className="font-inter text-sm md:text-base text-center">{text}</p>
        <Image src={arrowTopRightWhite} alt="arrow" />
      </div>
    </a>
  );
};
