import {NavLink} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarMain() {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand  className='logo'>Мастерская Подарков</Navbar.Brand>
        </NavLink>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/about-us">
              <Nav.Link >Про нас</Nav.Link>
            </NavLink>
            <NavLink>
              <Nav.Link >Контакты</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;