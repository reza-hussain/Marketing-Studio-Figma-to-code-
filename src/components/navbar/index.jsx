import React from "react";

// assets
import Logo from "assets/logo.svg";

// styles
import "components/navbar/styles.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" />

      <ul className="navbarList">
        <li className="navbarListItem">Home</li>
        <li className="navbarListItem">Services</li>
        <li className="navbarListItem">Work</li>
        <li className="navbarListItem">About</li>
      </ul>

      <button className="navbarButton">Contact Us</button>
    </div>
  );
};

export default Navbar;
