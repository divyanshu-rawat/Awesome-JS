function findLongestWord(str) {
  var words = str.split(' ');
  var maxLength = words.reduce(function (max, word) {
    return word.length > max ? word.length : max;
  }, 0);
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
