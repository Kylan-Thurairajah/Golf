import React from "react"
import { Card } from "react-bootstrap"

const CustomCard = ({ title, image }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CustomCard
