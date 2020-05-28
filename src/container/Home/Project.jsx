import React from "react";
import Segment from "../../components/Segment";
import Card from "../../components/Card";
import PROJECT_LIST from "../../constants/projects.json";

const projects = () => {
  return (
    <section id="projects">
      <Segment name={"Projects"}>
        <div className="card__list container">
          {PROJECT_LIST.map((project) => (
            <Card project={project} key={project.title} />
          ))}
        </div>
      </Segment>
    </section>
  );
};

export default projects;
