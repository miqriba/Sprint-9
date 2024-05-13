import * as Tone from "tone";
import { createContext } from "react";

// tone js 's sampler doesn't need all the samples: it can repitch them to get notes not included. Thus saving a lot of memory.
const urlsSamples = {
  piano: {
    A4: "A4.mp3",
    C4: "C4.mp3",
    Eb4: "Ds4.mp3",
    Gb4: "Fs4.mp3",
    A5: "A5.mp3",
    C5: "C5.mp3",
    Eb5: "Ds5.mp3",
    Gb5: "Fs5.mp3",
  },
  bassElectric: {
    Db4: "Cs4.mp3",
    Db5: "Cs5.mp3",
    E4: "E4.mp3",
    G3: "G3.mp3",
    G4: "G4.mp3",
  },
};
const notes = [
  "G3",
  "Ab3",
  "A3",
  "Bb3",
  "B3",
  "C4",
  "Db4",
  "D4",
  "Eb4",
  "E4",
  "F4",
  "Gb4",
  "G4",
  "Ab4",
  "A4",
  "Bb4",
  "B4",
  "C5",
  "Db5",
  "D5",
  "Eb5",
  "E5",
  "F5",
  "Gb5",
];

// Array position of intervals coincides with semitone distance: Major third = 4 semitones
const intervalsAll = [
  "Unison",
  "Minor Second",
  "Major Second",
  "Minor Third",
  "Major Third",
  "Perfect Fourth",
  "Tritone",
  "Perfect Fifth",
  "Minor Sixth",
  "Major Sixth",
  "Minor Seventh",
  "Major Seventh",
  "Octave",
];

const chordsAll = [
  "Major",
  "Minor",
  "Augmented",
  "Diminished",
  "Major 7",
  "Dominant 7",
  "Minor 7",
  "Minor 7(b5)",
  "Diminished 7",
];

const scalesAll = ["Major", "Natural Minor"];

const instruments = [
  { text: "Piano", name: "piano", selected: true },
  { text: "Electric Bass", name: "bassElectric", selected: false },
  { text: "Synth", name: "synth", selected: false },
];

const exercises = [
  { set: [0, 3], title: "Unison and seconds", direction: "ascending" },
  { set: [3, 5], title: "Thirds", direction: "ascending" },
];

// Selects a random note from a set of notes as strings 'C#4'
// Selects a random interval from a set intervals as strings

// @returns [position, element in array]
function getRandom(set, setToAvoid = 0) {
  const position = Math.floor(Math.random() * (set.length - setToAvoid));
  return [position, set[position]];
}

// 1. Generates random interval, chord, or scale according to limits
// 1. Check if it's an interval, chord, or scale (parameter)
// 3.

// Generates new random notes and intervals from the defined lists
function handlePlay(notes, intervals, setNota, setInterval) {
  let interval = getRandom(intervals);
  console.log("Interval: " + interval[1]);
  setInterval(interval);
  let nota = getRandom(notes, interval[0]);
  console.log(`Notes: ${nota[1]} ${notes[nota[0] + interval[0]]}`);
  setNota(nota);
  // playInterval(nota, interval);
  playIntervalSample(nota, interval);
}

function playInterval(nota, interval) {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttackRelease(nota[1], "4n", now);
  synth.triggerAttackRelease(notes[nota[0] + interval[0]], "4n", now + 0.8);
}

function playIntervalSample(nota, interval, sample = "bassElectric") {
  if (sample == "synth") {
  }

  const sampler = new Tone.Sampler({
    urls: urlsSamples[sample],
    release: 1,
    baseUrl: `src/samples/${sample}/`,
  }).toDestination();

  const now = Tone.now();

  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(nota[1], "2n", now);
    sampler.triggerAttackRelease(notes[nota[0] + interval[0]], "2n", now + 1);
  });

  // var sampler = new Tone.Sampler(
  //   {
  //     C4: "src/samples/C4.wav",
  //     // "D#3" : "path/to/Dsharp3.mp3",
  //     // "F#3" : "path/to/Fsharp3.mp3",
  //     // "A3" : "path/to/A3.mp3",
  //   },
  //   function () {
  //     //sampler will repitch the closest sample
  //     sampler.triggerAttack("C4");
  //   }
  // );

  // Tone.loaded().then(() => {
  //   sampler.triggerAttackRelease("C4", "4n", now);
  // });
}

function handleResponse(solucio, resposta, lives, setLives, count, setCount) {
  if (solucio === resposta) {
    console.log("correcte!");
  } else {
    setLives(lives - 1);
    console.log("incorrecte");
  }
  setCount(count + 1);
}

export const MainContext = createContext({
  notes,
  intervalsAll,
  exercises,
  instruments,
  getRandom,
  playInterval,
  handleResponse,
  playIntervalSample,
  handlePlay,
});
