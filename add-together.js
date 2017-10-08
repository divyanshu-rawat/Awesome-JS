function addTogether() {
  if (arguments.length === 1) {
    if (typeof arguments[0] !== 'number') {
      return undefined;
    }
    var firstArgs = arguments[0];
    return function() {
        return (typeof arguments[0] !== 'number') ? undefined : firstArgs + arguments[0];
    };
  } else if (arguments.length === 2) {
    // check is number
    return (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') ? undefined : (arguments[0] + arguments[1]);
  }
  return undefined;
}

console.log(addTogether() == undefined);
console.log(addTogether(2, 3) === 5);
console.log(addTogether(2)(3) === 5);
console.log(typeof addTogether("http://bit.ly/IqT6zt") === 'undefined');
console.log(typeof addTogether(2, "3") === 'undefined');
console.log(typeof addTogether(2)([3]) === 'undefined');
console.log(addTogether(-2)(13) === 11);
