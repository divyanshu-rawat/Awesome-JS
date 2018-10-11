
class Stack {

  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(newItem) {
    this.items = [newItem, ...this.items]
  }

  pop() {
    const [ poppedItem, ...rest ] = this.items;
    this.items = rest;
    return poppedItem;
  }

  items() {
    return this.items;
  }

}

const myStack = new Stack();

console.log("Initial stack size",myStack.size());
console.log("Initial stack items",myStack.items);

myStack.push(1);

console.log("Stack now contains one",myStack.items);
console.log(myStack.size());

myStack.push(2);

console.log("Stack now contains two",myStack.items);
console.log(myStack.size());

const poppedItem = myStack.pop();

console.log("Popped off the two",poppedItem);
console.log("Stack only contains one, now",myStack.items);
console.log(myStack.size());
