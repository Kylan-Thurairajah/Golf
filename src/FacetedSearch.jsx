import React from "react"
import { Form, Col } from "react-bootstrap"

const FacetedSearch = () => {
  const filterTypes = ["Type1", "Type2", "Type3", "Type4", "Type5", "Type6"]

  return (
    <>
      <Form className="faceted-filter-form">
        <Form.Check
          type="checkbox"
          label="Sand Bunkers"
          name="checkboxGroup"
          id="option1"
        />
        <Form.Check
          type="checkbox"
          label="Water Hazards"
          name="checkboxGroup"
          id="option2"
        />
        <Form.Check
          type="checkbox"
          label="Roughs"
          name="checkboxGroup"
          id="option3"
        />
        <Form.Check
          type="checkbox"
          label="Elevated Tees"
          name="checkboxGroup"
          id="option4"
        />
        <Form.Check
          type="checkbox"
          label="Doglegs"
          name="checkboxGroup"
          id="option4"
        />
      </Form>
    </>
  )
}

export default FacetedSearch
