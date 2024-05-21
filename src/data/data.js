// tone js 's sampler doesn't need all the samples: it can repitch them to get notes not included. Thus saving a lot of memory.
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
  bassElectric: {
    Db4: "Cs4.mp3",
    Db5: "Cs5.mp3",
    E4: "E4.mp3",
    G3: "G3.mp3",
    G4: "G4.mp3",
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

// Array position of intervals coincides with semitone distance: Major third = 4 semitones
export const intervalsAll = [
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

export const chordsAll = [
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

export const scalesAll = [
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
];

export const instrumentsInit = [
  { text: "Piano", name: "piano", selected: true },
  { text: "Electric Bass", name: "bassElectric", selected: false },
  { text: "Synth", name: "synth", selected: false },
];

//TODO : update set parameter so it can select single values: chords: major and augmented: 0, 2
export const exercises = {
  intervals: [
    { set: [0, 3], title: "Unison and seconds", direction: "ascending" },
    { set: [3, 5], title: "Thirds", direction: "ascending" },
    {
      set: [0, 5],
      title: "Unison, seconds and thirds",
      direction: "ascending",
    },
  ],
  chords: [
    { set: [0, 3], title: "Major and Minor", direction: "harmonic" },
    {
      set: [0, 4],
      title: "Major, Minor, Augmented and Diminished",
      direction: "harmonic",
    },
    { set: [4, 6], title: "Major 7, Dolminant 7", direction: "harmonic" },
  ],
  scales: [
    { set: [0, 3], title: "Major and Minor", direction: "ascending" },
    {
      set: [3, 5],
      title: "Major, Minor, Dorian, Mixolydian",
      direction: "ascending",
    },
    { set: [0, 5], title: "All major modes", direction: "ascending" },
  ],
};

export const types = ["Intervals", "Chords", "Scales"];
