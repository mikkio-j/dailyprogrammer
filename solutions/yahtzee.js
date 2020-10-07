function yahtzee(arr) {
  let highestScore = 0;
  arr.forEach((item) => {
    const rollSum = arr
      .filter((match) => item === match)
      .reduce((a, b) => a + b, 0);
    if (rollSum > highestScore) {
      highestScore = rollSum;
    }
  });
  return highestScore;
}

module.exports = yahtzee;
