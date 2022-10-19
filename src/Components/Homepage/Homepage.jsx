import React from "react";
import "./Scss/homepage.css";
import { Hero } from "../Hero/Hero";
import { Popularproduct } from "../PopularProduct/Popularproduct";
import { Delivery } from "../Delivery/Delivery";
import { Testimonial } from "../Testimonial/Testimonial";
import { Newsletter } from "../Newsletter/Newsletter";
import bgImg from "../../Img/bg_img_hero.png";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="bg-con">
        <div className="bg-bubbles">
          <div className="bg-img bg-img1">
            <img src={bgImg} alt="background image1" />
          </div>
          <div className="bg-img bg-img2">
            <img src={bgImg} alt="bg img" />
          </div>
        </div>
      </div>
      <div className="hero-container">
        <Hero />
        <Popularproduct />
      </div>
      <main>
        <Delivery />
        <Testimonial />
        <Newsletter />
      </main>
    </div>
  );
};
