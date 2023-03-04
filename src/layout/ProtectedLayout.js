import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import '../assets/styles/Layout.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { doLogout, getUserInfo } from '../services/loginService';
import LoaderComponent from '../common/LoaderComponent';
import { useLoader } from '../redux/loader/loaderSlice';

const ProtectedLayout = () => {
  const loader = useLoader();
  const { username } = getUserInfo();
  const navigator = useNavigate();

  const handleLogout = async () => {
    await doLogout();
    navigator('/login');
  };

  return (
    <LoaderComponent isLoading={loader}>
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
              <Nav className="ms-auto">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
                <Link to="/tasks" className="nav-link">
                  Tasks
                </Link>
                <Link to="/members" className="nav-link">
                  Members
                </Link>
              </Nav>
              <Navbar.Text>
                &nbsp;&nbsp;Signed in as: <span>{username}</span> |{' '}
                <span className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </span>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="pt-5 pb-5">
          <Outlet />
        </Container>
        <footer className="footer">
          <Container>
            <span className="text-muted">&copy; Task management app 2023</span>
          </Container>
        </footer>
      </div>
    </LoaderComponent>
  );
};

export default ProtectedLayout;
