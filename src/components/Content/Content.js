import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import NewHistory from "../NewHistory";
import MyHistories from "../MyHistories";
import Stats from "../Stats";

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new-history" component={NewHistory} />
      <Route exact path="/my-histories" component={MyHistories} />
      <Route exact path="/stats" component={Stats} />
    </Switch>
  </div>
);

export default Content;
