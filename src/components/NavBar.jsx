import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/context";

function NavBar() {
  const navigate = useNavigate();

  const { isNavBarVisible } = useContext(MainContext);

  return (
    <nav className={`navbar ${isNavBarVisible ? "" : "display-none"}`}>
      <div className="container-fluid " style={{ whiteSpace: "no-wrap" }}>
        {/* <button
          className="d-flex flex-column align-items-center navButton"
          onClick={() => navigate("/")}
          style={{ border: "none", boxShadow: "none" }}
        >
          <i className="bi bi-house-door fs-2"></i>
          Home
        </button> */}
        <button
          className="d-flex flex-column align-items-center navButton"
          onClick={() => navigate("/exercises")}
          style={{ border: "none", boxShadow: "none" }}
        >
          <i className="bi bi-book fs-2"></i>
          Practice
        </button>
        <button
          className="d-flex flex-column align-items-center navButton"
          onClick={() => navigate("/stats")}
          style={{ border: "none", boxShadow: "none" }}
        >
          <i className="bi bi-bar-chart fs-2"></i>
          Statistics
        </button>
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
