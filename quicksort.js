
function quickSort(array) {
    if(array.length <= 1) {
        return array;
    } else if(array.length == 2) {
        if(array[0] <= array[1]){
            return array;
        } else {
            return [array[1], array[0]];
        }
    }

    var prePivot = [];
    var postPivot = [];
    var pivotPoint = Math.floor(array.length/2);
    var pivot = array[pivotPoint];
    for(var i=0; i < array.length; i++){
        if(i == pivotPoint) {
            continue;
        }
        else if(array[i]<=pivot) {
            prePivot.push(array[i]);
        } else {
            postPivot.push(array[i]);
        }
    }    

    return [...quickSort(prePivot), pivot, ...quickSort(postPivot)];
} 

var array = [7,1,3,1,9,6];
console.log("Elements Before Quick sort-->", array);
console.log("Elements After Quick Sort-->", quickSort(array));