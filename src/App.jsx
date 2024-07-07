import { useState } from "react"
import "./App.css"
import Navigation from "./Navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home_About from "./Home_About"
import Home_Benefits from "./Home_Benefits"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <div className="image-container">
        <img
          src="golf-ball.jpg" // Replace with your image URL
          alt="Full Size"
          className="main-img"
        />
        <div className="text-overlay">
          <div className="oswald-text text-large">GOLF CLUB 176</div>
          <div className="oswald-text text-small">Swing Into Serenity</div>
        </div>
      </div>
      <Home_About />
      <Home_Benefits />
    </>
  )
}

export default App
