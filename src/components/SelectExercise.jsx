import { React, useContext } from "react";
import { MainContext } from "../context/context";
import { useNavigate, useParams } from "react-router-dom";

function SelectExercise() {
  const { exercises } = useContext(MainContext);
  const navigate = useNavigate();

  const { type } = useParams();

  const selectedExercises = exercises[type] || [];

  return (
    <div>
      <button
        style={{ position: "fixed", left: "30px", top: "150px" }}
        className="me-2"
        onClick={() => navigate(-1)}
      >
        {`<`}
      </button>
      <h3>
        Select Exercise for {type.charAt(0).toUpperCase() + type.slice(1)}
      </h3>

      <div className="d-flex flex-column">
        {selectedExercises.map((e, index) => (
          <button
            className="m-1"
            key={index}
            onClick={() => navigate(`/exercises/${type}/${e.title}`)}
          >
            <p className="m-0">{e.title}</p>
            <p className="m-0" style={{ color: "#999" }}>
              {e.direction}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectExercise;
