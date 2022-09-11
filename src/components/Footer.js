import React from "react";
import "../styles/footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer__section">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <ul className="block">
              <h3>
                <a>About us</a>
              </h3>
              <li>
                <a>our history</a>
              </li>
              <li>
                <a>our projects</a>
              </li>
              <li>
                <a>our mission</a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <ul className="block">
              <h3>
                <a>Links</a>
              </h3>
              <li>
                <a>bodybuilding</a>
              </li>
              <li>
                <a>crossfit</a>
              </li>
              <li>
                <a>joga</a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <ul className="block">
              <h3>
                <a>Contact Us</a>
              </h3>
              <li>
                <a>by email</a>
              </li>
              <li>
                <a>by post</a>
              </li>
              <li>
                <a>by fax</a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <ul className="block">
              <h3>
                <a>Follow Us</a>
              </h3>
              <li>
                <FaFacebook />
                Facebook
              </li>
              <li>
                <FaTwitter />
                Twitter
              </li>
              <li>
                <FaInstagram />
                Instagram
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
