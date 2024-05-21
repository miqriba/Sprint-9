import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React } from "react";
import { MainContextProvider } from "./context/context.jsx";
import Home from "./components/Home";
import Exercise from "./components/Exercise";
import SelectExercise from "./components/SelectExercise";
import SelectType from "./components/SelectType.jsx";
import Settings from "./components/Settings";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: "100vh" }}
      >
        <MainContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<SelectType />} />
            <Route path="/exercises/:type" element={<SelectExercise />} />
            <Route path="/exercises/:type/:exercise" element={<Exercise />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <NavBar />
        </MainContextProvider>
      </div>
    </Router>
  );
}

export default App;
