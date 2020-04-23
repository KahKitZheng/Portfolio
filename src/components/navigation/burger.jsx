import React from "react";
import { bool, func } from "prop-types";

const Burger = ({ open, setOpen }) => {
  return (
    <button className="burger" open={open} onClick={() => setOpen(!open)}>
      <div className={"burger__layer" + (open ? " opened" : " closed")} />
      <div className={"burger__layer" + (open ? " opened" : " closed")} />
      <div className={"burger__layer" + (open ? " opened" : " closed")} />
    </button>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
