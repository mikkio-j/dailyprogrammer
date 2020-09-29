function havelhakimi(arr) {
  const newArr = arr.filter((item) => item !== 0);
  if (!newArr.length) {
    return true;
  }
  const largestNumber = newArr.sort((a, b) => b - a).splice(0, 1)[0];
  if (newArr.length < largestNumber) {
    return false;
  }
  for (let i = 0; i < largestNumber; i++) {
    newArr[i]--;
  }
  return havelhakimi(newArr);
}

module.exports = havelhakimi;
