import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { bool } from "prop-types";

const Menu = ({ open, setOpen }) => {
  return (
    <div className={"menu" + (open ? " open" : "")} open={open}>
      <Link
        to="/#projects"
        onClick={() => setOpen(!open)}
        className="menu__item"
      >
        Projects.
      </Link>
      <Link to="/#skills" onClick={() => setOpen(!open)} className="menu__item">
        Skills.
      </Link>
      <Link
        to="/#contact"
        onClick={() => setOpen(!open)}
        className="menu__item"
      >
        Contact.
      </Link>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
