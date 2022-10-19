import React from 'react';
import "./Scss/notfound.css";
import notFoundImg from "../../Img/not_found.png";

export const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={notFoundImg} alt="Not found" />
      <h1>Page not found :(</h1>
    </div>
  )
}
