import React from 'react';
import "./Scss/loader.css";
import coffeeGIF from "../../Img/coffee-loader.gif";

export const Loader = () => {
  return (
    <div className='loader-wrapper'>
        <img src={coffeeGIF} alt="loading.." />
    </div>
  )
}
