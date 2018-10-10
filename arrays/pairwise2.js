function pairwise(arr, arg) {
  var consumed = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (consumed.indexOf(i) >= 0 === true || consumed.indexOf(j) >= 0 === true) {
         continue;
      }
      if ((arr[i] + arr[j]) === arg) {
          consumed.push(i);
          consumed.push(j);
      }
    }
  }
  return consumed.reduce(function(acc, n) {
    return acc + n;
  }, 0);
}

console.log(pairwise([1,4,2,3,0,5], 7) === 11);
console.log(pairwise([1, 3, 2, 4], 4) === 1);
console.log(pairwise([1,1,1], 2) === 1);
console.log(pairwise([0, 0, 0, 0, 1, 1], 1) === 10);
console.log(pairwise([], 100) === 0);
