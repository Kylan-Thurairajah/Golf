import React from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./App.css"

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="mr-auto">
          GOLF CLUB 176
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/holes" className="nav-link-custom">
              HOLES
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-custom">
              SERVICES
            </Nav.Link>
            <Nav.Link as={Link} to="/membership" className="nav-link-custom">
              MEMBERSHIP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
