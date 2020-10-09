function tallyprogram(str) {
  const players = [
    { name: 'a', score: 0 },
    { name: 'b', score: 0 },
    { name: 'c', score: 0 },
    { name: 'd', score: 0 },
    { name: 'e', score: 0 },
  ];
  str.split('').forEach((item) => {
    players.find((player) => {
      if (player.name === item.toLowerCase()) {
        if (item === item.toLowerCase()) {
          player.score--;
        } else {
          player.score++;
        }
      }
    });
  });
  return players.sort((a, b) => b.score - a.score);
}

module.exports = tallyprogram;
