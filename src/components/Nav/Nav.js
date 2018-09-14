import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./styles.scss";

//actions
import { authorizeUser } from "../../actions/actions";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // console.log("this is the nav bar: " + this.props.auth);
  }

  render() {
    const isLoggedIn = this.props.userAuth;

    return (
      <div>
        <nav
          id={"navbrand"}
          className={
            "navbar navbar-expand-lg bg-dark flex-row noPadding fixed-top"
          }
        >
          <NavLink to={"/"} className={"navtitle navbar-brand marginLeftRight"}>
            ChauffeurUS
          </NavLink>
          <div className={"d-flex justify-content-end width100p"}>
            <ul className={"navbar-nav"}>
              {isLoggedIn === true ? (
                <div className={"d-flex flex-row "}>
                  <li className={"nav-item marginLeftRight"}>
                    <NavLink
                      className={
                        "textWhite noUnderline activeButton d-flex align-items-center justify-content-center h-100"
                      }
                      to={"/login"}
                      onClick={() => {
                        this.props.signout();
                        <Redirect to={"/"} />;
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
                      to={`/profile/${this.props.id}`}
                    >
                      Dashboard
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
                      to={"/login"}
                    >
                      Login
                    </NavLink>
                  </li>
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
                </div>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Nav.propTypes = {
  authorizeUser: PropTypes.func
};

const mapStateToProps = state => ({
  userAuth: state.userInfo.auth,
  id: state.userInfo.userProfile.id
});

export default connect(
  mapStateToProps,
  { authorizeUser }
)(Nav);
