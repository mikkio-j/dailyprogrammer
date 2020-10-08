function hexcolor(...args) {
  const char = ['A', 'B', 'C', 'D', 'E', 'F'];
  let hexColor = '#';
  args.forEach((color) => {
    let firstValue = Math.floor(color / 16);
    let secondValue = color % 16;
    if (firstValue > 9) firstValue = char[firstValue - 10];
    if (secondValue > 9) secondValue = char[secondValue - 10];
    hexColor = hexColor + firstValue + secondValue;
  });
  return hexColor;
}

module.exports = hexcolor;
