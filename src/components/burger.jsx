import React from "react";
import { bool, func } from "prop-types";

const Burger = ({ open, setOpen }) => {
  return (
    <button className="burger" open={open} onClick={() => setOpen(!open)}>
      <div
        className={
          open === true ? `burger-layer opened` : `burger-layer closed`
        }
      />
      <div
        className={
          open === true ? `burger-layer opened` : `burger-layer closed`
        }
      />
      <div
        className={
          open === true ? `burger-layer opened` : `burger-layer closed`
        }
      />
    </button>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
