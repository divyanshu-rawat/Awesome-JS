const stringTruncate = (str, lgt) => {
  if (str.length > lgt) {
    return str.substring(0, lgt) + "...";
  }
  return str;
};

stringTruncate("hello mortal world", 13);
