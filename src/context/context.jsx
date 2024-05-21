import * as Tone from "tone";
import { createContext, useEffect, useState } from "react";
import {
  urlsSamples,
  notes,
  exercises,
  intervalsAll,
  chordsAll,
  scalesAll,
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
        intervalsAll,
        exercises,
        instrumentsInit,
        instruments,
        setInstruments,
        getRandom,
        handleResponse,
        handlePlay,
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

// @returns [position, element in array]
function getRandom(set, setToAvoid = 0) {
  const position = Math.floor(Math.random() * (set.length - setToAvoid));
  return [position, set[position]];
}

// 1. Generate array of exercises with random generated exercises.
//  TODO: At least one of every solution in the exercise
// 2. Only pass to next exercise with correct solution
// 1. Generates random interval, chord, or scale according to limits
// 1. Check if it's an interval, chord, or scale (parameter)
// 3.

// Generates new random notes and intervals from the defined lists
function handlePlay(notes, intervals, setNota, setInterval, instrument) {
  let interval = getRandom(intervals);
  console.log("Interval: " + interval[1]);
  setInterval(interval);
  let nota = getRandom(notes, interval[0]);
  console.log(`Notes: ${nota[1]} ${notes[nota[0] + interval[0]]}`);
  setNota(nota);
  // playInterval(nota, interval);
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

function handleResponse(solucio, resposta, lives, setLives, count, setCount) {
  if (solucio === resposta) {
    console.log("correcte!");
  } else {
    setLives(lives - 1);
    console.log("incorrecte");
  }
  setCount(count + 1);
  console.log(count);
}
