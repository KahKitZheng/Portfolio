import React from "react";
import SKILLS from "constants/skills";
import Section from "pages/Home/Section";
import styled from "styled-components";
import media from "styles/media";

const SkillList = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template:
    "Web"
    "Frontend"
    "Backend"
    "Platform"
    "Tools"
    "Design";
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  ${media.tablet`
    grid-template:
      "Web Platform"
      "Frontend Tools"
      "Backend Design";
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  #Web {
    grid-area: Web;
  }
  #Frontend {
    grid-area: Frontend;
  }
  #Backend {
    grid-area: Backend;
  }
  #Tools {
    grid-area: Tools;
  }
  #Platform {
    grid-area: Platform;
  }
  #Design {
    grid-area: Design;
  }
`;

const SkillBase = styled.div.attrs((props) => ({
  id: props.id,
}))`
  margin: 0.5em 0;
`;

const SkillType = styled.p`
  color: ${({ theme }) => theme.font.color.subtitle};
  font-family: Righteous;
  font-size: 24px;
  line-height: 30px;
  margin-top: 0;
  margin-bottom: 0;
`;

const SkillName = styled.p`
  background-color: ${({ theme }) => theme.background.pill};
  border-radius: 14px;
  /* color: $pill-text; */
  display: inline-block;
  font-family: "Fira Code";
  margin: 0.75rem 1rem 0.25rem 0;
  /* margin-right: 14px; */
  padding: 6px 14px;
  width: max-content;
`;

const Skills = () => (
  <Section id="skills" name={"Skills"}>
    <SkillList>
      {SKILLS.map((skill) => (
        <SkillBase id={skill.id} key={skill.id}>
          <SkillType>{skill.type}</SkillType>
          {skill.list.map((item, index) => (
            <SkillName key={index}>{item}</SkillName>
          ))}
        </SkillBase>
      ))}
    </SkillList>
  </Section>
);

export default Skills;
