const messages = {
  opening: `Hey there what do?`,
  randomOrCategory: `How would you like to test yourself?`,
  chooseCategory: "Please highligth the category you want to practice",
};
const buttonTexts = {
  opening: {
    left: "start training",
    right: "Manege cards",
    num: 2,
  },

  randomOrCategory: {
    left: "choose category",
    right: "return",
    center: "play random",
    num: 3,
  },
  chooseCategory: {
    left: "Start practice",
    right: "return",
    num: 2,
  },
};
const onClick = {
  opening: {
    left: "randomOrCategory",
    right: "Manege cards",
  },
  randomOrCategory: {
    left: "chooseCategory",
    right: "opening",
    ceter: "randomPlayMode",
    num: 3,
  },
  chooseCategory: {
    left: "playMode",
    right: "randomOrCategory",
    num: 2,
  },
};
export { messages, buttonTexts, onClick };
