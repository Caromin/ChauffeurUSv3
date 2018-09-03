import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import Userpage from "./Userpage/Userpage";
import Error from "./Error/Error";
import Login from "./Forms/LoginForm/LoginForm";
import Register from "./Forms/Register/Register";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/user" component={Userpage} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
