import React, { Fragment } from "react";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => (
  <Fragment>
    <Introduction />
    <Projects />
    <Skills />
    <Contact />
  </Fragment>
);

export default Home;
