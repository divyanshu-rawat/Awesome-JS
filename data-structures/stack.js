/**
 * Represents stack data structure.
 */
const Stack = function() {
  const items = [];

  /**
   * Returns stack size.
   */
  this.size = () => {
    return items.length;
  }

  /**
   * Adds item on the top of stack.
   */
  this.push = (item) => {
    return items.push(item);
  }

  /**
   * Removes and returns the top most element in the stack.
   */
  this.pop = () => {
    return items.length > 0
      ? items.pop()
      : null;
  }

  /**
   * Returns the top most element in the stack, but doesn’t delete it.
   */
  this.peek = () => {
    return items.length > 0
      ? items[items.length - 1]
      : null;
  }

  /**
   * Returns value indicating that the stack is empty.
   */
  this.isEmpty = () => {
    return items.length === 0;
  }
}

/**
 * Examples
 */
const myStack = new Stack();

console.log("Initial stack size", myStack.size());

myStack.push(1);
console.log("Pushed value 1, current stack size: ", myStack.size());

myStack.push(2);
console.log("Pushed value 2, current stack size: ", myStack.size());

const poppedItem = myStack.pop();
console.log("Popped off the two", poppedItem);
console.log("Stack only contains one, now", myStack.size());

const peekedItem = myStack.peek();
console.log("Peeked item", peekedItem);
console.log("Stack still contains one, now", myStack.size());