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
    let current = this.head.next;

    while (current.next !== null) {
      previous = previous.next;
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
}
