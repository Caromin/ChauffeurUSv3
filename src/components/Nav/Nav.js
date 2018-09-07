import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import Login from "../Forms/LoginForm/LoginForm";
import Register from "../Forms/Register/Register";

import "./styles.scss";

class Nav extends Component {
  render() {
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
            <ul className={"navbar-nav flex-row "}>
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
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
