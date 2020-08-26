const { createReadStream } = require("fs");

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
      return oldHead;
    }
    if (this.length === 0) return undefined;

    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    let currentNode, counter;
    if (index >= this.length || index < 0) {
      return null;
    }
    let middle = Math.floor(this.length / 2);
    if (index <= middle) {
      counter = 0;
      currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    } else {
      counter = this.length - 1 - index;
      currentNode = this.tail;
      while (counter !== 0) {
        currentNode = currentNode.prev;
        counter--;
      }
      return currentNode;
    }
  }
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return !!this.unshift(value);

    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    if (prevNode) {
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      newNode.next.prev = newNode;
      newNode.prev = prevNode;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index === 0) return this.unshift();

    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    if (prevNode) {
      let removedNode = prevNode.next;

      prevNode.next = removedNode.next;
      prevNode.next.prev = prevNode;

      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    }
    return undefined;
  }
  reverse() {
    if (this.length === 0 || this.length === 1) return;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let nextNode;
    let prevNode = null;

    while (current) {
      nextNode = current.next;
      current.next = prevNode;
      if (prevNode) prevNode.prev = current;

      prevNode = current;
      current = nextNode;
    }
  }
}

let newList = new DoublyLinkedList();
let;
