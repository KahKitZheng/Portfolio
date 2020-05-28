import React from "react";
import Segment from "../../components/Segment";
import SKILLS_LIST from "../../constants/skills.json";

const skills = () => {
  return (
    <section id="skills">
      <Segment name={"Skills"}>
        <div className="skills container">
          {SKILLS_LIST.map((skill) => (
            <div id={skill.id} key={skill.id}>
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
