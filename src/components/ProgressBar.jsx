import React from "react";

function ProgressBar({ count }) {
  return (
    <div
      style={{
        border: "solid 1px black",
        width: "100%",
        borderRadius: "3px",
      }}
      className="progress p-0"
      role="progressbar"
      aria-label="Success example"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="progress-bar accent"
        style={{
          width: `${count * 10}%`,
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
