import React, { useEffect, useState } from "react";
import validation from "./Validation";
import "../styles/joinUs.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Signup({ submitForm }) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [correctData, setCorrectData] = useState(false);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setCorrectData(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && correctData) {
      submitForm(true);
    }
  }, [errors]);
  return (
    <div className="container__form">
      <div className="wrapper">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <div>
                <h2 className="title">Join Us!</h2>
              </div>
              <Form className="form__wrapper">
                <Form.Group
                  className="join__form mb-3"
                  controlId="formBasicText"
                >
                  <div className="name">
                    <Form.Label className="label">Username</Form.Label>
                    <Form.Control
                      placeholder="Enter your username"
                      className="input"
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    {errors.username && (
                      <p className="error">{errors.username}</p>
                    )}
                  </div>
                </Form.Group>
                <Form.Group
                  className="join__form mb-3"
                  controlId="formBasicEmail"
                >
                  <div className="email">
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control
                      placeholder="Enter your email adress"
                      className="input"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </Form.Group>
                <Form.Group
                  className="join__form mb-3"
                  controlId="formBasicPassword"
                >
                  <div className="password">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control
                      placeholder="Create your unique password"
                      className="input"
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="submit"
                  onClick={handleFormSubmit}
                >
                  SIGN UP
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
