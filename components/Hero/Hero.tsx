import React from "react";
import Container from "../Container/Container";

const Hero = () => {
  return (
    <section className="">
      <Container>
        <div className="pt-32 pb-20 lg:pb-32 lg:pt-[240px] text-center flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="font-jost hero_header font-medium flex mx-auto gap-2 md:gap-4 lg:gap-5">
            Hi, I am John, a{" "}
            <span className="min-w-fit">
              Full Stack
              <div className="h-2 md:h-3 lg:h-4 bg-[#C47B54] -mt-4 md:-mt-7 lg:-mt-10"></div>
            </span>{" "}
            Engineer
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-5 lg:leading-[48px]">
            I code beautifully simple things, and I love what I do, with 3+
            years of experience under my belt. Building user-friendly web apps,
            and I love wielding JavaScript (React, Next.js, Node/Express) like a
            magic wand. Plus, I&apos;m fluent in the language of the clouds,
            thanks to AWS services like Amplify, Cognito, Lambda, and DynamoDB.
            I started my coding journey on the frontend, sculpting pixel-perfect
            designs with React. But then I discovered the full-stack symphony,
            and now I relish being involved in every note, from conception to
            deployment. When I&apos;m not knee-deep in code, you&apos;ll find me
            tickling the ivories on my guitar or diving into the latest tech
            trends. I&apos;m always eager to learn and collaborate, so
            let&apos;s connect and chat code!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
