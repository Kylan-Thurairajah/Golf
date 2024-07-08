import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./App.css"

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="mr-4 oswald-text">
          GOLF CLUB 176
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Link href="/" className="nav-link-custom mx-2 oswald-text">
              HOME
            </Nav.Link>
            <Nav.Link
              href="/About"
              className="nav-link-custom mx-2 oswald-text"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="/Holes"
              className="nav-link-custom mx-2 oswald-text"
            >
              HOLES
            </Nav.Link>
            <Nav.Link
              href="/Services"
              className="nav-link-custom mx-2 oswald-text"
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              href="/Membership"
              className="nav-link-custom mx-2 oswald-text"
            >
              MEMBERSHIP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
