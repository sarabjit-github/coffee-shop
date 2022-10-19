import React, { useState, useLayoutEffect } from "react";
import "./Scss/testimonial.css";
import bgImg from "../../Img/bg-image-about.png";
import pGirl from "../../Img/p-girl.png";
import pBoy from "../../Img/p-boy.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

export const Testimonial = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateDimensions = ()=>{
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  }
  useLayoutEffect(()=>{
    window.addEventListener("resize", updateDimensions);
    return ()=>{
      window.removeEventListener("resize", updateDimensions);
    }
  })
  return (
    <section className="tm-con">
      <div className="bg-img">
        <img src={bgImg} alt="background img" />
      </div>
      <div className="tc-con">
        <div className="heading">
          <h1>What they say about us</h1>
          <p>
            We always provide the best service and always maintain the quality
            of coffee
          </p>
        </div>

        <div className="slider">
          <Swiper
            slidesPerView={windowWidth > 768 ? 3: windowWidth > 600 ? 2: 1 }
            spaceBetween={100}
            pagination={{
              clickable: true,
            }}
            draggable
            grabCursor
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="tp-con">
                <div className="img">
                  <img src={pGirl} alt="profile img" />
                </div>
                <div className="tt-con">
                  <h3>Naura</h3>
                  <p>
                    I really love the cappucino, the coffee was very smooth.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-con">
                <div className="img">
                  <img src={pBoy} alt="profile img" />
                </div>
                <div className="tt-con">
                  <h3>John</h3>
                  <p>
                  the coffee menu here is very much
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-con">
                <div className="img">
                  <img src={pGirl} alt="profile img" />
                </div>
                <div className="tt-con">
                  <h3>Naura</h3>
                  <p>
                    I really love the cappucino, the coffee was very smooth.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-con">
                <div className="img">
                  <img src={pBoy} alt="profile img" />
                </div>
                <div className="tt-con">
                  <h3>Ajay</h3>
                  <p>
                  this coffee shop is very convenient
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tp-con">
                <div className="img">
                  <img src={pGirl} alt="profile img" />
                </div>
                <div className="tt-con">
                  <h3>Naura</h3>
                  <p>
                    I really love the cappucino, the coffee was very smooth.
                  </p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  );
};
