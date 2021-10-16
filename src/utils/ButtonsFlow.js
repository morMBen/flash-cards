const opening = {
  message: `Hey there let's start...`,
  buttons: { left: "start training", right: "Manege cards", num: 2 },
  onClick: {
    left: "randomOrCategory",
    right: "cardsManegement",
  },
};
const randomOrCategory = {
  message: `Hey there let's start...`,
  buttons: {
    left: "choose category",
    right: "return",
    center: "play random",
    num: 3,
  },
  onClick: {
    left: "chooseCategory",
    right: "opening",
    ceter: "randomPlayMode",
  },
};
const chooseCategory = {
  message: "Please highligth the category you want to practice",
  buttons: { left: "Start practice", right: "return", num: 2 },
  onClick: { left: "playMode", right: "randomOrCategory" },
};
const cardsManegement = {
  message: "So what would you like to manege",
  buttons: { left: "cards", center: "category", right: "return", num: 3 },
  onClick: { left: "cardEdit", center: "categoryEdit", right: "opening" },
};
const cardEdit = {
  message: "Edit / Delete the card you want",
  buttons: { left: "confirm", right: "cancel", num: 2 },
  onClick: { left: "...", right: "opening" },
};
const categoryEdit = {
  message: "Edit",
  buttons: { left: "confirm", right: "cancel", num: 2 },
  onClick: { left: "...", right: "opening" },
};

const mainObj = {
  opening,
  randomOrCategory,
  chooseCategory,
  cardsManegement,
  cardEdit,
  categoryEdit,
};
export default mainObj;
