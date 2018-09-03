import React, { Component } from "react";

import "./styles.scss";

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = event;

    console.log("this is the data ", event.target);
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
              <label htmlFor={"username"}>Username:</label>
              <input
                id={"username"}
                name={"username"}
                type={"text"}
                placeholder={"HelloWorld123"}
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
