"use client";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

const NavLink = ({
  href,
  label,
  setIsOpen,
  currentSection,
  setCurrentSection,
}: {
  href: string;
  label: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <li>
      <Link
        href={href}
        passHref
        className={`${
          currentSection === href.replace("#", "")
            ? "text-[#C47B54] border-b border-b-[#C47B54]"
            : ""
        }`}
      >
        <button
          onClick={() => {
            setIsOpen(false);
            setCurrentSection(href.replace("#", ""));
          }}
        >
          {label}
        </button>
      </Link>
    </li>
  );
};

export default NavLink;
