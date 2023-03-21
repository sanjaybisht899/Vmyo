import axios from "axios";
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Update() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const navigate = useNavigate();

    const [restaurant, setRestaurant] = useState({
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
    const fetchData = useCallback(async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/restaurant/${id}`);
        const data = response.data;
        setRestaurant({
            restaurant_name: data.restaurant_name,
            contact_name: data.contact_name,
            pincode: data.pincode,
            location: data.location,
            website: data.website,
            phone_number: data.phone_number,
            average_transactions: data.average_transactions,
        });
        
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleClick = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/update/${id}`, restaurant);
            navigate("/restaurant");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center m-2">
                <Col md={6}>
                    <h1 className="text-center">Update New Restaurant</h1>
                    <Form>
                        <Form.Group controlId="restaurantName">
                            <Form.Label>Restaurant Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter restaurant name"
                                name="restaurant_name"
                                value={restaurant.restaurant_name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="contactName">
                            <Form.Label>Contact Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter contact name"
                                name="contact_name"
                                value={restaurant.contact_name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="pincode">
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter pincode"
                                name="pincode"
                                value={restaurant.pincode}
                                onChange={handleChange}
                                required
                            />
                            <Form.Text className="text-muted" style={{ fontSize: "small" }}>
                                Please enter a 6-digit pincode.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="location">
                            <Form.Label>Location
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter location"
                                name="location"
                                value={restaurant.location}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="website">
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter website"
                                name="website"
                                value={restaurant.website}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter phone number"
                                name="phone_number"
                                value={restaurant.phone_number}
                                onChange={handleChange}
                                required
                            />
                            <Form.Text className="text-muted" style={{ fontSize: "small" }}>
                                Please enter a 10-digit phone number.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="averageTransactions">
                            <Form.Label>Average Transactions</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter average transactions"
                                name="average_transactions"
                                value={restaurant.average_transactions}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button className="mt-2" variant="primary" type="submit" onClick={handleClick}>
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}

export default Update;



