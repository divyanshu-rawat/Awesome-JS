// Challenge: find the greatest product of three elements of an array.  The input array will always have 3 or more elements.

// The result is either the product of the three greatest numbers or the greatest and the two least negatives.  This implementation takes O(n) time and O(1) space.

const greatestTripleProduct = (arr) => {
  let greatest, secondGreatest, thirdGreatest, least, secondLeast;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greatest || greatest === undefined) {
      greatest = arr[i];
    }
    if (arr[i] <= greatest && (arr[i] > secondGreatest || secondGreatest === undefined)) {
      secondGreatest = arr[i];
    }
    if (arr[i] <= secondGreatest && (arr[i] > thirdGreatest || thirdGreatest === undefined)) {
      thirdGreatest = arr[i];
    }
    if (arr[i] < least || least === undefined) {
      least = arr[i];
    }
    if (arr[i] >= least && (arr[i] < secondLeast || secondLeast === undefined)) {
      secondLeast = arr[i];
    }
  }

  return greatest * Math.max(secondGreatest * thirdGreatest, least * secondLeast);
}