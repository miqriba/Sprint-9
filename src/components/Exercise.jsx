import { React, useContext, useState, useEffect } from "react";
import { MainContext } from "../context/context";
import ProgressBar from "./ProgressBar";
import FeedbackModal from "./FeedbackModal";
import { useNavigate, useParams } from "react-router-dom";
import Summary from "./Summary";

//TODO: ADD AUDIO FEEDBACK
function Exercise() {
  const {
    createExerciseSet,
    handleResponse,
    handlePlay,
    instruments,
    handleNext,
    setIsNavBarVisible,
    results,
    setResults,
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
    setIsNavBarVisible(false);
    return () => setIsNavBarVisible(true);
  }, [setIsNavBarVisible]);

  useEffect(() => {
    const [responses, set] = createExerciseSet(type, exercise);
    setPossibleResponses(responses);
    setCurrentExerciseSet(set);
  }, [type, exercise]);

  if (count >= 10) {
    return <Summary results={results} possibleResponses={possibleResponses} />;
  }

  return (
    <div className="background d-flex flex-column justify-content-center">
      <div className="p-4 mb-5 base pt-5 pb-5">
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
        <div
          className="d-flex flex-row justify-content-center"
          style={{ height: "20%" }}
        >
          <button
            className="mb-3 accent d-flex flex-row align-items-center justify-content-center"
            style={{ height: "fit-content" }}
            onClick={() =>
              handlePlay(
                currentExerciseSet,
                count,
                instruments.filter((e) => e.selected)[0].name
              )
            }
          >
            <i className="bi-volume-up-fill fs-2 me-2"></i>
            {`Play ${type.slice(0, -1)}`}
          </button>
        </div>
        <div>
          {possibleResponses.map((e, index) => (
            <button
              className="m-2"
              onClick={() =>
                handleResponse(
                  currentExerciseSet[count][1][1],
                  e[1],
                  setFeedback,
                  showModal,
                  results,
                  setResults
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
    </div>
  );
}

export default Exercise;
