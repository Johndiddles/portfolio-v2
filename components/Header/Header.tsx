"use client";
import React, { useState } from "react";
import Container from "../Container/Container";
import Logo from "./Logo";
import Nav from "./Nav";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white ${
        isOpen
          ? "border-b-4 border-b-[#C47B54] shadow-[0_4px_4px_#1E1E1E40]"
          : "border-b-0"
      } lg:border-0 lg:border-b-0 shadow-none`}
    >
      <Container>
        <div className="flex items-start lg:items-center justify-between py-4 font-poppins">
          <div className="flex items-center justify-between w-full lg:w-fit">
            <Logo />
          </div>
          <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
