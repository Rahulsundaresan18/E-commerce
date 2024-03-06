import React from "react";
import "./Offers.css";
import exclusive_image from '../Assests/exclusive_image.png'

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on best sellers produts</p>
        <button>Check now</button>
      </div>
      <div className="offers-right"></div>
      <img src={exclusive_image} alt=""></img>
    </div>
  );
};

export default Offers;
