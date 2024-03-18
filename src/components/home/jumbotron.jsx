import React from "react";

// components
import Button from "components/button/index";

// assets
import JumbotronImg from "assets/Jumbotron.png";
import About from "assets/about.png";

import "./styles.scss";

const Jumbotron = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="jumbotron">
          <div className="jumbotronContent">
            <h2>We make brands shine &amp; competitors envious</h2>
            <p>
              Creative digital marketing studio in New York City that makes
              brands thrive.
            </p>
          </div>
          <div className="jumbotronImage">
            <img src={JumbotronImg} alt="" />
          </div>
        </div>

        <div className="about">
          <div className="aboutImage">
            <img src={About} alt="" />
          </div>

          <div className="aboutContent">
            <h4>About us</h4>
            <h3>360° creative digital marketing studio</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>

            <Button className="aboutButton">Read more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
