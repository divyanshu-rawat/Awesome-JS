// Hamming Distance between two equally length strings is the number
// of different characters at given positions. For example, 101 and 011
// have a hamming distance of two since the first two characters are different
// while the last one is the same.

function hammingDistance(a, b){
  // Here is make sure the two strings are of equal length
  if(a.length !== b.length){
    console.log('Strings must be the same length!')
  }
  else{
    // Set a variable for the distance that will be outputted
    let distance = 0;
    // Make a for loop that will make comparisons between the two strings
    // at a given position
    for(i = 0; i <= a.length; i++){
      if (a[i] !== b[i]){
        // Increment the distance variable if there a mismatch is found
        distance += 1;
      }
    }
    // Output the result
    console.log(distance);
  }
}

let a = '110011'
let b = '001111'
hammingDistance(a,b);
