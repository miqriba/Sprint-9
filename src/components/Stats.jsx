import { React, useContext, useEffect } from "react";
import { MainContext } from "../context/context";
import { data } from "../data/data";

function Stats() {
  const { results, getStats, getStatsForGivenSolution, getWeakestInterval } =
    useContext(MainContext);
  let statistics;
  useEffect(() => {
    statistics = data.intervals.map((e) => ({
      interval: e,
      percentage: getStatsForGivenSolution(results, e).percentage,
    }));

    console.log(statistics);
  }, [results]);

  return (
    <div className="background p-4 d-flex flex-column justify-content-center">
      <div className="base p-4">
        <h2 className="m-3"> Statistics</h2>
        <h5>Your average correct rate</h5>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <h1>{`${getStats(results)}`}</h1>
          <h5>%</h5>
        </div>
        <h5>Intervals</h5>
        {data.intervals.map((e) =>
          getStatsForGivenSolution(results, e).percentage ? (
            <p
              className={`${
                getStatsForGivenSolution(results, e).percentage > 6
                  ? "correctColor"
                  : getStatsForGivenSolution(results, e).percentage > 4
                  ? "mediocreColor"
                  : "wrongColor"
              } m-1`}
              key={e}
            >{`${e}: ${getStatsForGivenSolution(results, e).percentage}`}</p>
          ) : null
        )}
        <h5>Your weakest interval</h5>
        <p>{`${getWeakestInterval(results).interval}: ${
          getWeakestInterval(results).percentage
        }`}</p>
      </div>
    </div>
  );
}

export default Stats;
