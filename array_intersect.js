/* Array intersection */

function array_intersect(arr1, arr2) {
	var temp_arr = [];

	for( var i = 0; i < arr1.length; i++ ) {
		if( arr2.indexOf(arr1[i]) != -1 ) {
			temp_arr.push(arr1[i]);
		}
	}

	return temp_arr;
}

console.log(array_intersect([4, 5, 6, 7, "india"], [5, 6, 7, 8]));

