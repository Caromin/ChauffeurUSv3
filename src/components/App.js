import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";

// components
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import Profile from "./Profile/Profile";
import Error from "./Error/Error";
import Login from "./Forms/LoginForm/LoginForm";
import Register from "./Forms/Register/Register";

class App extends Component {
  render() {
    // console.log("testing in app class: " + this.props.userAuth);
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/profile"
              render={() => {
                if (this.props.userAuth) {
                  return <Profile />;
                } else {
                  return <Redirect to={"/login"} />;
                }
              }}
            />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  userAuth: state.userInfo.auth
});

// wrapped hot reloading around main module
export default connect(mapStateToProps)(hot(module)(App));
