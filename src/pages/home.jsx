import React from "react";
import Introduction from "../components/introduction";
import Projects from "../components/project";
import Contact from "../components/contact";

const home = () => {
  return (
    <div id="home">
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
};

export default home;
