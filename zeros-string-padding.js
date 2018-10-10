const zeroStringPadding = (str, max) => {
  return str.length < max ? zeroStringPadding(str + "0", max) : str;
};

zeroStringPadding("3", 6);
