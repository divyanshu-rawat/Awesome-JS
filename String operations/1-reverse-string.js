function reverseString(str) {
  var array = str.split('');
  var reversed = array.reverse();
  return reversed.join('');
}

reverseString("hello");
