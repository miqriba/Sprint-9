import { React, useContext } from "react";
import { MainContext } from "../context/context";

function SelectExercise() {
  const { exercises } = useContext(MainContext);

  return (
    <div>
      <h3 style={{ color: "white" }}>SelectExercise</h3>
      <div className="d-flex flex-column">
        {exercises.map((e, index) => (
          <button className="m-1" key={index}>
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
