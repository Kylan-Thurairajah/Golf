import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./App.css"

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="mr-4 oswald-text">
          GOLF CLUB 176
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Link href="#home" className="nav-link-custom mx-2 oswald-text">
              HOME
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav-link-custom mx-2 oswald-text"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#holes"
              className="nav-link-custom mx-2 oswald-text"
            >
              HOLES
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="nav-link-custom mx-2 oswald-text"
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              href="#membership"
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
