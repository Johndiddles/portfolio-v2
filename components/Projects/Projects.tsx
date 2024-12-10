import React from "react";
import Container from "../Container/Container";
import { PillButton } from "../Buttons/Buttons";

const Projects = () => {
  return (
    <section id="works">
      <Container>
        <div className="border-y py-8 md:py-12">
          <div>
            <PillButton variant="outline" text="Projects" disabled />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
