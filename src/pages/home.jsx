import React from "react";
import Introduction from "../components/introduction";
import Projects from "../components/project";

const home = () => {
  return (
    <div id="home">
      <Introduction />
      <Projects />
    </div>
  );
};

export default home;
