import { NavLink } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"
import { Button } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <NavLink to="/" className="sin-subrayado">
          <Navbar.Brand id='titleInicio'>Ecommerce-v</Navbar.Brand>
        </NavLink>
        <Nav className='nav-container'>
          <li>
            <Link to="/Inicio" className="nav-link">Inicio</Link>
          </li>
          <li>
            <Link to="/productos" className="nav-link">Producto</Link>
          </li>
          <li>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>
          <li>
            <Link to="/agenda" className="nav-link">Agenda</Link>
          </li>
        </Nav>

        <li>
          <Link to="/login" className='nav-link-login'>Login</Link>
        </li>
      </Container>
    </Navbar>
  )
}