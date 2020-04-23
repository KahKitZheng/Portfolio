import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Home from "../pages/home";
import Burger from "./burger";
import Menu from "./menu";
import { useOnClickOutside } from "./hooks";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <React.Fragment>
      <Router>
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
      </Router>
    </React.Fragment>
  );
};

export default Navigation;
