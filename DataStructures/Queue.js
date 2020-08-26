class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    let removed;
    if (this.size === 0) return null;

    if (this.size === 1) {
      removed = this.first;
      this.first = null;
      this.last = null;
      this.size--;
    } else {
      removed = this.first;
      this.first = this.first.next;
      this.size--;
    }
    removed.next = null;
    return removed;
  }
}
