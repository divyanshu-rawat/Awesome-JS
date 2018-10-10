function mergeSort(arr){
   let len = arr.length;
   if(len <2)
      return arr;
   let mid = Math.floor(len/2),
       left = arr.slice(0,mid),
       right =arr.slice(mid);
   return merge(mergeSort(left),mergeSort(right));
}


function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}
