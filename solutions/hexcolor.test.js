const hexcolor = require('./hexcolor');

test('Checks if the red, green, and blue channel values of a color convert properly into hex string', () => {
  expect(hexcolor(255, 99, 71)).toBe('#FF6347');
  expect(hexcolor(184, 134, 11)).toBe('#B8860B');
  expect(hexcolor(189, 183, 107)).toBe('#BDB76B');
  expect(hexcolor(0, 0, 205)).toBe('#0000CD');
});




