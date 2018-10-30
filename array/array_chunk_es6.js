// Function to separate an one dimensional array into a two dimensional array based on the count parameter passed

const array_chunk = (arr, count) => {
    return arr.join('').match(new RegExp('.{1,' + count + '}', 'g')).map(item => item.split(''));
}
​
console.log(array_chunk([1,2,3,4,5,6,7,8,9], 4));
// [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9 ] ]