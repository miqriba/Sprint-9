import * as Tone from "tone";
import { React, useContext, useState } from "react";
import { MainContext } from "../context/context";

function Exercise() {
  const {
    notes,
    intervalsAll,
    handleResponse,
    playIntervalSample,
    handlePlay,
  } = useContext(MainContext);

  // Counter for which question of the X total (10)
  const [count, setCount] = useState(1);

  // Number of lives left
  const [lives, setLives] = useState(3);

  const [feedback, setFeedback] = useState("");

  // Here we define which exercise we are doing: slice(0, 3) would be unison, m2, M2, slice none would be all intervals
  const intervals = intervalsAll.slice(0, 13);

  const [nota, setNota] = useState(null);
  const [interval, setInterval] = useState(null);

  // let nota;
  // let interval;

  // useEffect(() => {
  //   interval = getRandom(intervals);
  //   console.log("Interval: " + interval[1]);
  //   nota = getRandom(notes, interval[0]);
  //   console.log(`Notes: ${nota[1]} ${notes[nota[0] + interval[0]]}`);
  // }, [nota, notes, interval, intervals]);

  return (
    <div>
      <div className="d-flex align-items-center mb-5">
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
        <p className="fw-bold m-2" style={{ color: "red" }}>
          ❤️ {lives}
        </p>
      </div>
      {/* <button className="mb-3" onClick={() => playIntervalSample()}> */}
      {/* <button className="mb-3" onClick={() => playInterval(nota, interval)}> */}
      <button
        className="mb-3 fw-b"
        onClick={() => handlePlay(notes, intervals, setNota, setInterval)}
      >
        Play interval
      </button>
      <div>
        {intervals.map((e, index) => (
          <button
            style={
              {
                // backgroundColor: "#444",
              }
            }
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
