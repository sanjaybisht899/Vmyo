import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer() {
  const footerStyle = {
    fontSize: '12px'
  }
  return (
    <>
      <div className='footerstyle text-white bg-black fixed-bottom' >
        <Container>
          <Row className="justify-content-md-center mt-0" style={footerStyle}>
            <p className="text-center my-0">Copyright © 2023 Vymo </p>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
