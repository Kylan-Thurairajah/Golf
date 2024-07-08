import React from "react"
import Container from "react-bootstrap/Container"
import "./App.css" // Assuming you have a separate CSS file for footer styles

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-item">
            <h5>Location</h5>
            <p>123 Golf Club Lane,</p>
            <p>Cityville, Province, Country</p>
          </div>
          <div className="footer-item">
            <h5>Email</h5>
            <p>info@golfclub176.com</p>
          </div>
          <div className="footer-item">
            <h5>Phone</h5>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
