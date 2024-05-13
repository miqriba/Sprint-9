import * as Tone from "tone";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React, useContext, useState } from "react";
import { MainContext } from "./context/context";
import Home from "./components/Home";
import Exercise from "./components/Exercise";
import SelectExercise from "./components/SelectExercise";
import Settings from "./components/Settings";
import NavBar from "./components/NavBar";

function App() {
  if (Tone.BaseContext.state !== "running") {
    Tone.start();
  }
  const cont = useContext(MainContext);

  return (
    <Router>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: "100vh" }}
      >
        <MainContext.Provider value={cont}>
          <Routes>
            {/* <SelectExercise /> */}
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercise />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <NavBar />
        </MainContext.Provider>
      </div>
    </Router>
  );
}

export default App;
