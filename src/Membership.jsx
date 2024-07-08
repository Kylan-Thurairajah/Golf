import React from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"

function Membership() {
  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col>
            <br />
            <h1 className="oswald-text about-text-large">
              Choose Membership Plan
            </h1>
            <br />
            <br />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Full Membership $240/Month</Card.Title>
                <Card.Text>
                  Unlimited access to all facilities, priority tee times,
                  participation in member events and tournaments, discounted
                  rates on services and merchandise, clubhouse amenities,
                  reciprocal privileges, member services, voting rights, special
                  programs, and exclusive offers.
                </Card.Text>
                <Button variant="dark" className="mt-auto">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Jr. Membership - $180/Month</Card.Title>
                <Card.Text>
                  Access to premium facilities, discounted rates on rounds and
                  lessons, participation in junior tournaments and clinics,
                  clubhouse privileges, and special junior member events and
                  programs <br /> <br /> <br />
                </Card.Text>
                <Button variant="dark" className="mt-auto">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Family Membership - $440/Month</Card.Title>
                <Card.Text>
                  all club facilities for all family members, discounted rates
                  on rounds, priority booking, access to social events, junior
                  programs for children, and special family-oriented club
                  activities <br /> <br /> <br />
                </Card.Text>
                <Button variant="dark" className="mt-auto">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Membership
