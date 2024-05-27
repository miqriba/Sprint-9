import { React, useContext, useState, useEffect } from "react";
import { MainContext } from "../context/context";
import ProgressBar from "./ProgressBar";
import FeedbackModal from "./FeedbackModal";
import { useNavigate, useParams } from "react-router-dom";

//TODO: ADD AUDIO FEEDBACK
function Exercise() {
  const {
    createExerciseSet,
    handleResponse,
    handlePlay,
    instruments,
    handleNext,
  } = useContext(MainContext);

  const navigate = useNavigate();

  const { type, exercise } = useParams();

  // Counter for which question of the X total (10)
  const [count, setCount] = useState(0);

  const [possibleResponses, setPossibleResponses] = useState([]);
  const [currentExerciseSet, setCurrentExerciseSet] = useState([]);

  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState({});

  function showModal() {
    setShowFeedback(true);
  }
  function hideModal() {
    setShowFeedback(false);
  }

  useEffect(() => {
    const [responses, set] = createExerciseSet(type, exercise);
    setPossibleResponses(responses);
    setCurrentExerciseSet(set);
  }, [type, exercise]);

  // Number of lives left
  // const [lives, setLives] = useState(3);

  return (
    <div>
      <div className="d-flex flex-column align-items-start mb-5">
        {/*The X button goes to last route in history (-1). TODO: go to parent Route instead */}
        <button
          // style={{ position: "fixed", left: "50px" }}
          className="me-2 mb-3"
          onClick={() => navigate(-1)}
        >
          X
        </button>
        <p>{`Exercise ${count + 1}/10`}</p>
        <ProgressBar count={count + 1}></ProgressBar>
        {/* <p className="fw-bold m-2" style={{ color: "red" }}>
          ❤️ {lives}
        </p> */}
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
                e[1],
                setFeedback,
                showModal
              )
            }
            key={e}
          >{`${e[1]}`}</button>
        ))}
      </div>
      <FeedbackModal
        feedback={feedback}
        showFeedback={showFeedback}
        handleClose={hideModal}
        handleNext={handleNext}
        count={count}
        setCount={setCount}
      >
        <p>Modal</p>
      </FeedbackModal>
    </div>
  );
}

export default Exercise;
