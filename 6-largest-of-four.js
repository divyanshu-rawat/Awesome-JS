function largestOfFour(arr) {
  return arr.map(function (subarray) {
    return subarray.reduce(function (acc, val) {
      return val > acc ? val : acc;
    }, 0);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
