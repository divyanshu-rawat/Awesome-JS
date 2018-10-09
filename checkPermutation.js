/* Given two strings, write a method to decide if one is a permutation
of the other. */

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } else {
    const sorted1 = str1.split('').sort().join();
    const sorted2 = str2.split('').sort().join();
    return sorted1 === sorted2;
  }
}

console.log(checkPermutation('aaaaa', 'aaaaa'));

console.log(checkPermutation('racecar', 'arcerac'));

console.log(checkPermutation('bcdef', 'acde'));
