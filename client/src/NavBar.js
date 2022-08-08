// import { render } from "@testing-library/react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function NavBar({ currentUser }) {
  const [user, setUser] = useState([]);
  if (currentUser && currentUser.admin) {
    return (
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="/">Shrekfest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/entertainment">
                Entertainment
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/food">
                Food/Drink
              </Nav.Link>
              <Nav.Link as={Link} to="/code">
                Dress Code
              </Nav.Link>
              <Nav.Link as={Link} to="/friend">
                Bring a friend/Make a friend
              </Nav.Link>
              <Nav.Link as={Link} to="/gethere">
                Get Here
              </Nav.Link>
              <Nav.Link as={Link} to="/rsvp">
                RSVP
              </Nav.Link>
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link as={Link} to="/logout">
            Logout
          </Nav.Link>
        </Container>
      </Navbar>
    );
  }
  if (currentUser && currentUser.id) {
    return (
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="/">Shrekfest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/entertainment">
                Entertainment
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/food">
                Food/Drink
              </Nav.Link>
              <Nav.Link as={Link} to="/code">
                Dress Code
              </Nav.Link>
              <Nav.Link as={Link} to="/friend">
                Bring a friend/Make a friend
              </Nav.Link>
              <Nav.Link as={Link} to="/gethere">
                Get Here
              </Nav.Link>
              <Nav.Link as={Link} to="/rsvp">
                RSVP
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link as={Link} to="/logout">
            Logout
          </Nav.Link>
        </Container>
      </Navbar>
    );
  }
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">Shrekfest 2022</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/entertainment">
              Entertainment
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/food">
              Food/Drink
            </Nav.Link>
            <Nav.Link as={Link} to="/code">
              Dress Code
            </Nav.Link>
            <Nav.Link as={Link} to="/friend">
              Bring a friend/Make a friend
            </Nav.Link>
            <Nav.Link as={Link} to="/gethere">
              Get Here
            </Nav.Link>
            <NavDropdown title="Sign In/Sign Up" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/signin">
                Sign In
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/signup">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
