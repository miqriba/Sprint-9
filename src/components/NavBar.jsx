import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <button className="navButton" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="navButton" onClick={() => navigate("/exercises")}>
          Exercises
        </button>
        <button className="navButton" onClick={() => navigate("/settings")}>
          Settings
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
