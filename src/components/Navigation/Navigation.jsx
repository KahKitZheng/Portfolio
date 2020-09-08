import React, { Fragment, useState, useRef } from "react";
import * as ROUTES from "constants/routes";
import { Container } from "styles/mixin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import FocusLock from "react-focus-lock";
import styled from "styled-components";
import media from "styles/media";

import Home from "pages/Home";
import Burger from "./Burger";
import Menu from "./Menu";

const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.background.main};
  z-index: 10;

  height: ${({ open }) => (open ? "100%" : "unset")};
  overflow: ${({ open }) => (open ? "auto" : "unset")};

  ${media.tablet`
    box-shadow: none;
    padding: 2rem 3rem;
  `}

  ${media.laptop`
    padding: 2.5rem 5rem 1.5rem;
  `}

  ${media.laptopL`
    margin: auto;
    padding: 2.5rem 10rem 1.5rem;
  `} 
`;

const Brand = styled(Link)`
  color: #fff;
  margin: 0;
  text-decoration: none;
  font-family: Righteous;
  font-weight: bold;
  font-size: 1.5rem;
  transition: color 0.2s linear;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";
  const node = useRef();

  return (
    <Fragment>
      <BrowserRouter>
        <Nav>
          <Brand smooth to={ROUTES.HOME}>
            KKZ
          </Brand>

          <div ref={node}>
            <FocusLock>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </Nav>

        <Container>
          <Switch>
            <Route
              exact
              path={[
                ROUTES.START,
                ROUTES.HOME,
                ROUTES.PROJECTS_SECTION,
                ROUTES.SKILLS_SECTION,
                ROUTES.CONTACT_SECTION,
              ]}
            >
              <Home />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </Fragment>
  );
};

export default Navigation;
