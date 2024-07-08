import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import CustomCard from "./Card"
import FacetedSearch from "./FacetedSearch"
import "./App.css"

// Sample data for cards
const cardData = [
  { id: 1, title: "Hole 1", image: "hole1.jpg", category: "Category 1" },
  { id: 2, title: "Hole 2", image: "hole2.jpg", category: "Category 2" },
  { id: 3, title: "Hole 3", image: "hole3.jpg", category: "Category 1" },
  { id: 4, title: "Hole 4", image: "hole4.jpg", category: "Category 3" },
  { id: 5, title: "Hole 5", image: "hole5.jpg", category: "Category 2" },
  { id: 6, title: "Hole 6", image: "hole6.jpg", category: "Category 1" },
]

function Holes() {
  return (
    <>
      <br />
      <br />
      <br />
      <Row>
        <Col>
          {}
          <FacetedSearch />
        </Col>
        <Col md={7}>
          {}

          {cardData.map((card) => (
            <Row key={card.id} className="mb-4">
              <Col>
                <CustomCard title={card.title} image={card.image} />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </>
  )
}

export default Holes
