import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { authorizeUser } from "../../../actions/actions";
import "./styles.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount() {

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
      email: this.state.email.trim(),
      password: this.state.password.trim()
    };

    axios({
      method: "POST",
      url: "/login/authenticate",
      data: data
    }).then(data => {
      const result = JSON.stringify(data.data.response);

      result
        ? this.props.authorizeUser(true)
        : console.log("action has failed");
    });
  }

  render() {
    return (
      <div
        id={"SignupBg"}
        className={"fullPage d-flex justify-content-center align-items-center"}
      >
        <div className={"formContainer"}>
          <form
            className={"container d-flex flex-wrap"}
            onSubmit={this.handleSubmit}
          >
            <div
              className={"d-flex flex-column inputContainer marginTopBottom"}
            >
              <label htmlFor={"email"}>Email:</label>
              <input
                id={"email"}
                name={"email"}
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
            <button>Signin</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.func
};

export default connect(
  null,
  { authorizeUser }
)(Login);
