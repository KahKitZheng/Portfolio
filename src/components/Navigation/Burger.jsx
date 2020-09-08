import React, { useEffect } from "react";
import styled from "styled-components";
import media from "styles/media";

const Burger = styled.button`
  position: absolute;
  top: 1.1rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.color.primary};
  }

  &::-moz-focus-inner {
    border: 0;
  }

  ${media.tablet`
    display: none;
  `}
`;

const BurgerLayer = styled.span`
  background-color: ${({ open }) => (open ? "black" : "white")};
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

const BurgerIcon = ({ open, setOpen, ...props }) => {
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
    <Burger
      open={open}
      onClick={() => setOpen(!open)}
      aria-expanded={isExpanded}
      aria-label="Toggle menu"
      {...props}
    >
      <BurgerLayer open={open} />
      <BurgerLayer open={open} />
      <BurgerLayer open={open} />
    </Burger>
  );
};

export default BurgerIcon;
