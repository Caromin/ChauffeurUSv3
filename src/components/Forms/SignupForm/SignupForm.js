import React, { Component } from "react";

import "./styles.scss";

class Signup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = event;

    console.log("this is the data ", data);
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
              className={
                "d-flex flex-column inputHalfContainer marginTopBottom"
              }
            >
              <label htmlFor={"firstName"}>First Name:</label>
              <input
                id={"firstName"}
                name={"firstName"}
                type={"text"}
                placeholder={"Christian"}
              />
            </div>
            <div
              className={
                "d-flex flex-column inputHalfContainer marginTopBottom"
              }
            >
              <label htmlFor={"lastName"}>Last Name:</label>
              <input
                id={"lastName"}
                name={"lastName"}
                type={"text"}
                placeholder={"Doe"}
              />
            </div>
            <div
              className={"d-flex flex-column inputContainer marginTopBottom"}
            >
              <label htmlFor={"email"}>Email:</label>
              <input
                id={"email"}
                name={"email"}
                type={"text"}
                placeholder={"jimbean@yahoo.com"}
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
            <button>Register Now!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
