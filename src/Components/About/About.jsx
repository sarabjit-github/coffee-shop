import React from "react";
import "./Scss/about.css";
import aCoffee from "../../Img/a-coffee.png";
import { motion } from "framer-motion";

export const About = () => {
  const transition = {
    type: "spring",
    duration: 1,
    bounce: 0.4,
  };
  return (
    <>
      {/* <Navbar deliveryTab={false} /> */}
      <section className="about">
        <div className="a-left">
          <motion.div
            className="a-img"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <img src={aCoffee} alt="about coffee" />
          </motion.div>
        </div>
        <motion.div
          className="a-right"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <div className="heading">
            <h1>
              About <span>us</span>
            </h1>
          </div>
          <p className="sub-heading">
            We provide quality coffee, and ready to deliver.
          </p>
          <p>
            We are a company that makes and distributes delicious drinks. our
            main product is made with a secret recipe and available in stores
            worldwide.
          </p>
          <div>
            <button className="btn">Get your coffee</button>
          </div>
        </motion.div>
      </section>
    </>
  );
};
