import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./styles.scss";

class Nav extends Component {
  render() {
    return (
      <Router>
        <nav
          id={"navbrand"}
          className={
            "navbar navbar-expand-lg bg-dark flex-row noPadding fixed-top"
          }
        >
          <a className={"navtitle navbar-brand marginLeftRight"}>ChauffeurUS</a>
          <div className={"d-flex justify-content-end width100p"}>
            <ul className={"navbar-nav flex-row"}>
              <li className={"nav-item marginLeftRight"}>
                <Link to="/user">Signin</Link>
              </li>
              <li className={"nav-item marginLeftRight"}>
                <Link to="/">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </Router>
    );
  }
}

export default Nav;
