import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import Userpage from "./Userpage/Userpage";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            {/* <Route path="/login" component={Login} />
            <Route path="/logout" component={Login} />
          <Route path="/signup" component={Signup} /> */}
            <Route path="/user" component={Userpage} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
