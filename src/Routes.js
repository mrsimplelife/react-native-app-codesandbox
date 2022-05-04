import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./Home.js";
import Chips from "./Chips.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="chips" component={Chips} title="Chips" />
    </Scene>
  </Router>
);
export default Routes;
