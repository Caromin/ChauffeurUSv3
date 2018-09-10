import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";

import { authorizeUser } from "../../actions/actions";
import "./styles.scss";

class Nav extends Component {
  render() {
    const isLoggedIn = this.props.auth;
    return (
      <div>
        <nav
          id={"navbrand"}
          className={
            "navbar navbar-expand-lg bg-dark flex-row noPadding fixed-top"
          }
        >
          <a className={"navtitle navbar-brand marginLeftRight"}>ChauffeurUS</a>
          <div className={"d-flex justify-content-end width100p"}>
            <ul className={"navbar-nav"}>
              {isLoggedIn == "true" ? (
                <div className={"d-flex flex-row "}>
                  <li className={"nav-item marginLeftRight"}>
                    <NavLink
                      className={
                        "textWhite noUnderline activeButton d-flex align-items-center justify-content-center h-100"
                      }
                      to={"/login"}
                      onClick={() => {
                        this.props.authorizeUser(false);
                        sessionStorage.clear();
                        sessionStorage.setItem("auth", "false");
                      }}
                    >
                      Logout
                    </NavLink>
                  </li>

                  <li className={"nav-item marginLeftRight"}>
                    <NavLink
                      className={
                        "textWhite noUnderline activeButton d-flex align-items-center justify-content-center h-100"
                      }
                      to={"/profile"}
                    >
                      User Profile
                    </NavLink>
                  </li>
                </div>
              ) : (
                <div className={"d-flex flex-row "}>
                  <li className={"nav-item marginLeftRight"}>
                    <NavLink
                      className={
                        "textWhite noUnderline activeButton d-flex align-items-center justify-content-center h-100"
                      }
                      to={"/register"}
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className={"nav-item marginLeftRight"}>
                    <NavLink
                      className={
                        "textWhite noUnderline activeButton d-flex align-items-center justify-content-center h-100"
                      }
                      to={"/login"}
                    >
                      Login
                    </NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuth: state.userInfo.auth
});

export default connect(
  mapStateToProps,
  { authorizeUser }
)(Nav);
