const palindromes = function (text) {
  const ignoreChars = [" ", ",", ".", "!"];
  text = text
    .toLowerCase()
    .trim()
    .split("")
    .filter((c) => ignoreChars.indexOf(c) === -1);

  let start = 0;
  let end = text.length - 1;
  while (start <= end || end >= start) {
    if (text[start] !== text[end]) return false;
    start++;
    end--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
