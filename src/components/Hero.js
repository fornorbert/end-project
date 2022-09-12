import React from "react";
import "../styles/hero.css";
import Bmi from "./Bmi";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__section">
        <div>
          <Bmi className="hero__bmi" />
        </div>
      </div>
      <p>
        Body Mass Index (BMI) is a person’s weight in kilograms (or pounds)
        divided by the square of height in meters (or feet). A high BMI can
        indicate high body fatness. BMI screens for weight categories that may
        lead to health problems, but it does not diagnose the body fatness or
        health of an individual.
      </p>
    </div>
  );
}
