import React from "react";
import "./Scss/delivery.css";
import coffeeCup1 from "../../Img/c-coffee.png";
import coffeeCup2 from "../../Img/coffee-cup 2.png";
import foodTruck from "../../Img/food-truck 1.png";
import { motion } from "framer-motion";

export const Delivery = () => {
    const transition = {
        type: "spring",
        duration: 1,
        bounce: 0.4,
      };
  return (
    <div className="delivery-container" id="Delivery">
      <div className="heading">
        <h1>
          How to use delivery <span>service</span>
        </h1>
      </div>
      <div className="d-cards-container">
        <motion.div
          className="d-card"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0 }}
        >
          <img src={coffeeCup1} alt="coffee" />
          <h2 className="sub-heading">Choose your coffee</h2>
          <p>there are 20+ coffees for you</p>
        </motion.div>
        <motion.div
          className="d-card"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
        >
          <img src={foodTruck} alt="food truck" />
          <h2 className="sub-heading">Deliver your coffee</h2>
          <p>Choose delivery service</p>
        </motion.div>
        <motion.div
          className="d-card"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <img src={coffeeCup2} alt="coffee 2" />
          <h2 className="sub-heading">Enjoy your coffee</h2>
          <p>there are 20+ coffees for you</p>
        </motion.div>
      </div>
    </div>
  );
};
