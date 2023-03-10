import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import '../assets/styles/Layout.css';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { doLogout, getUserInfo } from '../services/loginService';

/**
 * The ProtectedLayout component to be displayed when any of the protected path is accessed
 *
 * @component
 * @returns {JSX.Element}
 */
const ProtectedLayout = () => {
  const { username } = getUserInfo();
  const navigator = useNavigate();

  const handleLogout = async () => {
    await doLogout();
    navigator('/login');
  };

  return (
    <div className="body-wrapper">
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/dashboard">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="app logo"
            />
            &nbsp;&nbsp; Task management
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto pe-3">
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
              <NavLink to="/tasks" className="nav-link">
                Tasks
              </NavLink>
              <NavLink to="/members" className="nav-link">
                Members
              </NavLink>
            </Nav>
            <Navbar.Text>
              Signed in as: <span>{username}</span> |{' '}
              <span className="cursor-pointer" onClick={handleLogout}>
                Logout
              </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="body-container">
        <Outlet />
      </Container>
      <footer className="footer">
        <Container>
          <span className="text-muted">&copy; Task management app 2023</span>
        </Container>
      </footer>
    </div>
  );
};

export default ProtectedLayout;
