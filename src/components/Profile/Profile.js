import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";

import "./styles.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const { userAuth, id, firstName, lastName, email, username } = this.props;
    return (
      <div className={"container"}>
        <h3 className={"text-capitalize mt-3 mb-3"}>
          Welcome {firstName} {lastName}!
        </h3>
        <div className="d-flex justify-content-start">
          <div style={{ width: "25%" }}>
            <p>
              This would be where the options to select a location and get an
              estimate on valet{" "}
            </p>
          </div>
          {/* // Important! Always set the container height explicitly */}
          <div style={{ height: "60vh", width: "75%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuth: state.userInfo.auth,
  id: state.userInfo.userProfile.id,
  firstName: state.userInfo.userProfile.firstName,
  lastName: state.userInfo.userProfile.lastName,
  email: state.userInfo.userProfile.email,
  username: state.userInfo.userProfile.username
});

export default connect(mapStateToProps)(Profile);
