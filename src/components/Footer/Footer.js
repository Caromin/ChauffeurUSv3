import React from "react";

import "./styles.scss";

const Footer = () => {
  return (
    <div id={"footerBottom"} className="bg-dark">
      <div className="container text-muted">
        <small>
          Status: Finished(Lost Interest) Didn't add more login validation and
          database interaction. Profile Page Under developed. Last Updated:
          9/14/18
        </small>
        <br />
        <small>
          Follow the progress via{" "}
          <a
            className={"noUnderline"}
            href="https://github.com/Caromin"
            target={"_blank"}
          >
            Github
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
