import React from "react";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import Navigation from "./Navigation";

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Navigation />
    </div>
  </ThemeProvider>
);

export default App;
