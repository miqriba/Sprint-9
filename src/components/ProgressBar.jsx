import React from "react";

function ProgressBar({ count }) {
  return (
    <>
      <div
        style={{
          border: "solid 1px black",
          width: "85%",
          borderRadius: "3px",
        }}
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-success"
          style={{
            width: `${count * 10}%`,
          }}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
