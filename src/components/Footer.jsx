import React from "react";
// get fontawesome icons from fontawesome npm package for github, twitter, linkedin and instagram
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer className="footer fixed-bottom text-center">
      {/* icon links for github, linkedin and instagram */}
      <a
        className="icon-links"
        href="https://github.com/Samm1911"
        aria-label="Sam's Github Profile"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="icon-links"
        href="https://www.linkedin.com/in/samia-gostanian/"
        aria-label="Sam's LinkedIn Profile"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="icon-links"
        href="https://www.instagram.com/samgostanian/"
        aria-label="Sam's Instagram Profile"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        className="icon-links"
        href="mailto:s_gostanian@hotmail.com"
        aria-label="Sam's Email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </footer>
  );
}

export default Footer;
