import React from "react";
import * as ROUTES from "../../constants/routes";
import { HashLink as Link } from "react-router-hash-link";
import { bool } from "prop-types";

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <div
      className={"menu" + (open ? " open" : "")}
      open={open}
      aria-hidden={!isHidden}
      {...props}
    >
      <Link
        smooth
        className="menu__item"
        to={ROUTES.PROJECTS_SECTION}
        onClick={() => setOpen(false)}
        tabIndex={tabIndex}
      >
        Projects.
      </Link>
      <Link
        smooth
        className="menu__item"
        to={ROUTES.SKILLS_SECTION}
        onClick={() => setOpen(false)}
        tabIndex={tabIndex}
      >
        Skills.
      </Link>
      <Link
        smooth
        className="menu__item"
        to={ROUTES.CONTACT_SECTION}
        onClick={() => setOpen(false)}
        tabIndex={tabIndex}
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
