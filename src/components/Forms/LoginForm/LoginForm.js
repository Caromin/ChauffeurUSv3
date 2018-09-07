import React, { Component } from "react";

import "./styles.scss";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
      url: "/users/login",
      data: data
    }).then(data => {
      console.log("Response from server: " + JSON.stringify(data));
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

export default Login;
