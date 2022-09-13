import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/bmi.css";

export default function Bmi() {
  const [height, setHeight] = useState();
  const [mass, setMass] = useState();
  const [bmi, setBmi] = useState();

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = mass / height ** 2;
    setBmi(bmi);
  };

  return (
    <Card className="card__bmi">
      <Card.Body>
        <div className="hero__bmi">
          <strong className="bmi__head"> Lets check your Bmi...</strong>
          <form onSubmit={calculate}>
            <div className="bmi__height bmi__input">
              <label>What is Your height?: </label>
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="bmi__mass bmi__input">
              <label>What is Your weight?: </label>
              <input value={mass} onChange={(e) => setMass(e.target.value)} />
            </div>
            <Button variant="success" type="submit">
              Calculate
            </Button>
          </form>
          <div className="bmi__resoult">
            <label>Your Bmi is: </label>
            <input value={bmi} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
