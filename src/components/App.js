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

// actions
import { authorizeUser, saveUser } from "../actions/actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        sessionId: "",
        sessionFirstName: "",
        sessionLastName: "",
        sessionEmail: "",
        sessionUsername: "",
        auth: ""
      }
    };

    this.updateState = this.updateState.bind(this);
    this.signout = this.signout.bind(this);
  }

  componentWillMount() {
    const sessionAuth = sessionStorage.getItem("auth");

    if (sessionAuth === "true") {
      this.props.authorizeUser(true);
      let tempData = {
        sessionId: sessionStorage.getItem("sessionId"),
        sessionFirstName: sessionStorage.getItem("sessionFirstName"),
        sessionLastName: sessionStorage.getItem("sessionLastName"),
        sessionEmail: sessionStorage.getItem("sessionEmail"),
        sessionUsername: sessionStorage.getItem("sessionUsername")
      };
      this.props.saveUser(tempData);
    } else {
      sessionStorage.clear();
    }
  }

  updateState(foundResults) {
    this.props.authorizeUser(true);
    this.props.saveUser(foundResults);
    sessionStorage.setItem("auth", "true");
    this.setState({
      userInfo: Object.assign({}, this.state.userInfo, {
        auth: true
      })
    });

    for (var key in foundResults) {
      if (foundResults.hasOwnProperty(key)) {
        this.setState({
          userInfo: Object.assign({}, this.state.userInfo, {
            [key]: foundResults[key]
          })
        });
        sessionStorage.setItem(key.toString(), foundResults[key].toString());
      }
    }
  }

  signout() {
    this.props.authorizeUser(false);
    sessionStorage.clear();
    this.setState({
      userInfo: Object.assign({}, this.state.userInfo, {
        auth: false
      })
    });
  }

  render() {
    const isLoggedIn = this.props.userAuth;
    return (
      <Router>
        <div>
          <Nav signout={this.signout} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route
              path="/login"
              render={() => {
                return (
                  <Login
                    updateFunc={this.updateState}
                    user={this.state.userInfo}
                  />
                );
              }}
            />
            <Route path="/register" component={Register} />
            <Route
              path="/profile/:id"
              render={props => {
                return isLoggedIn ? <Profile /> : <Redirect to={"/login"} />;
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
  userAuth: state.userInfo.auth,
  id: state.userInfo.userProfile.id,
  firstName: state.userInfo.userProfile.firstName,
  lastName: state.userInfo.userProfile.lastName,
  email: state.userInfo.userProfile.email,
  username: state.userInfo.userProfile.username
});

// wrapped hot reloading around main module
export default connect(
  mapStateToProps,
  { authorizeUser, saveUser }
)(hot(module)(App));
