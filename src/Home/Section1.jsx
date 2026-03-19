import React from 'react'
import "./Home.css";
import bg from "../Assets/product1.jpg";

export default function Section1() {
  return (<>
 <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-card">
        <h1>FLOORING & <br /> CARPETING</h1>

        <p>
          Welcome to best flooring & carpeting Services, your <br />
          one-stop solution for exceptional flooring & carpeting <br />
          services!
        </p>

        <button className="btn">GET A FREE ESTIMATE</button>
      </div>
    </div>
  </> )
}
