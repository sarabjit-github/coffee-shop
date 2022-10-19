import React from 'react';
import "./Scss/newsletter.css";

export const Newsletter = () => {
  return (
    <section className='newsletter-con'>
        <div className="n-con">
            <div className="heading"><h1>Subscribe to get 50% discount price</h1></div>
            <div className="n-input">
                <input type="email" placeholder='Email address'/>
                <button className='btn'>Subscribe</button>
            </div>
        </div>
    </section>
  )
}
