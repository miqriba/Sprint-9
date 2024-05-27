import * as Tone from "tone";
import { createContext, useEffect, useState } from "react";
import {
  data,
  urlsSamples,
  notes,
  exercises,
  instrumentsInit,
} from "../data/data";

const MainContext = createContext(undefined);

function MainContextProvider({ children }) {
  useEffect(() => {
    if (Tone.BaseContext.state !== "running") {
      Tone.start();
    }
  }, []);

  const [instruments, setInstruments] = useState(instrumentsInit);

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
// 1.1. Check if it's an interval, chord, or scale (parameter)
// 1. Generate array of exercises with random generated exercises.
//  TODO: At least one of every solution in the exercise
// 1. Generates random interval, chord, or scale according to limits

// TODO: Only works for intervals
function createExerciseSet(type, exercise) {
  const currentExercise = exercises[type].find((e) => e.title == exercise);
  let currentExerciseSet = [];

  let intervals = data[type]
    .map((e, index) =>
      currentExercise.set.includes(index) ? [index, e] : null
    )
    .filter((item) => item !== null);

  console.log(intervals);

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

function handleResponse(solucio, resposta, setFeedback, showModal) {
  // Show feedback modal with feedback message
  showModal();

  if (solucio == resposta) {
    let result = { correct: true, solution: solucio };
    // setResults(...results, result);
    setFeedback(result);
    console.log("correcte!");
    // setCount(count + 1);
  } else {
    let result = { correct: false, solution: solucio };
    // setResults(...results, result);
    setFeedback(result);

    // setLives(lives - 1);
    console.log("incorrecte");
  }
}

function handleNext(count, setCount) {
  if (count <= 8) {
    setCount(count + 1);
  } else {
    console.log("Fi de l'exercici");
  }
}

// Generates new random notes and intervals from the defined lists
function handlePlay(currentExerciseSet, count, instrument) {
  const [nota, interval] = currentExerciseSet[count];
  console.log(nota, interval);
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
