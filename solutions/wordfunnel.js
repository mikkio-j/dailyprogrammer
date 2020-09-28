function funnel(str1, str2) {
  let arr = str1.split('');
  for (let charIndex in arr) {
    arr.splice(charIndex, 1);
    if (arr.join('') === str2) {
      return true;
    } else {
      arr = str1.split('');
    }
  }
  return false;
}

module.exports = funnel;
