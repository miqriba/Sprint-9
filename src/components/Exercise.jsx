import { React, useContext, useState, useEffect } from "react";
import { MainContext } from "../context/context";
import ProgressBar from "./ProgressBar";
import { useNavigate, useParams } from "react-router-dom";

function Exercise() {
  const { createExerciseSet, handleResponse, handlePlay, instruments } =
    useContext(MainContext);
  const navigate = useNavigate();

  const { type, exercise } = useParams();

  const [possibleResponses, setPossibleResponses] = useState([]);
  const [currentExerciseSet, setCurrentExerciseSet] = useState([]);

  useEffect(() => {
    const [responses, set] = createExerciseSet(type, exercise);
    setPossibleResponses(responses);
    setCurrentExerciseSet(set);
  }, [type, exercise]);

  // Counter for which question of the X total (10)
  const [count, setCount] = useState(0);

  // Number of lives left
  const [lives, setLives] = useState(3);

  return (
    <div>
      <div className="d-flex align-items-center mb-5">
        {/*The X button goes to last route in history (-1). TODO: go to parent Route instead */}
        <button className="me-2" onClick={() => navigate(-1)}>
          X
        </button>
        <ProgressBar count={count + 1}></ProgressBar>
        <p className="fw-bold m-2" style={{ color: "red" }}>
          ❤️ {lives}
        </p>
      </div>
      <button
        className="mb-3 fw-b"
        onClick={() =>
          handlePlay(
            currentExerciseSet,
            count,
            instruments.filter((e) => e.selected)[0].name
          )
        }
      >
        {`Play ${type.slice(0, -1)}`}
      </button>
      <div>
        {possibleResponses.map((e, index) => (
          <button
            className="m-2"
            onClick={() =>
              handleResponse(
                currentExerciseSet[count][1][1],
                e,
                lives,
                setLives,
                count,
                setCount
              )
            }
            key={e}
          >{`${e[1]}`}</button>
        ))}
      </div>
    </div>
  );
}

export default Exercise;
