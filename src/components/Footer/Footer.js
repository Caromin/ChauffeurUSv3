import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <div id={"footerBottom"} className="bg-dark">
      <div className="container text-muted">
        <span>Status: In Development as a show for techincal expertise.</span>
        <br />
        <span>
          Follow the progress via{" "}
          <a href="https://github.com/Caromin" target={"_blank"}>
            Github
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
