"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import CloseIcon from "@/assets/icons/close.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import Image from "next/image";

const Nav = () => {
  const navListRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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
          isOpen ? "h-fit mt-5" : "h-0 max-h-0 overflow-hidden"
        } lg:h-fit lg:max-h-fit lg:flex-row items-end gap-5 lg:gap-10 duration-500 ease-in-out`}
      >
        <li>
          <Link href="#about">About Me</Link>
        </li>
        <li>
          <Link href="#works">Works</Link>
        </li>
        <li>
          <Link href="#testimonials">Testimonials</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
