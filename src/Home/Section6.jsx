import React from "react";
import "./Home.css";

import img11 from "../Assets/product2.jpg";
import img12 from "../Assets/product3.jpg";

export default function Section6() {
  return (
    <div className="section6">

  
      <div
        className="bg small-bg"
        style={{ backgroundImage: `url(${img11})` }}
      >
        <div className="Act">
          <h1>Get a free estimate</h1>
          <p>Request us to estimate for free </p>
          
          <button className="btn">Schedule Now</button>
        </div>
      </div>

  
      <div
        className="bg small-bg"
        style={{ backgroundImage: `url(${img12})` }}
      >
        <div className="Act">
          <h1>SERVICES</h1>
          <p>
            We are always ready to help you.
          </p>
          <button className="btn">Explore Now</button>
        </div>
      </div>

    </div>
  );
}