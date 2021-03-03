import React from "react";
import { Link } from "react-router-dom";
import {
  emailUrl,
  githubUrl,
  linkedinUrl,
  mediumUrl,
} from "../../constants/constants";
import "./home.scss";

export const Home = () => (
  <div className="home">
    <div className="home-menu">
      <a target="_blank" rel="noreferrer" href={mediumUrl}>
        blog
      </a>
      <a target="_blank" rel="noreferrer" href={linkedinUrl}>
        linkedin
      </a>
      <a target="_blank" rel="noreferrer" href={githubUrl}>
        github
      </a>
      <Link to="/resume">resume</Link>
      <a target="_blank" rel="noreferrer" href={emailUrl}>
        email
      </a>
    </div>
  </div>
);
