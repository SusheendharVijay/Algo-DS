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
      current= current.next;
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

  unshift(val){
      let newNode = new Node(val);
      newNode.next = this.head;
     this.head = newNode;
     if(!this.tail){
         this.tail= newNode;
     }
        
      this.length++;
      return this; 

  }
}

}
