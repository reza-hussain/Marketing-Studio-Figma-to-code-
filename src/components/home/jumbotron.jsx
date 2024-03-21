import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion";
import audio from "../../assets/audio.mp3";

// components
import Button from "components/button/index";
import ServiceCard from "components/serviceCard/index";
import WorkCard from "components/workCard/index";

// constants
import {
  clients,
  inspirationCards,
  servicesCards,
} from "constants/homeServices";

// assets
import JumbotronImg from "assets/Jumbotron.png";
import About from "assets/about.png";
import Linkedin from "assets/linkedin.svg";
import Instagram from "assets/instagram.svg";
import Twitter from "assets/twitter.svg";
import Dribbble from "assets/dribbble.svg";
import Facebook from "assets/facebook.svg";
import Logo from "assets/logo.svg";

import "./styles.scss";
import "@splidejs/react-splide/css";
import SlideUp from "components/slideUp/index";

const Jumbotron = () => {
  const [activeWorkCard, setActiveWorkCard] = useState(0);

  const splideOptions = {
    type: "loop",
    gap: "10px",
    drag: "free",
    arrows: false,
    pagination: false,
    perPage: 5,
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 1,
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 0, // this will set a delay before the children start animating
        staggerChildren: 0.3, // this will set the time inbetween children animation
      },
    },
  };

  return (
    <div className="home">
      <div className="container jumbotron">
        <motion.div
          vairants={containerVariants}
          animate="visible"
          initial="hidden"
          className="jumbotronContent"
        >
          <SlideUp index={0}>
            <h2>We make brands shine &amp; competitors envious</h2>
          </SlideUp>
          <SlideUp index={1}>
            <p>
              Creative digital marketing studio in New York City that makes
              brands thrive.
            </p>
          </SlideUp>
        </motion.div>
        <div className="jumbotronImage">
          <img src={JumbotronImg} alt="" />
        </div>
      </div>

      <div className="container about">
        <div className="aboutImage">
          <img src={About} alt="" />
        </div>

        <div className="aboutContent">
          <SlideUp index={2}>
            <h4>About us</h4>
          </SlideUp>
          <SlideUp index={3}>
            <h3>360° creative digital marketing studio</h3>
          </SlideUp>
          <SlideUp>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </SlideUp>

          <SlideUp>
            <Button>Read more</Button>
          </SlideUp>
        </div>
      </div>

      <div className="container services">
        <div className="servicesContent">
          <SlideUp>
            <h4>Our Services</h4>
          </SlideUp>
          <SlideUp>
            <h3>Custom &amp; Scalable Marketing Solutions</h3>
          </SlideUp>
          <SlideUp>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </SlideUp>

          <SlideUp>
            <Button>Read more</Button>
          </SlideUp>
        </div>

        <div className="servicesCards">
          {servicesCards?.map((item) => (
            <ServiceCard data={item} />
          ))}
        </div>
      </div>

      <div className="getInspired">
        <div className="getInspiredContent">
          <SlideUp>
            <h4>Get Inspired</h4>
          </SlideUp>
          <SlideUp>
            <h3>Featured Works</h3>
          </SlideUp>

          <SlideUp>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
          </SlideUp>
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
          <motion.h4
            initial={{ opacity: 0, x: -150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, delay: 0.1 },
            }}
          >
            client feedback
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, x: -350 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.3 },
            }}
          >
            Don&apos;t just take our word for it
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 350 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          className="testimonialsContent"
        >
          <h3>
            Younic did an outstanding job redesigning our site and producing our
            latest campaign. The results are jaw-dropping! A truly phenomenal
            team of experts.
          </h3>

          <div className="testimonialsContentAuthor">
            <p>Leyla Boyer, CEO</p>
            <h5>Heboni</h5>
          </div>
        </motion.div>
      </div>
      <div className="ourClients">
        <SlideUp>
          <h4>just a few of our clients</h4>
        </SlideUp>

        <Splide
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          extensions={{ AutoScroll }}
          options={splideOptions}
        >
          {clients?.map((client) => (
            <SplideSlide key={client.image}>
              <div className="ourClientsImage">
                <img src={client.image} alt="" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="container getInTouch">
        <SlideUp>
          <h4>Let&apos;s Talk</h4>
        </SlideUp>
        <SlideUp>
          <h3>Your digital presence is about to take off</h3>
        </SlideUp>
        <SlideUp>
          <p>
            Schedule a free consultation with our team and let’s make things
            happen!
          </p>
        </SlideUp>

        <Button>Get in touch</Button>
      </div>

      {/* FOOTER */}

      <div className="footer">
        <div className="footerColumnContainer">
          <div className="footerColumn">
            <div className="footerColumnImage">
              <img src={Logo} alt="" />
            </div>
            <p className="footerColumnDesc">
              We&apos;re a full-stack digital marketing studio based in the
              center of New York City. From strategy to implementation, we're
              here to help make your brand shine.
            </p>
          </div>

          <div className="footerColumn">
            <h3>Quick Links</h3>
            <ul className="footerColumnLinks">
              <li className="footerColumnLinksItem">Home</li>
              <li className="footerColumnLinksItem">Services</li>
              <li className="footerColumnLinksItem">Work</li>
              <li className="footerColumnLinksItem">About</li>
            </ul>
          </div>

          <div className="footerColumn">
            <h3>Contact Info</h3>
            <p>
              1890 W 52nd Street New York, New York 10019 212-440-1919 Mon-Fri
              9am-6pm
            </p>
          </div>

          <div className="footerColumn">
            <h3 className="footerColumnNewsletter">Join Our Newsletter</h3>
            <p>
              Sign up for our newsletter to enjoy free marketing tips,
              inspirations, and more.
            </p>

            <input type="email" placeholder="Email address" />

            <Button className="aboutButton">Sign Me Up</Button>

            <ul className="footerColumnSocial">
              <img src={Linkedin} alt="" />
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
              <img src={Dribbble} alt="" />
            </ul>
          </div>
        </div>
        <p>© 2022 Younic. All Rights Reserved.</p>

        <div style={{ height: 200, width: 200 }}>
          <audio src={audio}></audio>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
