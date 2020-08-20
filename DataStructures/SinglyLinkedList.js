class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let previous = this.head;
    let current = previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;

    this.head = this.head.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    let counter = 0;
    let current = this.head;
    if (index < 0 || index >= this.length) {
      return null;
    }
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    let node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    let previous = this.get(index - 1);
    let node = new Node(val);
    node.next = previous.next;
    previous.next = node;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === this.length - 1) return this.pop();

    if (index === 0) return this.shift();

    let previous = this.get(index - 1);
    let current = previous.next;

    previous.next = current.next;
    return current;
  }

  reverse() {
    if (this.length === 0 || this.length === 1) {
      return;
    }

    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next = null;
    let previous = null;

    while (current) {
      previous = current.next;
      current.next = next;
      next = current;
      current = previous;
    }
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list1 = new SinglyLinkedList();
list1.push("a");
list1.push("b");
list1.push("c");
list1.push("d");
