import { emailUrl, linkedinUrl } from "../../constants/constants";
import "./about.scss";

export const About = () => (
  <div className="about">
    <div className="about-content">
      <h3 className="about-title">about</h3>
      <p>hi! i'm wenyi.</p>
      <p>
        i'm a software engineer currently working at aws in the bay area. before
        that, i went to ucsd for my undergrad in computer science.
      </p>
      <p>
        i'm interested in full-stack web development and artificial
        intelligence. i enjoy delivering new products and tackling hard
        challenges. 
      </p>
      <p>
        in my free time i like to trade stonks, drink beer, and travel.
      </p>
      <p>
        feel free to connect on
        <a target="_blank" rel="noreferrer" href={linkedinUrl}>
          {" "}
          linkedin{" "}
        </a>
        or reach out through
        <a href={emailUrl}>
          {" "}
          email
        </a>
        !
      </p>
    </div>
  </div>
);
