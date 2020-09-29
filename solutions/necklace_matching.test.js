const matchNecklace = require('./necklace_matching');

test('Checks if reordering the letters produce a string that describes the same necklace.', () => {
  expect(matchNecklace("nicole", "icolen")).toBe(true);
  expect(matchNecklace("nicole", "lenico")).toBe(true);
  expect(matchNecklace("nicole", "coneli")).toBe(false);
  expect(matchNecklace("aabaaaaabaab", "aabaabaabaaa")).toBe(true);
  expect(matchNecklace("abc", "cba")).toBe(false);
  expect(matchNecklace("xxyyy", "xxxyy")).toBe(false);
  expect(matchNecklace("xyxxz", "xxyxz")).toBe(false);
  expect(matchNecklace("", "")).toBe(true);
  expect(matchNecklace("x", "x")).toBe(true);
  expect(matchNecklace("x", "xx")).toBe(false);
  expect(matchNecklace("x", "")).toBe(false);
});
