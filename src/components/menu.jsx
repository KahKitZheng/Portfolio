import React from "react";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  return (
    <div className={open ? `menu open` : `menu close`} open={open}>
      <a href="/">Projects.</a>
      <a href="/">Skills.</a>
      <a href="/">Contact.</a>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
