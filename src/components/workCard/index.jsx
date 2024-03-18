import React from "react";

import "./styles.scss";

const WorkCard = ({ data, setActive, active, index }) => {
  return (
    <div
      className={`workCard ${active === index ? "workCardActive" : ""}`}
      onMouseOver={() => setActive(index)}
    >
      <div className="workCardImage">
        <img src={data.image} alt="" />
      </div>
      <div className="workCardContent">
        <h4>DESIGN</h4>
        <h3>{data.title}</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>

        <button>Learn more</button>
      </div>
    </div>
  );
};

export default WorkCard;
