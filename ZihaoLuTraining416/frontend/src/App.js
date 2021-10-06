import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";


import Blank from "./components/Blank/Blank";

import Blank1 from "./components/Blank1/Blank1";

import Blank2 from "./components/Blank2/Blank2";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Blank } />
          <Route path = "/Question" component = { Blank1 } />
          <Route path = "/Result" component = { Blank2 } />
        </Switch>
        
      </React.Fragment>
    );
}

export default App;
