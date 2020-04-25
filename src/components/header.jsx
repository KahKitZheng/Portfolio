import React, { useState, useRef } from "react";
import * as ROUTES from "../constants/routes";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home";
import { Burger, Menu, useOnClickOutside } from "./navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <React.Fragment>
      <BrowserRouter>
        <header className="header">
          <Link smooth className="header__logo" to={ROUTES.HOME}>
            KKZ
          </Link>

          <div className="header__navigation" ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </header>

        <main className={"main" + (open ? " opened" : " closed")}>
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
        </main>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Header;
