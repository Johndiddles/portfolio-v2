"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import CloseIcon from "@/assets/icons/close.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import Image from "next/image";
import NavLink from "./NavLink";

const Nav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [currentSection, setCurrentSection] = useState("");
  const navListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setCurrentSection(window?.location.hash.replace("#", ""));
  }, []);

  return (
    <nav className="self-end duration-500 ease-in-out flex flex-col lg:block">
      <button
        className="block lg:hidden cursor-pointer place-self-end"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src={isOpen ? CloseIcon : MenuIcon}
          alt={isOpen ? "close" : "open"}
        />
      </button>
      <ul
        ref={navListRef}
        className={`flex flex-col ${
          isOpen ? "h-fit mt-8" : "h-0 max-h-0 overflow-hidden"
        } lg:h-fit lg:max-h-fit lg:flex-row items-end gap-6 lg:gap-10 duration-500 ease-in-out`}
      >
        <NavLink
          setIsOpen={setIsOpen}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          href="#about"
          label="About Me"
        />
        <NavLink
          setIsOpen={setIsOpen}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          href="#works"
          label="Projects"
        />
        <NavLink
          setIsOpen={setIsOpen}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          href="#testimonials"
          label="Testimonials"
        />
        <NavLink
          setIsOpen={setIsOpen}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          href="#contact"
          label="Contact"
        />
      </ul>
    </nav>
  );
};

export default Nav;
