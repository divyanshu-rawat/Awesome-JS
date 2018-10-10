//function to combine two one dimensional arrays to one

function array_merge(arr1, arr2) {
	for(var i=0; i< arr2.length; i++) {
		arr1.push(arr2[i]);
	}

	return arr1;
}

console.log(array_merge([1, 2, 3], [4, 5]));
	
