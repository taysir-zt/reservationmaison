import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import logosansback from '../assets/logosansback.png';

function Navbare() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary sticky-navbar">
        <Container>
          <img src={logosansback} alt="logo" className="logo" />
          <Navbar.Brand href="#home" className="logo-text">Lotus</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="aya">Home</Nav.Link>
              <Nav.Link href="#about" className="aya">About</Nav.Link>
              <Nav.Link href="#about" className="aya">Contact </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown"className="aya">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                align="end"
                title={
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                    className="rounded-circle"
                    height="30"
                    alt="User Avatar"
                    loading="lazy"
                  />
                }
                id="avatar-dropdown"
              >
                <NavDropdown.Item href="#profile">My profile</NavDropdown.Item>
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navbare;
