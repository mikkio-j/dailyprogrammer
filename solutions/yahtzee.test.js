const yahtzee = require('./yahtzee');

test('Checks if the maximum possible score for this roll is in the upper section of the Yahtzee score card.', () => {
    expect(yahtzee([2, 3, 5, 5, 6])).toBe(10);
    expect(yahtzee([1, 1, 1, 1, 3])).toBe(4);
    expect(yahtzee([1, 1, 1, 3, 3])).toBe(6);
    expect(yahtzee([6, 6, 6, 6, 6])).toBe(30);
    expect(yahtzee([1, 2, 3, 4, 5])).toBe(5);
  });