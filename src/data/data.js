// INSTRUMENTS

export const instrumentsInit = [
  { text: "Piano", name: "piano", selected: true },
  { text: "Electric Bass", name: "bassElectric", selected: false },
  { text: "Synth", name: "synth", selected: false },
  { text: "Xylophone", name: "xylophone", selected: false },
  { text: "Trumpet", name: "trumpet", selected: false },
  { text: "Harp", name: "harp", selected: false },
];

// tone js 's sampler doesn't need all the samples: it can repitch them to get notes not included. Thus saving a lot of memory.
//names have to be the
export const urlsSamples = {
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
  // samples are actually one octave higher: we changed the range to make it sound more like a xylophone
  bassElectric: {
    Db5: "Cs4.mp3",
    Db6: "Cs5.mp3",
    E5: "E4.mp3",
    G4: "G3.mp3",
    G5: "G4.mp3",
  },
  // samples are actually two octaves lower: we changed the range to make it sound more like a xylophone
  xylophone: {
    G2: "G4.mp3",
    C3: "C5.mp3",
    G3: "G5.mp3",
  },
  trumpet: {
    F3: "F3.mp3",
    A3: "A3.mp3",
    C4: "C4.mp3",
    Bb4: "As4.mp3",
    F4: "F4.mp3",
    D5: "D5.mp3",
  },
  harp: {
    E3: "E3.mp3",
    B3: "B3.mp3",
    D4: "D4.mp3",
    A4: "A4.mp3",
  },
};
export const notes = [
  "C3",
  "Db3",
  "D3",
  "Eb3",
  "E3",
  "F3",
  "Gb3",
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
];

export const data = {
  // Array position of intervals coincides with semitone distance: Major third = 4 semitones
  intervals: [
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
  ],
  chords: [
    "Major",
    "Minor",
    "Augmented",
    "Diminished",
    "Major 7",
    "Dominant 7",
    "Minor 7",
    "Minor 7(b5)",
    "Diminished 7",
  ],
  scales: [
    "Major",
    "Natural Minor (Aeolian)",
    "Dorian",
    "Phrygian",
    "Lydian",
    "Mixolydian",
    "Locrian",
    "Whole-Tone",
    "Diminished H-W",
    "Diminished W-H",
  ],
};

//TODO : update set parameter so it can select single values: chords: major and augmented: 0, 2
export const exercises = {
  intervals: [
    { set: [0, 1, 2], title: "Unison and seconds", direction: "ascending" },
    { set: [3, 4], title: "Thirds", direction: "ascending" },
    {
      set: [0, 1, 2, 3, 4],
      title: "Unison, seconds and thirds",
      direction: "ascending",
    },
    {
      set: [0, 1, 2, 3, 4, 5, 6, 7],
      title: "Unison, seconds, thirds, fourths and fifth",
      direction: "ascending",
    },
    { set: [6, 8], title: "Tritone, minor sixth", direction: "ascending" },
    {
      set: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      title: "All intervals",
      direction: "ascending",
    },
  ],
  // passar set a unitats concretes, no intervals
  chords: [
    { set: [0, 1], title: "Major and Minor", direction: "harmonic" },
    {
      set: [0, 1, 2, 3],
      title: "Major, Minor, Augmented and Diminished",
      direction: "harmonic",
    },
    { set: [4, 5], title: "Major 7, Dolminant 7", direction: "harmonic" },
  ],
  scales: [
    { set: [0, 1], title: "Major and Minor", direction: "ascending" },
    {
      set: [0, 1, 2, 5],
      title: "Major, Minor, Dorian, Mixolydian",
      direction: "ascending",
    },
    {
      set: [0, 1, 2, 3, 4, 5, 6],
      title: "All major modes",
      direction: "ascending",
    },
  ],
};

// export const types = ["Intervals", "Chords", "Scales"];

export const types = [
  // ["bi-dice-2", "Intervals"],
  ["bi-arrows-angle-expand", "Intervals"],
  // ["bi-copy", "Intervals"],
  // ["bi-dice-3", "Scales"],
  // ["bi-arrow-up-right", "Scales"],
  // ["bi-ladder", "Scales"],
  ["bi-graph-up-arrow", "Scales"],
  // ["bi-dice-6", "Chords"],
  ["bi-columns-gap", "Chords"],
];

// INITIAL RESULTS

export const initialResults = [
  { correct: false, solution: "Minor Second" },
  { correct: true, solution: "Unison" },
  { correct: false, solution: "Unison" },
  { correct: true, solution: "Minor Second" },
  { correct: false, solution: "Minor Second" },
  { correct: true, solution: "Minor Second" },
  { correct: true, solution: "Unison" },
  { correct: true, solution: "Minor Second" },
  { correct: true, solution: "Minor Second" },
  { correct: true, solution: "Major Second" },
  { correct: false, solution: "Major Second" },
  { correct: true, solution: "Minor Second" },
];
