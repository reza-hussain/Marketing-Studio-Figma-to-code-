import React from "react";
import "./styles.scss";

const ServiceCard = ({ data }) => {
  return (
    <div className="servicecard">
      <img src={data.image} alt="" />
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <button>Learn more</button>
    </div>
  );
};

export default ServiceCard;
