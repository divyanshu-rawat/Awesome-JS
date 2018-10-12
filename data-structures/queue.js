/**
 * Creates a Queue Data Structure with FIFO approach
 * @param {Array} list Initial list of items for the queue
 */
const Queue = function(list) {
	const data = [];

	/**
	 * Inserts an item to the back of Queue
	 * @param {Any} item Item to be inserted in the Queue
	 */
	this.push = function(item) {
		data.push(item);
	}

	/**
	 * Removes and returns the element from teh front of the Queue
	 */
	this.pop = function() {
		if(this.empty()) 
			return false;
		
		const item = data[0];
		data.splice(0, 1);
		return item;
	}

	/**
	 * Returns true if the Queue is empty otherwise false
	 */
	this.empty = function() {
		return data.length == 0;
	}

	/**
	 * Returns number of items in the Queue
	 */
	this.length = function() {
		return data.length;
	}

	/**
	 * Initialize the Queue with a predefined list of elements
	 */
	if(list instanceof Array) {
		for(item of list)
			this.push(item);
	}
}

/**
 * Examples
 */

const myQueue = new Queue([1, 2]);
myQueue.push(5);

console.log(myQueue.length());
while(!myQueue.empty()) {
    console.log(myQueue.pop());
}