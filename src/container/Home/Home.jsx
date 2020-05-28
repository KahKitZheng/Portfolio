import React from "react";
import Introduction from "./Introduction";
import Projects from "./Project";
import Skills from "./Skill";
import Contact from "./Contact";

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
