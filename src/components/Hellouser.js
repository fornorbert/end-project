import React from "react";
import Card from "react-bootstrap/Card";

export default function Hellouser() {
  return (
    <>
      <Card className="hello">
        <Card.Body>
          <Card.Title className="hello__title">
            Welcome to our Zone!!!
          </Card.Title>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://nebbia.fitness/uploads/47/articles/blog_cover_2020_07_09.jpg"
        />
      </Card>
    </>
  );
}
