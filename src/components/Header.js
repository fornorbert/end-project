import React from "react";
import "../styles/header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import {} from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="header__section">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to="/home">
              <Navbar.Brand className="logo">BICEK.pl 💪🏻</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link to="/hero">
                  <Nav className="header__link">Bmi</Nav>
                </Link>
                <Link to="/columns">
                  <Nav className="header__link">About</Nav>
                </Link>
                <Link to="/workout">
                  <Nav className="header__link">Workout</Nav>
                </Link>
                <Link to="/nutricion">
                  <Nav className="header__link">Nutricion</Nav>
                </Link>
                <Link to="/suplementation">
                  <Nav className="header__link">Suplementation</Nav>
                </Link>

                <Link to="/joinus">
                  <Button variant="danger">Join Us</Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
