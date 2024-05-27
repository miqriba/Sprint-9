import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container-fluid " style={{ whiteSpace: "no-wrap" }}>
        <button
          className="d-flex flex-column align-items-center navButton"
          onClick={() => navigate("/")}
          style={{ border: "none", boxShadow: "none" }}
        >
          <i className="bi bi-house-door fs-2"></i>
          Home
        </button>
        <button
          className="d-flex flex-column align-items-center navButton"
          onClick={() => navigate("/exercises")}
          style={{ border: "none", boxShadow: "none" }}
        >
          <i className="bi bi-book fs-2"></i>
          Exercises
        </button>
        {/* <button
          className="d-flex flex-column align-items-center navButton"
          // onClick={() => navigate("/stats")}
          style={{ border: "none", boxShadow: "none" }}
        >
          <i className="bi bi-bar-chart fs-2"></i>
          Statistics
        </button> */}
        <button
          className="d-flex flex-column align-items-center navButton"
          onClick={() => navigate("/settings")}
          style={{ border: "none", boxShadow: "none" }}
        >
          <i className="bi bi-gear fs-2"></i>
          Settings
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
