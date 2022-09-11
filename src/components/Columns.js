import React from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import "../styles/columns.css";

export default function Columns() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.seekpng.com/png/detail/231-2314205_gym-workout-png-occlusion-training-bands-by-bfr.png"
            />
            <Card.Body>
              <Card.Title>Workout</Card.Title>
              <Card.Text className="card-txt">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.pngitem.com/pimgs/m/470-4704822_bodybuilding-supplement-hd-png-download.png"
            />
            <Card.Body>
              <Card.Title>Nutricion</Card.Title>
              <Card.Text className="card-txt">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.masqueabuelos.com/wp-content/uploads/2019/07/18965158_sDecalogo-nutricion.png"
            />
            <Card.Body>
              <Card.Title>Suplementation</Card.Title>
              <Card.Text className="card-txt">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more...</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
