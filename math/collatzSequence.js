const collatzSequence = (n) => {
  const array = [n];
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    }
    else if (n % 2 !== 0) {
      n = 3 * n + 1;
    }
    array.push(n);
  }
  return array;
}

