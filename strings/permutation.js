
function permAlongHelper(str) {
  if (str && str.length === 1) {
    return [str];
  }
  var allCombos = [];
  for (var i = 0; i < str.length; i++) {
    var rest = str.substring(0, i) + str.substring(i+1);
    permAlongHelper(rest)
    .reduce(function(acc, sequence) {
      if (str[i] !== sequence[0]) {
        acc.push(str[i] + sequence);
      }
      return acc;
    }, [])
    .forEach(function(sequence) {
      allCombos.push(sequence);
    });
  }
  return allCombos;
}

function permAlone(str) {
  var noRepeatPermutation = permAlongHelper(str);
  return noRepeatPermutation.length;
}

console.log(permAlone('ab') === 2);
console.log(permAlone('aab') === 2);
console.log(permAlone("aaa") === 0);
console.log(permAlone("aabb") === 8);
console.log(permAlone("abcdefa") === 3600);
console.log(permAlone("abfdefa") === 2640);
console.log(permAlone("zzzzzzzz") === 0);
console.log(permAlone("a") === 1);
console.log(permAlone("aaab") === 0);
console.log(permAlone("aaabb") === 12);
