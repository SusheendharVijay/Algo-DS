class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  enqueue(node) {
    let array = this.heap;
    array.push(node);
    let currentIndex = array.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      parentIndex >= 0 &&
      array[currentIndex].priority <= array[parentIndex].priority
    ) {
      [array[parentIndex], array[currentIndex]] = [
        array[currentIndex],
        array[parentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }
  dequeue() {
    function getLargerChild(currentIndex) {
      let leftChild = array[2 * currentIndex + 1];
      let rightChild = array[2 * currentIndex + 2];
      let childNode;
      if (rightChild === undefined && leftChild !== undefined)
        // just checking if the elements are in the array or not. if its more than lenght
        return array.indexOf(leftChild);
      if (leftChild === undefined && rightChild !== undefined)
        return array.indexOf(rightChild);
      if (leftChild === undefined && rightChild === undefined)
        return array.length; // breaking the loop.

      if (leftChild.priority <= rightChild.priority) childNode = leftChild;
      else childNode = rightChild;
      let childIndex = array.indexOf(childNode);
      return childIndex;
    }
    // here remove refers to removing the root element, max in maxheap and min in minheap
    let array = this.heap;
    this.swapHeap(0, array.length - 1);
    let removed = array.pop();
    // sink down
    let currentIndex = 0;
    let childIndex = getLargerChild(currentIndex);

    while (
      childIndex < array.length &&
      array[currentIndex].priority >= array[childIndex].priority
    ) {
      this.swapHeap(currentIndex, childIndex);
      currentIndex = childIndex;
      childIndex = getLargerChild(currentIndex);
    }
    return removed;
  }
  swapHeap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}
