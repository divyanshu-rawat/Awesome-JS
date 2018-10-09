/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Input: a string
Output: a modified string
Example: 
    titleCase("I'm a little tea pot");
    // returns 'I'm A Little Tea Pot'
*/

function titleCase(str) {
    return str.split(' ')                                                   /* 1 */
    .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)  /* 2 */      
    .join(' ');                                                             /* 3 */    
}

// 1. The string is split into an array of individual words
// 2. Each word in the array is transformed
//      - the first index(letter) of the word becomes uppercased
//      - all the indexes(letters) starting at index 1 and beyond become lowercased
// 3. The array of title cased words is joined to form a string