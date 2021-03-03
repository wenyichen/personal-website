import React from "react";
import "./app.scss";
import { Header } from "../header/header";
import { Home } from "../home/home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Resume } from "../resume/resume";
import { About } from "../about/about";

export const App = () => {
  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
