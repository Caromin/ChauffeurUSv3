import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./styles.scss";

class Login extends Component {
  // creating these states to update them when the data comes from db, but not auth because that is changed from redux.
  constructor(props) {
    super(props);
    this.state = {
      sessionEmail: "",
      password: "",
      logginError: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillUpdate() {
  // }

  handleChange(e) {
    e.preventDefault();
    let target = e.target.name;
    let value = e.target.value;

    this.setState({ [target]: value });
    // console.log(`${this.state.email} ${this.state.password}`);
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      email: this.state.sessionEmail.trim(),
      password: this.state.password.trim()
    };

    axios({
      method: "POST",
      url: "/login/authenticate",
      data: data
    })
      .then(data => {
        const results = data.data.response;
        this.props.updateFunc(results);
      })
      .catch(() => {
        this.setState({ logginError: true });
      });
  }

  render() {
    // this is a pass down from parent
    const isLoggedIn = this.props.userAuth;
    // this is a local state
    const logginError = this.state.logginError;
    // this is a redux prop
    const id = this.props.id;

    // isLoggedIn ? (
    //   <Redirect to={`/profile/${id}`} />
    // ) :
    return (
      <div
        id={"SignupBg"}
        className={"fullPage d-flex justify-content-center align-items-center"}
      >
        <div className={"formContainer"}>
          {logginError ? (
            <div className={"alert alert-danger"}>
              <strong>Error!</strong> email and/or password were incorrect.
            </div>
          ) : null}
          <form
            className={"container d-flex flex-wrap"}
            onSubmit={this.handleSubmit}
          >
            <div
              className={"d-flex flex-column inputContainer marginTopBottom"}
            >
              <label htmlFor={"email"}>
                <p>Email:</p>
              </label>
              <input
                id={"sessionEmail"}
                name={"sessionEmail"}
                type={"text"}
                placeholder={"HelloWorld@gmail.com"}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={"d-flex flex-column inputContainer marginTopBottom"}
            >
              <label htmlFor={"password"}>Password:</label>
              <input
                id={"password"}
                name={"password"}
                type={"text"}
                placeholder={"Password123"}
                onChange={this.handleChange}
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuth: state.userInfo.auth,
  id: state.userInfo.userProfile.id
});

export default connect(mapStateToProps)(Login);
