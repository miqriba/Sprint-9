import React from "react";
import { types } from "../data/data";
import { useNavigate } from "react-router-dom";

function SelectType() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Select Type</h3>
      <div className="d-flex flex-column">
        {types.map((e, index) => (
          <button
            className="m-1"
            key={index}
            onClick={() => navigate(`/exercises/${e.toLowerCase()}`)}
          >
            <p className="m-0">{e}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectType;
