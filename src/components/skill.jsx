import React from "react";
import Segment from "./segment";
import list from "../constants/skills.json";

const skills = () => {
  return (
    <section id="skills">
      <Segment name={"skills"}>
        <div className="skills container">
          {list.map((skill) => (
            <div>
              <p className="skills__type">{skill.type}</p>
              {skill.list.map((item) => (
                <p className="skills__tag">{item}</p>
              ))}
            </div>
          ))}
        </div>
      </Segment>
    </section>
  );
};

export default skills;
