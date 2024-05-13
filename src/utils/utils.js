// import * as Tone from "tone";

// // Selects a random note from a set of notes as strings 'C#4'
// // Selects a random interval from a set intervals as strings

// // @returns [position, element in array]
// export function getRandom(set, setToAvoid = 0) {
//   const position = Math.floor(Math.random() * (set.length - setToAvoid));
//   return [position, set[position]];
// }

// export function playInterval(nota, interval) {
//   //   const interval = getRandom(intervals);
//   //   console.log("Interval: " + interval[1]);
//   //   const note = getRandom(notes, interval[0]);
//   //   console.log("Note: " + note[1]);

//   Tone.start();
//   const synth = new Tone.PolySynth(Tone.Synth).toDestination();
//   const now = Tone.now();
//   synth.triggerAttackRelease(nota[1], "4n", now);
//   synth.triggerAttackRelease(notes[nota[0] + interval[0]], "4n", now + 0.8);
// }
