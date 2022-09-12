import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Columns from "./components/Columns";
import Workout from "./components/Workout";
import Nutricion from "./components/Nutricion";
import Suplementation from "./components/Suplementation";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import Error from "./components/Error";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/home" element={<Carousel />}></Route>
            <Route path="/hero" element={<Hero />}></Route>
            <Route path="/columns" element={<Columns />}></Route>
            <Route path="/workout" element={<Workout />}></Route>
            <Route path="/nutricion" element={<Nutricion />}></Route>
            <Route path="/suplementation" element={<Suplementation />}></Route>
            <Route path="/joinus" element={<JoinUs />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
