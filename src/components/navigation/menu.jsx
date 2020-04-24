import React from "react";
import * as ROUTES from "../../constants/routes";
import { HashLink as Link } from "react-router-hash-link";
import { bool } from "prop-types";

const Menu = ({ open, setOpen }) => {
  return (
    <div className={"menu" + (open ? " open" : "")} open={open}>
      <Link
        className="menu__item"
        to={ROUTES.PROJECTS_SECTION}
        onClick={() => setOpen(!open)}
      >
        Projects.
      </Link>
      <Link
        className="menu__item"
        to={ROUTES.SKILLS_SECTION}
        onClick={() => setOpen(!open)}
      >
        Skills.
      </Link>
      <Link
        className="menu__item"
        to={ROUTES.CONTACT_SECTION}
        onClick={() => setOpen(!open)}
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
