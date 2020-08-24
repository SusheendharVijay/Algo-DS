class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      let lastElement = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return lastElement;
    }
    let lastElement = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    lastElement.prev = null;
    return lastElement;
  }
  shift() {
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldhead;
    }
    if (this.length === 0) return undefined;

    this.head = oldHead.next;
    this.head.prev = null;
    oldhead.next = null;
    this.length--;
    return oldhead;
  }
}

let newList = new DoublyLinkedList();
