import * as Tone from "tone";
import { createContext, useEffect, useState } from "react";
import {
  data,
  urlsSamples,
  notes,
  exercises,
  instrumentsInit,
  initialResults,
} from "../data/data";

const MainContext = createContext(undefined);

function MainContextProvider({ children }) {
  useEffect(() => {
    if (Tone.BaseContext.state !== "running") {
      Tone.start();
    }
  }, []);

  const [instruments, setInstruments] = useState(instrumentsInit);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  const [results, setResults] = useState(initialResults);

  return (
    <MainContext.Provider
      value={{
        notes,
        createExerciseSet,
        exercises,
        instrumentsInit,
        instruments,
        setInstruments,
        getRandom,
        handleResponse,
        handlePlay,
        handleNext,
        isNavBarVisible,
        setIsNavBarVisible,
        getStatsForGivenSolution,
        results,
        setResults,
        getStats,
        getWeakestInterval,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContextProvider, MainContext };

// Selects a random note from a set of notes as strings 'C#4'
// Selects a random interval from a set intervals as strings
// @param set: set of notes to choose from
// @param setToAvoid: size of the interval, so we don't pick a 1st note which 2nd note isnt in the list of notes
// @param clean: determines if the position of the element is included as the first item in the array

// @returns [position, element in array]
function getRandom(set, setToAvoid = 0, clean = false) {
  const position = Math.floor(Math.random() * (set.length - setToAvoid));
  return clean ? set[position] : [position, set[position]];
}

// Here we create the list of 10 concrete exercises based on 'type' and 'exercise' called currentExerciseSet
//  TODO: At least one of every solution in the exercise
// TODO: Only works for intervals

function createExerciseSet(type, exercise) {
  const currentExercise = exercises[type].find((e) => e.title == exercise);
  let currentExerciseSet = [];

  let intervals = data[type]
    .map((e, index) =>
      currentExercise.set.includes(index) ? [index, e] : null
    )
    .filter((item) => item !== null);

  if (type == "intervals") {
    for (let i = 0; i < 10; i++) {
      let interval = getRandom(intervals, 0, true);
      // console.log("Interval: " + interval[1]);
      let nota = getRandom(notes, interval[0]);
      // console.log(`Notes: ${nota[1]} ${notes[nota[0] + interval[0]]}`);
      currentExerciseSet.push([nota, interval]);
    }
    console.log(currentExerciseSet);
  }
  return [intervals, currentExerciseSet];
}

function handleResponse(
  solucio,
  resposta,
  setFeedback,
  showModal,
  results,
  setResults
) {
  // Show feedback modal with feedback message
  showModal();
  let result;
  let temporaryResults = results;
  if (solucio == resposta) {
    result = { correct: true, solution: solucio };
    // console.log("correcte!");
  } else {
    result = { correct: false, solution: solucio };
    // console.log("incorrecte");
  }
  temporaryResults.push(result);
  setFeedback(result);
  setResults(temporaryResults);
  // console.log(results);
}

function handleNext(count, setCount) {
  setCount(count + 1);
  // console.log(count + 1);
}

// ---- STATISTICS ----

// Statistics based on which interval (givenSolution)
//
//@return totalAnswers: number of instances for a given Solution (maybe the random creation of the exercise created 0 instances)
//@return correctAnswers: number of correct answers for the given solution.
//@return percentage: percentage of correct answers
function getStatsForGivenSolution(results, givenSolution) {
  let totalAns = results.filter((e) => e.solution == givenSolution).length;
  // console.log(`Total answers: ${totalAns}`);
  let correctAns;
  let percent;
  if (totalAns < 1) {
    correctAns = 0;
    percent = null;
  } else {
    correctAns = results
      .filter((e) => e.solution == givenSolution)
      .reduce((a, b) => (b.correct ? a + 1 : a), 0);
    // console.log(`Right responses: ${correctAns}`);
    percent = Math.round((correctAns * 100) / totalAns);
  }
  return {
    totalAnswers: totalAns,
    correctAnswers: correctAns,
    percentage: percent,
  };
}

function getStats(results) {
  const totalAnswers = results.length;
  const correctAnswers = results.filter((e) => e.correct).length;
  const percentage = Math.round((correctAnswers * 100) / totalAnswers);

  return percentage;
}

function getStatistics(results) {
  const statistics = data.intervals.map((e) => ({
    interval: e,
    percentage: getStatsForGivenSolution(results, e).percentage,
  }));
  return statistics;
}

function getWeakestInterval(results) {
  return getStatistics(results)
    .filter((e) => e.percentage != null)
    .reduce((prev, curr) => (prev.percentage < curr.percentage ? prev : curr));
}

// ---- TONE JS PLAY AUDIO SAMPLES ----

// Generates new random notes and intervals from the defined lists
function handlePlay(currentExerciseSet, count, instrument) {
  const [nota, interval] = currentExerciseSet[count];
  // console.log(nota, interval);
  console.log("Interval: " + interval[1]);
  console.log(`Notes: ${nota[1]} ${notes[nota[0] + interval[0]]}`);

  playInterval(nota, interval, instrument);
}

function playInterval(nota, interval, instrument = "piano") {
  if (instrument == "synth") {
    playIntervalSynth(nota, interval);
  } else {
    playIntervalSample(nota, interval, instrument);
  }
}

function playIntervalSynth(nota, interval) {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttackRelease(nota[1], "4n", now);
  synth.triggerAttackRelease(notes[nota[0] + interval[0]], "4n", now + 0.8);
}

function playIntervalSample(nota, interval, instrument) {
  const sampler = new Tone.Sampler({
    urls: urlsSamples[instrument],
    release: 1,
    baseUrl: `/src/samples/${instrument}/`,
  }).toDestination();

  const now = Tone.now();
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(nota[1], "2n", now);
    sampler.triggerAttackRelease(notes[nota[0] + interval[0]], "2n", now + 1);
  });
}
