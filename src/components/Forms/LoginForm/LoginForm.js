import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { authorizeUser } from "../../../actions/actions";
import "./styles.scss";

class Login extends Component {
  // creating these states to update them when the data comes from db, but not auth because that is changed from redux.
  constructor(props) {
    super(props);
    this.state = {
      sessionId: "",
      sessionFirstName: "",
      sessionLastName: "",
      sessionUsername: "",
      sessionEmail: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {}

  componentDidUpdate(prevProps, prevState) {}

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
    }).then(data => {
      const result = data.data.response;

      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          // console.log(key + " -> " + result[key]);

          this.setState({ [key]: result[key] });
          sessionStorage.setItem(key.toString(), result[key].toString());
        }
      }

      sessionStorage.setItem("auth", "true");
      this.props.authorizeUser(true);
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

Login.propTypes = {
  auth: PropTypes.func
};

const mapStateToProps = state => ({
  userAuth: state.userInfo.auth
});

export default connect(
  mapStateToProps,
  { authorizeUser }
)(Login);
