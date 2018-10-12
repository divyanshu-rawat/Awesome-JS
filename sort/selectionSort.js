/**
 *	SELECTION SORT
 * 	Time Complexity: O( N^2 )
 *	
 *	Sorts a list of similar elements in O(N^2) time complexity
 *	@Param list - list of items to be sorted
 */

const selectionSort = function(list) {

	/**
	 *	Swap Method
 	 * 	Time Complexity: O(1)
	 *
	 *	Swaps two elements of the list
	 *	@Param list - List of items to be sorted
	 *	@Param pos1 - position of the first element to be swapped
	 *	@Param pos2 - position of the second element to be swapped
	 */
	const swap = function(list, pos1, pos2) {
		const temp = list[pos1];
		list[pos1] = list[pos2];
		list[pos2] = temp;

		return list;
	}

	/**
	 *	Sort Method
 	 * 	Time Complexity: O( N^2 )
	 *
	 *	Sorts the given list by swapping smallest element in the remaining list by the first element of the remaining list. 
	 *	@Param list - List of items to be sorted
	 */
	const sort = function(list) {
		let pos = -1;

		// Repeat until the second last element
		while(pos < list.length-1) {
			let min = pos+1;

			// Grab the minimum element of the remaining list
			for(let i = pos+2; i < list.length; i++)
				if(list[i] < list[min])
					min = i;

			// Swap minimum element with first element of the remaining list
			swap(list, ++pos, min);
		}

		return list;
	}

	// Return the sorted list
	return sort(list);
}


const arrayToSort = [5, 8, 9, 3, 7, 4, 6, 7];
console.log("Elements before selection sort : ", arrayToSort);
console.log("Elements after selection sort : ", selectionSort(arrayToSort));