// Function to separate an one dimensional array into a two dimensional array based on the count parameter passed

function array_chunk(arr, count){
    var temp_arr = [];

    for(var i=0; i<arr.length;){
        var chunk_arr = [];
        for(var j=0; j<count; j++){
            if(!arr[i])
                break;
            chunk_arr.push(arr[i]);
            i++;
        }
        temp_arr.push(chunk_arr);
    }

    return temp_arr;
}

console.log(array_chunk([1,2,3,4,5,6,7,8,9], 4));
// [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9 ] ]
