function palindrome(str) {
  var lcStr = str.toLowerCase().replace(/[^a-zA-Z\d]/g, '');
  var middle = Math.floor(lcStr.length / 2);
  for (var i = 0; i < middle; i++) {
    if (lcStr[i] !== lcStr[lcStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");