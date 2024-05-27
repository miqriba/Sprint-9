import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
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
import ThemeProvider from "./components/ThemeContext.jsx";

function App() {
  return (
    <Router>
      <ThemeProvider>
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
      </ThemeProvider>
    </Router>
  );
}

export default App;
