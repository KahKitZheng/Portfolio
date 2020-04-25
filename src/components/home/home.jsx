import React from "react";
import Introduction from "./introduction";
import Projects from "./project";
import Skills from "./skill";
import Contact from "./contact";

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
