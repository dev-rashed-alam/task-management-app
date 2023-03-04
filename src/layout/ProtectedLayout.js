import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import '../assets/styles/Layout.css';

const ProtectedLayout = ({ children }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="app logo"
            />
            &nbsp;&nbsp; Task management
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Dashboard</Nav.Link>
              <Nav.Link href="#">Tasks</Nav.Link>
              <Nav.Link href="#">Members</Nav.Link>
            </Nav>
            <Navbar.Text>
              &nbsp;&nbsp;Signed in as: <a href="#">Username</a> | <a href="#">Logout</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
      <footer className="footer">
        <Container>
          <span className="text-muted">&copy; Your Web App Name 2023</span>
        </Container>
      </footer>
    </div>
  );
};

export default ProtectedLayout;
