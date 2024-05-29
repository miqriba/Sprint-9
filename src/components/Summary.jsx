import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/context";

function Summary({ results, possibleResponses }) {
  const navigate = useNavigate();

  results = results.slice(-10);
  console.log(results);
  const { getStatsForGivenSolution } = useContext(MainContext);

  //Number of correct exercises
  const mainResult = results.reduce((a, b) => (b.correct ? a + 1 : a), 0);

  const [showDetail, setShowDetail] = useState(false);
  function toggleShowDetail() {
    if (showDetail) {
      setShowDetail(false);
    } else {
      setShowDetail(true);
    }
  }

  return (
    <div className="p-5">
      <button
        className="me-2 mb-3"
        onClick={() => navigate(-1)}
        style={{ position: "fixed", left: "50px", top: "100px" }}
      >
        X
      </button>
      <h1
        className={`${
          mainResult > 6
            ? "correctColor"
            : mainResult > 4
            ? "mediocreColor"
            : "wrongColor"
        } p-5`}
      >{`${mainResult}/10`}</h1>
      <div className="mb-2">
        {possibleResponses.map((e) => (
          <p
            className={`${
              getStatsForGivenSolution(results, e[1]).percentage > 60
                ? "correctColor"
                : getStatsForGivenSolution(results, e[1]).percentage > 40
                ? "mediocreColor"
                : "wrongColor"
            } mb-1`}
            key={e}
          >
            {getStatsForGivenSolution(results, e[1]).totalAnswers == 0
              ? null
              : `${e[1]}: ${
                  getStatsForGivenSolution(results, e[1]).percentage
                } %`}
          </p>
        ))}
      </div>
      <button className="mb-3" onClick={() => toggleShowDetail(true)}>
        {showDetail ? "Hide detailed results" : "Show detailed results"}
      </button>
      {showDetail
        ? results.map((e, index) => (
            <div className="d-flex flex-row justify-content-start" key={index}>
              <p className={e.correct ? "correctText" : "wrongText"}>
                {`${index + 1}. ${e.solution}: `}
                {e.correct ? (
                  <i className="bi bi-check ms-1"></i>
                ) : (
                  <i className="bi bi-x ms-1"></i>
                )}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}

export default Summary;
