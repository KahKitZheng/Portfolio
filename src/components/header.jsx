import React, { useState, useRef } from "react";
import * as ROUTES from "../constants/routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import { Burger, Menu, useOnClickOutside } from "./navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <React.Fragment>
      <BrowserRouter>
        <header className="header">
          <h2 className="header__logo">KKZ</h2>

          <div className="header__navigation" ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </header>

        <main className={"container" + (open ? " opened" : " closed")}>
          <Switch>
            <Route
              exact
              path={[
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
