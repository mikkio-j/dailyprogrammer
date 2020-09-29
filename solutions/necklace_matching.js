function matchNecklace(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return (str1 + str1).includes(str2) ? true : false;
}

module.exports = matchNecklace;
