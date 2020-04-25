import React from "react";
import Introduction from "../components/introduction";
import Projects from "../components/project";
import Skills from "../components/skill";
import Contact from "../components/contact";

const home = () => {
  return (
    <div id="home">
      <Introduction />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default home;
