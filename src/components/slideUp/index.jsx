import React from "react";
import { motion } from "framer-motion";

const SlideUp = ({ children }) => {
  // const styles = {
  //   width: "100%",
  //   textAlign: "center",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "centers",
  // };

  const options = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      viewport={{ once: true, amount: 0.5 }}
      variants={options}
      whileInView="visible"
      initial="hidden"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
