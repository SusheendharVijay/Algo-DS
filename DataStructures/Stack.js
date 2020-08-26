class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    let oldfirst = this.first;
    newNode.next = oldfirst;
    this.first = newNode;

    return ++this.size;
  }
  pop() {
    if (this.size === 0) {
      return null;
    }
    let removedNode = null;
    if (this.size === 1) {
      removedNode = this.first;
      this.first = null;

      this.last = null;
      this.size--;
    }
    removedNode = this.first;
    this.first = this.first.next;
    removednode.next = null;
    return removedNode;
  }
}
