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
        <h2 className="logo">KKZ</h2>

        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>

        <Switch>
          <Route exact path={["/", "#projects", "#skills", "#contact"]}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Header;
