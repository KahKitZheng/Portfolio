import React, { useEffect } from "react";
import { bool, func } from "prop-types";

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = "hidden";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <button
      className="burger"
      open={open}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      {...props}
    >
      <span className={"burger__layer" + (open ? " opened" : " closed")} />
      <span className={"burger__layer" + (open ? " opened" : " closed")} />
      <span className={"burger__layer" + (open ? " opened" : " closed")} />
    </button>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
