import React from "react";
import Segment from "./segment";
import Card from "./card";
import list from "../constants/projects.json";

const projects = () => {
  return (
    <section id="projects">
      <Segment name={"Projects"}>
        <div className="card__list container">
          {list.map((project) => (
            <Card project={project} />
          ))}
        </div>
      </Segment>
    </section>
  );
};

export default projects;
