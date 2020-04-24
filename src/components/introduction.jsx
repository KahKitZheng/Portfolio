import React from "react";
import * as ROUTES from "../constants/routes";
import { HashLink as Link } from "react-router-hash-link";

const introduction = () => {
  return (
    <section className="intro container">
      <p className="intro__text">Hi, my name is</p>
      <h1 className="intro__title">Kah Kit Zheng</h1>
      <h2 className="intro__undertitle">I build things for the web.</h2>
      <p className="intro__description">
        I’m a Software Engineer student at the Amsterdam University of Applied
        Sciences who specializes in Frontend development and occasionally likes
        to design.
      </p>
      <Link to={ROUTES.CONTACT_SECTION} className="button">
        Get In Touch
      </Link>
    </section>
  );
};

export default introduction;
