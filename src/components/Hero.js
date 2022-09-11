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
        BMI (Body Mass Index) to wskaźnik zależności między masą ciała a
        wzrostem. Wartość ta jest kluczowa w ocenie ryzyka wystąpienia chorób
        związanych z nadwagą takich jak miażdżyca lub choroba niedokrwienna
        serca. Mogłoby się wydawać, że im niższe BMI, tym ryzyko wystąpienia
        chorób jest mniejsze. Jednak zbyt niskie, tak samo jak zbyt wysokie
        wyniki niosą za sobą zwiększone zagrożenie śmiercią z przyczyn
        sercowo-naczyniowych. Można więc przyjąć, że najlepszą prozdrowotną
        wartością BMI będzie ta znajdująca się w granicach normy [1,2]. W
        dalszej części artykułu poznasz normy dla BMI.
      </p>
    </div>
  );
}
