const funnel = require('./wordfunnel');

test('Checks if the second word can be made from the first by removing one letter', () => {
  expect(funnel('leave', 'eave')).toBe(true);
  expect(funnel('reset', 'rest')).toBe(true);
  expect(funnel('dragoon', 'dragon')).toBe(true);
  expect(funnel('eave', 'leave')).toBe(false);
  expect(funnel('sleet', 'lets')).toBe(false);
  expect(funnel('skiff', 'ski')).toBe(false);
});
