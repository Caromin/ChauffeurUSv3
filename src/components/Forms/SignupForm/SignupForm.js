import React, { Component } from "react";
import api from "../../../helperFunctions/frontendValidation";

import "./styles.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      username: ""
    };

    // binding the button function to this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let target = e.target.name;
    // console.log(`this is the current value for ${target}: ${e.target.value}`);
    this.setState({ [target]: e.target.value });
  }

  handleSubmit(e) {
    $(".redBorder").removeClass("redBorder animated bounceIn");
    $(".hideDisplay").css("display", "none");
    e.preventDefault();
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    };

    let emptyInputs = api.signupValidation(data);

    $.each(emptyInputs, function(index, result) {
      $(`#${result}`).addClass("redBorder animated bounceIn");
      $(`#${result}1`).css("display", "inline");
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
              className={
                "d-flex flex-column inputHalfContainer marginTopBottom"
              }
            >
              <label htmlFor={"firstName"}>
                First Name:
                <small id={"firstName1"} class={"redSmallText hideDisplay"}>
                  Input Missing
                </small>
              </label>
              <input
                id={"firstName"}
                name={"firstName"}
                type={"text"}
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={
                "d-flex flex-column inputHalfContainer marginTopBottom"
              }
            >
              <label htmlFor={"lastName"}>
                Last Name:
                <small id={"lastName1"} class={"redSmallText hideDisplay"}>
                  Input Missing
                </small>
              </label>
              <input
                id={"lastName"}
                name={"lastName"}
                type={"text"}
                placeholder={"Doe"}
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={"d-flex flex-column inputContainer marginTopBottom"}
            >
              <label htmlFor={"email"}>
                Email:{" "}
                <small id={"email1"} class={"redSmallText hideDisplay"}>
                  Input Missing
                </small>
              </label>
              <input
                id={"email"}
                name={"email"}
                type={"text"}
                placeholder={"jimbean@yahoo.com"}
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={"d-flex flex-column inputContainer marginTopBottom"}
            >
              <label htmlFor={"password"}>
                Password:
                <small id={"password1"} class={"redSmallText hideDisplay"}>
                  Input Missing
                </small>
              </label>
              <input
                id={"password"}
                name={"password"}
                type={"text"}
                placeholder={"Password123"}
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={"d-flex flex-column inputContainer marginTopBottom"}
            >
              <label htmlFor={"username"}>
                Username:
                <small id={"username1"} class={"redSmallText hideDisplay"}>
                  Input Missing
                </small>
              </label>
              <input
                id={"username"}
                name={"username"}
                type={"text"}
                placeholder={"HelloWorld123"}
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <input type={"submit"} value={"Register"} />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
