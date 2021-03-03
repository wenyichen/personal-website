import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  emailAddress,
  githubUrl,
  linkedinUrl,
  mediumUrl,
} from "../../constants/constants";
import "./home.scss";

const Email = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  let displayText = "email";
  if (isHovered) {
    displayText = emailAddress;
  }
  if (isCopied) {
    displayText = "copied";
  }

  const transitions = useTransition(displayText, null, {
    from: {
      position: "absolute",
      left: "-50%",
      transform: "translateX(-50%)",
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: { opacity: 0 },
  });

  const onCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <span
      className="home-menu-email"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {transitions.map(({ item, key, props }) => (
        <CopyToClipboard text={emailAddress} onCopy={onCopy}>
          <animated.a key={key} style={props}>
            {item}
          </animated.a>
        </CopyToClipboard>
      ))}
    </span>
  );
};

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
      <Email />
    </div>
  </div>
);
