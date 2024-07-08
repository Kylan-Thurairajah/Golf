import React, { useState } from "react"
import Navigation from "./Navigation"
import Home_About from "./Home_About"
import Home_Benefits from "./Home_Benefits"
import Home_Testimonial from "./Home_Testimonial"
import About from "./About"
import Holes from "./Holes"
import Services from "./Services"
import Membership from "./Membership"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function Home() {
  return (
    <>
      <div className="image-container">
        <img src="golf-ball.jpg" alt="Full Size" className="main-img" />
        <div className="text-overlay">
          <div className="oswald-text text-large">GOLF CLUB 176</div>
          <div className="oswald-text text-small">-Swing Into Serenity-</div>
        </div>
      </div>
      <Home_About />
      <Home_Benefits />
      <Home_Testimonial />
    </>
  )
}

export default Home
