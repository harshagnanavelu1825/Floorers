import React from "react";
import "./Home.css";

import img1 from "../Assets/product1.jpg";
import img2 from "../Assets/product2.jpg";
import img3 from "../Assets/product3.jpg";
import img4 from "../Assets/product4.jpg";

export default function Section2() {
  return (
    <div className="grid-container">

      <div className="card">
        <img src={img1} alt="" />
        <div className="overlay">
          <h3>HARDWOOD</h3>
          <p>Premium hardwood flooring solutions.</p>
          <a href="#">Browse Now</a>
        </div>
      </div>

      <div className="card">
        <img src={img2} alt="" />
        <div className="overlay">
          <h3>LAMINATE</h3>
          <p>Durable laminate flooring options.</p>
          <a href="#">Browse Now</a>
        </div>
      </div>

      <div className="card">
        <img src={img3} alt="" />
        <div className="overlay">
          <h3>CARPET</h3>
          <p>Comfortable carpet flooring.</p>
          <a href="#">Browse Now</a>
        </div>
      </div>

      <div className="card">
        <img src={img4} alt="" />
        <div className="overlay">
          <h3>WATERPROOF</h3>
          <p>Modern waterproof flooring.</p>
          <a href="#">Browse Now</a>
        </div>
      </div>

    </div>
  );
}