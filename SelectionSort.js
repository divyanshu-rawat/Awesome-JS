function selectionSort(arr){
  var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}


var arrayToSort = [5,8,9,3,7,4,6,7];
console.log("Elements Selection Bubble sort : ",arrayToSort);
console.log("Elements Selection Bubble sort : ",selectionSort(arrayToSort));