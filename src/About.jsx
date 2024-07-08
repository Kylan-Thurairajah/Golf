import React from "react"
import Container from "react-bootstrap/Container"
import "./App.css"

function About() {
  return (
    <>
      <div className="about-image-container">
        <img src="aboutt.jpg" alt="Full Size" className="about-img" />
        <div className="about-text-overlay">
          <div className="oswald-text about-text-large">About Us</div>
          <div className="oswald-text about-text-small">-Who We Are-</div>
        </div>
      </div>
      <h1 className="about-text-large oswald-text">Our Mission</h1>
      <p className="about-text-small oswald-text">
        At Golf Club 176, we pride ourselves on offering an exceptional golfing
        experience nestled in the heart of serene landscapes. With a rich
        history dating back decades, our club blends tradition with modern
        amenities, ensuring every visit is memorable. Join us and discover why
        Golf Club 176 is a preferred destination for golf enthusiasts.
      </p>
      <br />
      <br />
    </>
  )
}

export default About
