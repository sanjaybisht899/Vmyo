import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const showHomeNav = location.pathname !== '/';
  const showRestaurantNav = location.pathname !== '/restaurant';
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          Vmyo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {showHomeNav && (
              <Nav.Link className='headerLinks' href="/">
                Home
              </Nav.Link>
            )}
            {showRestaurantNav && (
              <Nav.Link className='headerLinks' href="/restaurant">
                Restaurants
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
