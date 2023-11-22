import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // Ocultar el dropdown al hacer clic en algún elemento del menú desplegable
  const handleDropdownItemClick = () => {
    setShowMenu(false);
  };


  return (
    <Navbar bg="dark" data-bs-theme="dark" id='navbarContainer'>
      <Container fluid>
        <NavLink to="/" className="sin-subrayado">
          <Navbar.Brand id='titleInicio'>Ecommerce-v</Navbar.Brand>
        </NavLink>
        <div className='nav-container'>
          <Nav>
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
        </div>
        <li>
          <div onMouseEnter={() => handleMenuToggle(true)} onMouseLeave={() => handleMenuToggle(false)}>
            <FontAwesomeIcon icon={faUser} id='iconLogin'/>
            {showMenu && (
              <div className={`dropdown ${showMenu ? 'show' : ''}`}>
                <ul>
                  <li onClick={handleDropdownItemClick}>
                    <Link to="/Login" >Login</Link>
                  </li>
                </ul>
              </div>)}
          </div>
        </li>
      </Container>
    </Navbar >
  )
}