import React, { useState } from "react";
import "../styles/joinUs.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function JoinUs() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  // const [user, setUser] = useState(null);
  // const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setNameError(username.length < 2);
    setPassError(password.length < 4);
    setEmailError(email.length < 8);
  };

  return (
    <div className="join__form">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div>
              <h1>Join Us:</h1>
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter user name"
                />
                {nameError && <p>error username</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
                {emailError && <p>wrong email</p>}
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                {passError && <p>password error</p>}
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
