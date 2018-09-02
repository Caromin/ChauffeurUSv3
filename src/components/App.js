import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Userpage from "./Userpage/Userpage";

const NewRoute = () => {
  return (
    <div>
      <p>New route</p>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/user" component={NewRoute} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
