function indexOf(arr, toBeSearched){ 
    let minimumIndex = 0;
    let maximumIndex = arr.length - 1;
    let currentIndex, currentElement;
 
    while (minimumIndex <= maximumIndex) {
        currentIndex = Math.floor((minimumIndex + maximumIndex)/2);
        currentElement = arr[currentIndex];
 
        if (currentElement < toBeSearched) {
            minimumIndex = currentIndex + 1;
        }
        else if (currentElement > toBeSearched) {
            maximumIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
 
    return -1;
}
//assuming a sorted array A, one can calculate the index of an element
let A = [1,2,4,6,75,667];
let indexOf4 = indexOf(A, 4);
console.log(indexOf4);
