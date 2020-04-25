import React from "react";
import Segment from "../segment";
import list from "../../constants/skills.json";

const skills = () => {
  return (
    <section id="skills">
      <Segment name={"skills"}>
        <div className="skills container">
          {list.map((skill) => (
            <div key={skill.type}>
              <p className="skills__type">{skill.type}</p>
              {skill.list.map((item, index) => (
                <p className="skills__tag" key={index}>
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Segment>
    </section>
  );
};

export default skills;
