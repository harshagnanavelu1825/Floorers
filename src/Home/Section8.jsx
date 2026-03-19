import React from "react";
import "./Home.css";

export default function Section8() {
  return (
    <div className="estimate-section">

      <h1>Get a Free Estimate</h1>

      <p className="estimate-text">
        Get in touch with us, or call our team at <b>909-342-2521</b> today!
      </p>

      <form className="estimate-form">

        <div className="form-grid">
          <input type="text" placeholder="Full Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="tel" placeholder="Phone*" required />
          <input type="text" placeholder="Zip*" required />

          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="date" />
        </div>

        <h3>Interested In</h3>

        <div className="checkbox-grid">
          <label><input type="checkbox"/> Carpet</label>
          <label><input type="checkbox"/> Laminate</label>
          <label><input type="checkbox"/> Rubber</label>
          <label><input type="checkbox"/> Vinyl</label>
          <label><input type="checkbox"/> Linoleum</label>
          <label><input type="checkbox"/> Tracks</label>
          <label><input type="checkbox"/> Hardwood</label>
          <label><input type="checkbox"/> Glass Tile</label>
          <label><input type="checkbox"/> Luxury Vinyl</label>
          <label><input type="checkbox"/> Tile</label>
          <label><input type="checkbox"/> Bamboo</label>
          <label><input type="checkbox"/> Marble</label>
        </div>

        <textarea placeholder="Message"></textarea>

        <button className="btn">Send</button>

      </form>

    </div>
  );
}