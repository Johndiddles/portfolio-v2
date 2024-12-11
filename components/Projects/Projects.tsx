import React from "react";
import Container from "../Container/Container";
import { PillButton } from "../Buttons/Buttons";
import { AllProjects } from "@/constants/projects";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section id="works" className="">
      <Container>
        <div className="border-y py-8 md:py-12 md:pt-16">
          <div>
            <PillButton variant="outline" text="Projects" disabled />
          </div>
          <div className="flex flex-col gap-6 mt-8 md:mt-20">
            {AllProjects?.map((project, index) => (
              <SingleProject key={index} index={index} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
