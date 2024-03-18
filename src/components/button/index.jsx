import React from "react";

import "./styles.scss";

const Button = ({ children, ...rest }) => {
  return <button className={`button ${rest.className}`}>{children}</button>;
};

export default Button;
