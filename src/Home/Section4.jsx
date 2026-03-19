import React from "react";
import "./Home.css";
import aboutImg from "../Assets/product2.jpg";   
export default function Section4() {
  return (
    <div className="about-section">

      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="Flooring" />
        </div>

        <div className="about-content">
          <h2>Satisfying Customers Since 1990</h2>

          <p>
            We provide premium flooring solutions with quality materials
            and professional installation. Our team focuses on durability,
            style and customer satisfaction to deliver the best flooring
            experience for your home.
          </p>

          <button className="about-btn">Learn More About Us</button>
        </div>

      </div>

    </div>
  );
}