import React from "react";
import * as ROUTES from "constants/routes";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import media from "styles/media";

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.menu};
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: left;
  transform: translateX(100%);
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 5;

  ${media.tablet`
    background-color: ${({ theme }) => theme.background.main};
    flex-direction: row;
    height: auto;
    position: relative;
    transform: translateX(0);
  `}
`;

const MenuItem = styled(Link)`
  color: #050e1b;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  padding: 2rem 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s linear;

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  ${media.tablet`
    color: ${({ theme }) => theme.color.primary};
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    margin-left: 2.5rem;
    padding: 0;

    :hover {
      color: ${({ theme }) => theme.font.color.text}
    }
  `}
`;

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <MenuList open={open} aria-hidden={!isHidden} {...props}>
      <MenuItem
        smooth
        to={ROUTES.PROJECTS_SECTION}
        onClick={() => setOpen(false)}
        tabIndex={tabIndex}
      >
        Projects.
      </MenuItem>
      <MenuItem
        smooth
        to={ROUTES.SKILLS_SECTION}
        onClick={() => setOpen(false)}
        tabIndex={tabIndex}
      >
        Skills.
      </MenuItem>
      <MenuItem
        smooth
        to={ROUTES.CONTACT_SECTION}
        onClick={() => setOpen(false)}
        tabIndex={tabIndex}
      >
        Contact.
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
