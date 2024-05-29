import React from "react";

// TODO: BLOCK ALL OTHER BUTTONS
// TODO: GET VARIABLES AND FUNCTIONS FROM CONTEXT
const FeedbackModal = ({
  handleClose,
  showFeedback,
  feedback,
  handleNext,
  count,
  setCount,
}) => {
  const showHideClassName = showFeedback
    ? "modal display-block"
    : "modal display-none";

  function next(count, setCount) {
    handleClose();
    handleNext(count, setCount);
  }

  return (
    <>
      {showFeedback && <div className="modal-overlay"></div>}
      <div
        className={`${showHideClassName} modal ${
          feedback["correct"] ? "correct" : "wrong"
        }`}
      >
        <h2
          className={`${
            feedback["correct"] ? "correctText" : "wrongText"
          } fw-bold m-3`}
        >
          {feedback["correct"] ? (
            <div className="d-flex flex-row">
              <i className="bi bi-check-circle-fill me-2 fw-bold"></i>
              <p>{"Correct!"}</p>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex flex-row mt-2">
                <i className="bi bi-x-circle-fill me-2 fw-bold"></i>
                <p>{`Wrong!`}</p>
              </div>
              <p className="fs-4 mb-1">{`Correct answer: `}</p>
              <p className="fs-5 mb-1 fw-normal">{feedback["solution"]}</p>
            </div>
          )}
        </h2>

        <button
          style={{ width: "80%" }}
          className={`${
            feedback["correct"] ? "correctBut" : "wrongBut"
          } fw-bold mb-4`}
          type="button"
          onClick={() => next(count, setCount)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FeedbackModal;
