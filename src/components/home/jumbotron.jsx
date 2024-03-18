import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// components
import Button from "components/button/index";
import ServiceCard from "components/serviceCard/index";
import WorkCard from "components/workCard/index";

// constants
import { inspirationCards, servicesCards } from "constants/homeServices";

// assets
import JumbotronImg from "assets/Jumbotron.png";
import About from "assets/about.png";

import "./styles.scss";
import "@splidejs/react-splide/css";

const Jumbotron = () => {
  const [activeWorkCard, setActiveWorkCard] = useState(0);

  const splideOptions = {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
    pagination: false,
    arrow: false,
  };

  return (
    <div className="home">
      <div className="container jumbotron">
        <div className="jumbotronContent">
          <h2>We make brands shine &amp; competitors envious</h2>
          <p>
            Creative digital marketing studio in New York City that makes brands
            thrive.
          </p>
        </div>
        <div className="jumbotronImage">
          <img src={JumbotronImg} alt="" />
        </div>
      </div>

      <div className="container about">
        <div className="aboutImage">
          <img src={About} alt="" />
        </div>

        <div className="aboutContent">
          <h4>About us</h4>
          <h3>360° creative digital marketing studio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p>

          <Button className="aboutButton">Read more</Button>
        </div>
      </div>

      <div className="container services">
        <div className="servicesContent">
          <h4>Our Services</h4>
          <h3>Custom &amp; Scalable Marketing Solutions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p>

          <Button>Read more</Button>
        </div>

        <div className="servicesCards">
          {servicesCards?.map((item) => (
            <ServiceCard data={item} />
          ))}
        </div>
      </div>

      <div className="getInspired">
        <div className="getInspiredContent">
          <h4>Get Inspired</h4>
          <h3>Featured Works</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </p>
        </div>

        <div className="getInspiredCards">
          {inspirationCards?.map((card, index) => (
            <WorkCard
              data={card}
              setActive={setActiveWorkCard}
              active={activeWorkCard}
              index={index}
            />
          ))}
        </div>

        <Button className="aboutButton">Know more</Button>
      </div>
      <div className="container testimonials">
        <div className="testimonialsHeading">
          <h4>client feedback</h4>
          <h3>Don&apos;t just take our word for it</h3>
        </div>

        <div className="testimonialsContent">
          <h3>
            Younic did an outstanding job redesigning our site and producing our
            latest campaign. The results are jaw-dropping! A truly phenomenal
            team of experts.
          </h3>

          <div className="testimonialsContentAuthor">
            <p>Leyla Boyer, CEO</p>
            <h5>Heboni</h5>
          </div>
        </div>
      </div>
      <div className="ourClients">
        <h4>just a few of our clients</h4>

        <Splide options={splideOptions}></Splide>
      </div>
    </div>
  );
};

export default Jumbotron;
