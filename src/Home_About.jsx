import React from "react"
import "./App.css" // Import your CSS file for styling

function Home_About() {
  return (
    <>
      <div className="home-about-container">
        <div className="left-column">
          <img src="home-about.jpg" alt="Description of the image" />
        </div>
        <div className="right-column">
          <h2 className="home-about-h3">About Golf Club 176</h2>
          <br />
          <p className="home-about-p">
            Originally built in 1976 by world reknown golf course architect
            Fairway Alchemist, this course has been celebrated for its
            innovative design and strategic layout, attracting golfers from
            around the globe who seek both challenge and aesthetic beauty in
            their golfing experience.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home_About
