import React from "react";

import "./styles.scss";

const Footer = () => {
  return (
    <div id={"footerBottom"} className="bg-dark">
      <div className="container text-muted">
        <span>
          Status: In Development as a show for techincal expertise. Estimated
          Completion Date: 9/10/18
        </span>
        <br />
        <span>
          Follow the progress via{" "}
          <a
            className={"noUnderline"}
            href="https://github.com/Caromin"
            target={"_blank"}
          >
            Github
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
