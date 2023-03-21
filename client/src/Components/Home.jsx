import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllPages() {
  let cardStyle ={
    width: "100%",
    height: "10rem",
    fontSize: "2rem",
    marginBottom: "1rem",
  }
  let linkStyle ={
    textDecoration:"none",
  }
  let cardBodyStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }
  return (
    <>
      <Container className="text-center">
        <Row className="mb-5 mt-5">
          <h1>Welcome to Vymo food delivery</h1>
        </Row>
        <Row className="mt-5">
          <Col sm={12} md={6}>
            <Link to="/add" style ={linkStyle}>
              <Card style ={cardStyle}>
                <Card.Body className="d-flex justify-content-center align-items-center" style={cardBodyStyle}>
                  Add Restaurant
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col sm={12} md={6}>
            <Link to="/restaurant" style ={linkStyle}>
              <Card style ={cardStyle}>
                <Card.Body className="d-flex justify-content-center align-items-center" style={cardBodyStyle}>
                  Show all Restaurant
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllPages;
