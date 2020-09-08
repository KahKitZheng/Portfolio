import React from "react";
import PROJECTS from "constants/projects";
import Card from "components/Card";
import Section from "pages/Home/Section";
import styled from "styled-components";
import media from "styles/media";

const ProjectList = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 2rem;

  ${media.tablet`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.laptopL`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}
`;

const Projects = () => (
  <Section id="projects" name={"Projects"}>
    <ProjectList>
      {PROJECTS.map((project) => (
        <Card project={project} key={project.title} />
      ))}
    </ProjectList>
  </Section>
);

export default Projects;
