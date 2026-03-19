import React from "react";
import "./Home.css";

export default function Section10() {
  return (
    <div className="map-section">

      <h1>Our Location</h1>

      <p>Visit us or find us easily on the map below.</p>

      <div className="map-container">
        <iframe
          title="location-map"
          src="https://www.google.com/maps?q=Chennai&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          
        ></iframe>
      </div>

    </div>
  );
}