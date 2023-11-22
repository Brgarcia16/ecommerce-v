import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"
import { products } from "../data/products"

const category = products.map((item) => item.category)
const uniqueCategories = new Set(category);

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <NavLink to="/">
          <Navbar.Brand>Ecommerce</Navbar.Brand>
        </NavLink>
        <Nav className='me-auto'>
          {[...uniqueCategories].map((item) => (
            <Nav.Link as={NavLink} key={item} to={`/category/${item}`}>
              {item}
            </Nav.Link>
          ))}
        </Nav>
        <CartWidget></CartWidget>
      </Container>
    </Navbar>
  )
}