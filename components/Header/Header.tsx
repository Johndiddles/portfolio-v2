import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <Container>
        <div className="flex items-start lg:items-center justify-between py-4 font-poppins">
          <div className="flex items-center justify-between w-full lg:w-fit">
            <Logo />
          </div>
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
