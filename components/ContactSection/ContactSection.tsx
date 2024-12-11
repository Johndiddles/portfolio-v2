import React from "react";
import Container from "../Container/Container";
import footerBulb from "@/assets/icons/footer-bulb.svg";
import footerCrown from "@/assets/icons/footer-crown.svg";
import { PillButton } from "../Buttons/Buttons";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section className="bg-[#131313] contact_section_wrapper">
      <Container>
        <div className="py-11 sm:py-20 md:py-[120px] lg:py-[200px] flex flex-col gap-5 md:gap-8 items-center">
          <div className="text-white font-jost font-medium text-xl sm:text-3xl md:text-5xl lg:text-6xl text-center flex flex-col  gap-1 md:gap-4">
            <div className="relative">
              Let&apos;s make
              <div className="absolute right-0 top-2 md:top-0 w-3 h-4 md:w-[40px] md:h-[50px]">
                <Image src={footerBulb} alt="bulb" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[9px] -top-[2px] sm:-top-0 md:-left-7 md:-top-5 lg:-left-[24px] lg:-top-3 w-4 h-4 md:w-[40px] md:h-[40px]">
                <Image src={footerCrown} alt="bulb" />
              </div>
              something together!
            </div>
          </div>

          <PillButton
            variant="outline"
            customStyle="border-[#C47B54] px-5 py-3 duration-200 hover:bg-[#C47B54] hover:text-[#1E1E1E] text-[#C47B54] contact-btn"
          >
            <div className="flex items-center gap-2">
              <p className="font-inter text-sm md:text-base text-center font-semibold duration-300">
                Contact Me
              </p>
              <FiArrowUpRight className="text-lg md:text-2xl contact-btn-svg" />
            </div>
          </PillButton>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
