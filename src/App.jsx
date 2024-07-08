import React from "react"
import Navigation from "./Navigation"
import About from "./About"
import Holes from "./Holes"
import Services from "./Services"
import Membership from "./Membership"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/holes" element={<Holes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
