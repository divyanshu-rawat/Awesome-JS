/**
 * Creates a Max Heap Data Structure and provide push and pop methods
 * @param {Array} list List of elements to initialize the heap with
 */
const MaxHeap = function(list) {

	const heap = [];

	/**
	 * Swap the two elements at the given positions
	 * @param {Number} x Position of first element
	 * @param {Number} y Position of second element
	 */
	const swap = function(x, y) {
		const item = heap[x];
		heap[x] = heap[y];
		heap[y] = item;
	}

	/**
	 * Inserts an element in the heap at the proper place
	 * @param {Any} item Item to be inserted to the heap
	 */
	this.push = function(item) {
		heap.push(item);
		let pos = heap.length;

		/**
		 * Swap the element with its parent until it is greater than its parent
		 */
		while(parseInt(pos/2 -1) >= 0 && heap[parseInt(pos/2 -1)] < heap[parseInt(pos-1)]) {
			swap(parseInt(pos/2 -1), parseInt(pos-1));
			pos = parseInt(pos/2);
		}
	}

	/**
	 * Removes the top element from the heap (returns the largest element from the heap)
	 */
	this.pop = function() {
		if(this.empty())
			throw "No Such Element Found Exception.";

		/**
		 * Replace the top element with the last element in the heap
		 */
		const item = heap[0];
		heap[0] = heap[heap.length-1];
		heap.pop();

		const pos = 1;

		/**
		 * Replace the element with largest of its two children until it is smaller than any of its children
		 */
		while(pos*2-1 < heap.length) {
			if(pos*2 < heap.length) {
				if(heap[pos*2] < heap[pos*2-1]) {
					if(heap[pos-1] >= heap[pos*2-1]) break;

					swap(pos-1, pos*2-1);
					pos = pos*2;
				} else {
					if(heap[pos-1] >= heap[pos*2]) break;

					swap(pos-1, pos*2);
					pos = pos*2+1;
				}
			} else {
				if(heap[pos-1] >= heap[pos*2-1]) break;

				swap(pos-1, pos*2-1);
				pos = pos*2;
			}
		}

		return item;
	}

	/**
	 * Returns true if the heap is empty otherwise false
	 */
	this.empty = function() {
		return heap.length == 0;
	}

	/**
	 * Initialize the head with given array
	 */
	if(typeof list == "object") {
		for(const item of list)
			this.push(item);
	}

}