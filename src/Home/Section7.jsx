import React from "react";
import "./Home.css";

import g1 from "../Assets/product1.jpg";
import g2 from "../Assets/product2.jpg";
import g3 from "../Assets/product3.jpg";
import g4 from "../Assets/product4.jpg";
import g5 from "../Assets/product1.jpg";
import g6 from "../Assets/product2.jpg";
import g7 from "../Assets/product3.jpg";
import g8 from "../Assets/product4.jpg";

export default function Section7() {
  return (
    <div className="gallery-section">

      <h1 className="gallery-title">View Our Gallery</h1>

      <div className="gallery-grid">
        <img src={g1} alt="" />
        <img src={g2} alt="" />
        <img src={g3} alt="" />
        <img src={g4} alt="" />
        <img src={g5} alt="" />
        <img src={g6} alt="" />
        <img src={g7} alt="" />
        <img src={g8} alt="" />
      </div>

    </div>
  );
}