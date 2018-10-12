class Stack {
  constructor() {
    this.value = [];
  }

  push(item) {
    this.value.push(item);
  }

  pop() {
    return this.value.length > 0 ? this.value.pop() : null;
  }

  // returns the top most elements in the stack, but doesn’t delete it.
  peek() {
    return this.value[this.value.length - 1];
  }

  isEmpty() {
    return this.value.length === 0;
  }

  printStack() {
    let str = '';
    for (let i = 0; i < this.value.length; i++) {
      str += this.value[i] + ' ';
    }
    return str;
  }
}
