import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Details from "./Pages/Details";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:username" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
