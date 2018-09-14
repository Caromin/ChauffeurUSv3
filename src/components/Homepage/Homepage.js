import React from "react";

import "./styles.scss";

const Homepage = () => {
  return (
    <div>
      <div className={"jumbotron marginTopBottom"}>
        <div>
          <h2>Welcome to ChauffeurUSv3</h2>
          <p>
            Be in controller where you go, but let us handle the parking{" "}
            {"{Demo}"}.
          </p>
        </div>
      </div>
      <div id={"bannerImg"} className={"jumbotron"} />
      <div className={"d-flex flex-wrap justify-content-sm-center"}>
        <div className={"max300px marginLeftRight"}>
          <img src={require("../../../public/images/col1.jpg")} />
          <br />
          <p className={"textLeft marginTopBottom"}>
            One tap and a chauffeur comes directly to you. Just turnover the
            keys and valets park your car in a nearby parking location. When
            you're done, just alert the driver through the website and app.
            Payment is completely seamless through the website and app.
          </p>
        </div>
        <div className={"max300px marginLeftRight"}>
          <img src={require("../../../public/images/col2.jpg")} />
          <br />
          <p className={"textLeft marginTopBottom"}>
            Rates are resonably priced and estimates are always available
            through our website and app. Great for any occasion where you want
            to drive yourself, but not hassle with parking once you arrive. Let
            us worry about parking.
          </p>
        </div>
        <div className={"max300px marginLeftRight"}>
          <img src={require("../../../public/images/col3.jpg")} />
          <br />
          <p className={"textLeft marginTopBottom"}>
            Hello, if you got this far, please note that this website is not
            real. It is a web development tech demo. It uses the following to
            function correctly: ReactJS, React-Bootstrap, Redux, React-Router,
            MongoDB, Passport.js. Along with other minor packages here and
            there. In the footer are links to my github and profile.
          </p>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Homepage;
