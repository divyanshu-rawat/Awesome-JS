const longestWord = str => {
  var strSplit = str.split(' ');
  const longestWord = strSplit.reduce((a, b) => {
    if (a.length > b.length) {
      return a;
    } else {
      return b;
    }
  });
  return longestWord;
};

console.log(longestWord('goes Argument bjkdqhdiqwhdihqwd here'));
