import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/Restaurant.css";
import { Container, Row, Table } from "react-bootstrap";
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin4Line } from 'react-icons/ri'

function Restaurant() {
    const [Restaurant, setRestaurant] = useState([]);
    useEffect(() => {
        const fetchAllRestaurant = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/restaurant`);
                setRestaurant(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllRestaurant();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/delete/` + id);
            window.location.reload();
        } catch (error) { }
    };
    
    return (
        <Container>
            <Row className="display-2 text-center mb-5">
                <p>Restaurants</p>
            </Row>
            {Restaurant.length > 0 ?
            <Row>
                <Table responsive="xl">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact Name</th>
                            <th>Pincode</th>
                            <th>Location</th>
                            <th>Website</th>
                            <th>Phone No</th>
                            <th>Average Daily Transactions</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Restaurant.map((item) => (
                            <tr key={item.id}>
                                <td>{item.restaurant_name}</td>
                                <td>{item.contact_name}</td>
                                <td>{item.pincode}</td>
                                <td>{item.location}</td>
                                <td>{item.website}</td>
                                <td>{item.phone_number}</td>
                                <td>{item.average_transactions}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}><FiEdit size={25} /></Link>
                                </td>
                                <td>
                                    <RiDeleteBin4Line style={{ color: "red" }} size={25} onClick={() => handleDelete(item.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
            :
            <Row className="text-center">
                <p>No restaurants found.</p>
            </Row>
            }
            <Row className="mt-3 d-flex">
                <div className="text-center">
                    <Link to="/add" className="btn btn-outline-success">Add New Restaurant</Link>
                </div>
            </Row>
        </Container>
    );
}

export default Restaurant;
