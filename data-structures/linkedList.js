class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    let node = new Node(value);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.value = value;
      node.next = this.head;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  remove(value) {
    let node = this.head;
    let previousNode;
    while (node) {
      if (node.value === value) {
        previousNode = this.head;
        this.head = node.next;
      } else if (node.next.value === value) {
        previousNode = node;
        node = node.next;
        break;
      } else {
        return false;
      }
    }
    previousNode.next = node.next;
    let temp = node.value;
    node = null;
    this.length--
    return temp;
  }

  removeAt(index) {
    if (!this.head) return undefined;
    if (index === 0) return this.head;

    let node = this.head;
    let previousNode;
    for (let i = 0; i < index - 1; i++) {
      if (node) {
        previousNode = node;
        node = node.next;
      } else {
        return undefined;
      }
    }
    previousNode.next = node.next;
    let temp = node.value;
    node = null;
    this.length--
    return temp;
  }
}

let fruitList = new LinkedList();

fruitList.add('Apple');
fruitList.add('Banana');
fruitList.add('Cherry');
fruitList.add('Watermelon');
fruitList.add('Dragon Fruit');

fruitList;

fruitList.removeAt(3);

fruitList.contains('Cherry');
