/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

Input: a string
Output: a number
Example: 
    findLongestWord("The quick brown fox jumped over the lazy dog");
    // returns 6
*/

function findLongestWord(str) {
    return str.split(' ')           /* 1 */
        .map(word => word.length)   /* 2 */
        .sort((a, b) => a - b)      /* 3 */
        .pop();                     /* 4 */
}
// 1. The string is split into an array of individual words ['The', 'quick', 'brown', 'fox'...]
// 2. The array of words is transformed into an array of word lengths [3, 5, 5, 3...]
// 3. The array of word lengths is sorted from smallest to largest  [3, 3, 5, 5...]
// 4. The last element of the array is returned (the largest word length)
