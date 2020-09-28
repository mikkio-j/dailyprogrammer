function uniq(arr) {
  arr.sort((a, b) => a - b);
  arr.map((arrItem) => {
    const index = arr.indexOf(arrItem);
    if (arrItem === arr[index + 1]) {
      arr.splice(index, 1);
    }
  });
  return arr;
}
const myArr = [1, 9, 2, 5, 7, 8, 9, 5, 2];
