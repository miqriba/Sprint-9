import { React, useContext, useState, useEffect } from "react";
import { MainContext } from "../context/context";
import ProgressBar from "./ProgressBar";
import { useNavigate, useParams } from "react-router-dom";

function Exercise() {
  const {
    notes,
    exercises,
    intervalsAll,
    handleResponse,
    playIntervalSample,
    handlePlay,
    instruments,
  } = useContext(MainContext);

  const navigate = useNavigate();
  const { type, exercise } = useParams();

  useEffect(() => {
    const currentExercise = exercises[type].find((e) => e.title == exercise);
    console.log(currentExercise);
  }, [type, exercise]);

  // Counter for which question of the X total (10)
  const [count, setCount] = useState(1);

  // Number of lives left
  const [lives, setLives] = useState(3);

  // Here we define which exercise we are doing: slice(0, 3) would be unison, m2, M2, slice none would be all intervals
  const intervals = intervalsAll.slice(0, 13);

  const [nota, setNota] = useState(null);
  const [interval, setInterval] = useState(null);

  // Here we create the list of 10 concrete exercises based on 'type' and 'exercise' called currentExerciseSet

  useEffect(() => {
    const currentExerciseSet = [];
    for (i = 0; i < 10; i++) {}
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center mb-5">
        {/*The X button goes to last route in history (-1). TODO: go to parent Route instead */}
        <button className="me-2" onClick={() => navigate(-1)}>
          X
        </button>
        <ProgressBar count={count}></ProgressBar>
        <p className="fw-bold m-2" style={{ color: "red" }}>
          ❤️ {lives}
        </p>
      </div>
      <button
        className="mb-3 fw-b"
        onClick={() =>
          handlePlay(
            notes,
            intervals,
            setNota,
            setInterval,
            instruments.filter((e) => e.selected)[0].name
          )
        }
      >
        {`Play ${type.slice(0, -1)}`}
      </button>
      <div>
        {intervals.map((e, index) => (
          <button
            className="m-2"
            onClick={() =>
              handleResponse(interval[1], e, lives, setLives, count, setCount)
            }
            key={e}
          >{`${e}`}</button>
        ))}
      </div>
    </div>
  );
}

export default Exercise;
