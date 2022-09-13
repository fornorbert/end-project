import React from "react";
import { Button } from "react-bootstrap";
import "../styles/error.css";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <>
      <div className="error__page">
        <h1>Oooops...</h1>
        <img src="https://www.gry-online.pl/i/h/17/347901061.jpg" />
        <Button
          onClick={() => {
            navigate("/home");
          }}
          variant="outline-light"
        >
          Go Home ...
        </Button>
      </div>
    </>
  );
}
