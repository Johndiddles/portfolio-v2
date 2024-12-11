import React from "react";
import Container from "../Container/Container";

const Hero = () => {
  return (
    <section className="">
      <Container>
        <div className="h-screen max-h-[600px] md:max-h-[1000px] pt-32 pb-20 lg:pb-32 lg:pt-[240px] text-center flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="font-jost hero_header font-medium flex flex-wrap mx-auto justify-center gap-2 gap-y-0 md:gap-4 lg:gap-5">
            Hi, I am John, a{" "}
            <span className="min-w-fit">
              Full Stack
              <div className="h-2 md:h-3 lg:h-4 bg-[#C47B54] -mt-4 md:-mt-7 lg:-mt-10"></div>
            </span>{" "}
            Engineer
          </h1>
          <p className="font-light hero_caption leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[48px] xl:leading-[50px] max-w-[96ch] mx-auto font-inter">
            Results-driven Software Engineer with expertise in JavaScript,
            TypeScript, React, Node.js, and AWS. Contributed to the
            actualization of a $1.2M grant at Evon Medics LLC by automating data
            recovery and restoring over 6,000 critical data points, while
            re-engineering authentication workflows to enhance scalability for
            clinical trials. At Broadshift Technologies, developed a shift
            management system that optimized staff scheduling and reduced
            operational costs by minimizing reliance on third-party services.
            Proven track record in delivering scalable solutions, enhancing
            workflows, and creating user-focused applications.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
