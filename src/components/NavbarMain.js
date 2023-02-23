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
    
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/about">
              О нас
            </NavLink >
            <NavLink className='nav-link' to="/contacts">
             Контакты
            </NavLink>
          </Nav>
       
      </Container>
    </Navbar>
  );
}

export default NavbarMain;