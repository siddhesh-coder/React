import React from 'react';
import { COMPANY_LOGO } from '../utils/constants';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img className='about-img' src={COMPANY_LOGO}/>
      <h2 className="section-title">About Us</h2>
      <p className="description">
        Welcome to our Food Order App! We are passionate about delivering delicious and high-quality food
        right to your doorstep. Our mission is to make your dining experience convenient, enjoyable, and memorable.
      </p>
      <p className="description">
        At Food Order App, we strive to provide a diverse menu, excellent customer service, and a seamless ordering
        process. Your satisfaction is our top priority.
      </p>
    </div>
  );
};

export default AboutUs;
