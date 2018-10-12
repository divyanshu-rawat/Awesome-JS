const quickSort = function(list) {

	/**
	 * Randomize array element order in-place.
	 * Using Durstenfeld shuffle algorithm.
	 */
	function shuffle(array) {
	 	for (let i = array.length - 1; i > 0; i--) {
	 		const j = Math.floor(Math.random() * (i + 1));
	 		const temp = array[i];
	 		array[i] = array[j];
	 		array[j] = temp;
	 	}
	 	return array;
	}

	// To avoid the worst case complexity
	list = shuffle(list);

	if(list.length <= 1) return list;

	function sort(list) {
		if(list.length <= 1) 
			return list;
			
		const pivot = list[0];
		let l1 = [], l2 = [];

		for(let i = 1; i < list.length; i++) {
			if(list[i] <= pivot)
				l1.push(list[i]);
			else
				l2.push(list[i]);
		}

        /** Sort both partitions */
		l1 = sort(l1);
		l2 = sort(l2);

		return [...l1, pivot, ...l2];
	} 

	return sort(list);
}

const array = [7, 1, 3, 1, 9, 6];
console.log("Elements Before Quick sort-->", array);
console.log("Elements After Quick Sort-->", quickSort(array));