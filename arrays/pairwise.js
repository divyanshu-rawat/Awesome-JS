/**
 * Created by Vampiire on 5/7/17.
 *
 */



function pairwise(arr, arg) {
  var pairs = [];

  switch(arr.length){
      case 0:
          return 0;
      case 1:
          return arr[0];
  }

  arr.forEach(function(element, index){

     var component = arg - element,
         elem_index = index,
         comp_index = arr.indexOf(component);

     if(comp_index !== -1){
         if(!pairs.includes(elem_index) && !pairs.includes(comp_index)){
             if(elem_index !== comp_index){
                 arr[index] = null;
                 arr[comp_index] = null;
                 pairs.push(elem_index, comp_index);
             }
         }
     }
  });

  pairs = pairs.reduce(function(a,b){
                      return a + b;
                  });

  return pairs;
}

// console.log(pairwise([1,4,2,3,0,5], 7)); // return 11, pass
// console.log(pairwise([1, 3, 2, 4], 4)); // return 1, pass
// console.log(pairwise([1, 1, 1], 2)); // return 1, pass
// console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // return 10, pass
// console.log(pairwise([], 10));