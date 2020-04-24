import React from "react";
import Segment from "./segment";
import Card from "./card";

const projects = () => {
  return (
    <section id="projects">
      <Segment name={"Projects"}>
        <div className="card__list container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Segment>
    </section>
  );
};

export default projects;
