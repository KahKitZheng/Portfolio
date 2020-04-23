import React, { useState, useRef } from "react";
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
        <div className="header">
          <h2 className="header__logo">KKZ</h2>

          <div className="header__navigation" ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </div>

        <div className={"main" + (open ? " opened" : " closed")}>
          <Switch>
            <Route exact path={["/", "#projects", "#skills", "#contact"]}>
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Header;
