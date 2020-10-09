const tallyprogram = require('./tallyprogram');

test('Checks if a series of characters indicate correctly who scored a point', () => {
  expect(tallyprogram("abcde")).toStrictEqual([
    { name: 'a', score: -1 },
    { name: 'b', score: -1 },
    { name: 'c', score: -1 },
    { name: 'd', score: -1 },
    { name: 'e', score: -1 } ]);
  expect(tallyprogram('dbbaCEDbdAacCEAadcB')).toStrictEqual([
    { name: 'e', score: 2 },
    { name: 'c', score: 0 },
    { name: 'a', score: -1 },
    { name: 'b', score: -2 },
    { name: 'd', score: -2 } ]); 
});