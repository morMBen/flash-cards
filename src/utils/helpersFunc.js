const iterateArr = (length, index, plusOrMinus) => {
  if (index === 0 && plusOrMinus === "-") return length - 1;
  if (index === length - 1 && plusOrMinus === "+") return 0;
  return plusOrMinus === "+" ? index + 1 : index - 1;
};
export { iterateArr };
