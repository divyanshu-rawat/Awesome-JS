function array_collapse(arr) {
	var collapse_arr = [];

	for (var i=0; i<arr.length; i++) {
		for (var j=0; j<arr[i].length; j++) {
			collapse_arr.push(arr[i][j]);
		}
	}

	return collapse_arr;
}

console.log(array_collapse([[1, 2, 3, 4], [5, 6], ["hello", "world"]]));

