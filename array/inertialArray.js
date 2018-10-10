const isInertial = (arr) => {
  let bool = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && Math.max(arr[i]) % 2 === 0 &&
        arr[i] % 2 !== 0 > arr[i] % 2 === 0 &&
        arr[i] % 2 !== 0 < Math.max(arr[i]))

       bool = true;

    else bool = false;
  }
  return bool;
}

