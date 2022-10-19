import React from "react";
import "./Scss/footer.css";
import logo from "../../Img/logo_coffe.svg";
import { Link } from "react-router-dom";
import linkedin from "../../Img/linkedin.svg";
import instagram from "../../Img/instagram.svg";
import youtube from "../../Img/youtube.svg";
import twitter from "../../Img/twitter.svg";
import facebook from "../../Img/facebook.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="f-con">
        <div className="company-info">
          <div className="logo">
            <img src={logo} alt="footer logo" />
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quo voluptates porro nostrum expedita cupiditate explicabo
            repellendus assumenda quasi eum.
          </div>
        </div>
        <div className="links-con">
          <div className="site-map">
            <h3>Sitemap</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/ourproduct">Our Product</Link>
          </div>
          <div className="social">
            <h3>Follow us</h3>
            <a href="#">
              <img src={instagram} alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="#">
              <img src={linkedin} alt="Linkedin" />
              <span>Linkedin</span>
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
              <span>Facebook</span>
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
              <span>Twitter</span>
            </a>
            <a href="#">
              <img src={youtube} alt="Youtube" />
              <span>Youtube</span>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p className="credit">
            Figma design credit:{" "}
            <a href="https://www.figma.com/@Rauliqbal" target="_blank">Rauliqbal</a>
          </p>
          <p>&copy; 2022 Cafestreet All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
