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
        onClick={() => setOpen(false)}
      >
        Projects.
      </Link>
      <Link
        className="menu__item"
        to={ROUTES.SKILLS_SECTION}
        onClick={() => setOpen(false)}
      >
        Skills.
      </Link>
      <Link
        className="menu__item"
        to={ROUTES.CONTACT_SECTION}
        onClick={() => setOpen(false)}
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
