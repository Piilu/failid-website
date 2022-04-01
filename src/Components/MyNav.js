import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';

function MyNav(props) {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Pilv</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/register">Profiil</Nav.Link>
      <Nav.Link  href="/register">Failid</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
 
    );
}

export default MyNav;