import React, { Component } from "react";
import api from "../../../helperFunctions/frontendValidation";
import axios from "axios";

import "./styles.scss";

class Register extends Component {
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
    // [] brackets are needed to identify the state properly.
    this.setState({ [target]: e.target.value });
  }

  handleSubmit(e) {
    $(".redSmallText").css("display", "none");
    $(".redBorder ").removeClass("redBorder animated bounceIn ");
    e.preventDefault();
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    };
    let emailValidation = data.email.match(/.+@.+\.com$/);

    if (emailValidation === null) {
      console.log("there was a problem with the email");
      $(`#email`).addClass("redBorder animated bounceIn");
      $(`#email1`)
        .css("display", "inline")
        .text("There was a probem with the email");
    }

    let emptyInputs = api.signupValidation(data);
    let arrLength = emptyInputs.length;

    let inputValidate = new Promise(function(resolve, reject) {
      if (arrLength > 0) {
        $.each(emptyInputs, function(index, result) {
          $(`#${result}`).addClass("redBorder animated bounceIn");
          $(`#${result}1`)
            .css("display", "inline")
            .text("Input is required");
          reject();
        });
      } else {
        resolve();
      }
    });

    inputValidate
      .then(function() {
        axios({
          method: "post",
          url: "/register/new",
          data: data
        })
          .then(response => {
            console.log(response);
          })
          .catch(errors => {
            // This is the location of the express-validation errors
            // console.log(JSON.stringify(errors.response.data.errors));
            let results = errors.response.data.errors;

            results.forEach(index => {
              console.log(JSON.stringify(`Param: ${index.param}`));
            });
          });
      })
      .catch(error => {
        console.log("Error: " + error);
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
                <small id={"firstName1"} className={"redSmallText"} />
              </label>
              <input
                id={"firstName"}
                name={"firstName"}
                type={"text"}
                placeholder={"Christian"}
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
                <small id={"lastName1"} className={"redSmallText"} />
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
                Email: <small id={"email1"} className={"redSmallText"} />
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
                <small id={"password1"} className={"redSmallText"} />
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
                <small id={"username1"} className={"redSmallText"} />
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

export default Register;
