import React from "react";
import { types } from "../data/data";
import { useNavigate } from "react-router-dom";

function SelectType() {
  const navigate = useNavigate();

  return (
    <div
      className="background p-4 d-flex flex-column justify-content-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="d-flex flex-column mt-5">
        {types.map((e, index) => (
          <button
            className="m-1 p-3 d-flex flex-row justify-content-center"
            key={index}
            onClick={() => navigate(`/exercises/${e[1].toLowerCase()}`)}
          >
            <i className={`bi fs-5 ${e[0]} me-3`}></i>
            <p className="m-0 fw-light fs-5">{e[1]}</p>
          </button>
        ))}
      </div>
      <button className="m-1 mt-5 p-3 d-flex flex-row justify-content-center alignt-items-cetner accent">
        <i className="bi-exclamation-circle me-2"></i>{" "}
        <p className="m-0 fw-bold">Practice your weakest</p>
      </button>
    </div>
  );
}

export default SelectType;
