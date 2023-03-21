import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Add() {
  const navigate = useNavigate();

  const [Restaurant, setRestaurant] = useState({
    restaurant_name: "",
    contact_name: "",
    pincode: "",
    location: "",
    website: "",
    phone_number: "",
    average_transactions: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurant((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/add`, Restaurant);
      console.log(response.status);
      navigate("/restaurant");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center m-2">
        <Col md={6}>
          <h1 className="text-center">Add New Restaurant</h1>
          <Form>
            <Form.Group controlId="restaurantName">
              <Form.Label>Restaurant Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter restaurant name"
                name="restaurant_name"
                value={Restaurant.restaurant_name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="contactName">
              <Form.Label>Contact Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact name"
                name="contact_name"
                value={Restaurant.contact_name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter pincode"
                name="pincode"
                value={Restaurant.pincode}
                onChange={handleChange}
              />
              
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                name="location"
                value={Restaurant.location}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter website in the format example.com"
                name="website"
                value={Restaurant.website}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone number"
                name="phone_number"
                value={Restaurant.phone_number}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="averageTransactions">
              <Form.Label>Average Transactions</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter average transactions"
                name="average_transactions"
                value={Restaurant.average_transactions}
                onChange={handleChange}
              />
            </Form.Group>

            <Button className="mt-2"
              variant="primary"
              type="submit"
              onClick={handleClick}
            >
              Add Restaurant
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Add;