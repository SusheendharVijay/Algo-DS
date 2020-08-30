class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    let array = this.heap;
    array.push(val);
    let currentIndex = array.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (parentIndex >= 0 && array[currentIndex] > array[parentIndex]) {
      [array[parentIndex], array[currentIndex]] = [
        array[currentIndex],
        array[parentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }
  remove() {
    function getLargerChild(currentIndex) {
      let leftChild = array[2 * currentIndex + 1];
      let rightChild = array[2 * currentIndex + 2];
      if (rightChild === undefined && leftChild !== undefined)
        // just checking if the elements are in the array or not. if its more than lenght
        return array.indexOf(leftChild);
      if (leftChild === undefined && rightChild !== undefined)
        return array.indexOf(rightChild);
      if (leftChild === undefined && rightChild === undefined)
        return array.length; // breaking the loop.

      let childIndex = array.indexOf(Math.max(leftChild, rightChild));
      return childIndex;
    }
    // here remove refers to removing the root element, max in maxheap and min in minheap
    let array = this.heap;
    this.swapHeap(0, array.length - 1);
    let deleted = array.pop();
    // sink down
    let currentIndex = 0;
    let childIndex = getLargerChild(currentIndex);

    while (
      childIndex < array.length &&
      array[currentIndex] < array[childIndex]
    ) {
      this.swapHeap(currentIndex, childIndex);
      currentIndex = childIndex;
      childIndex = getLargerChild(currentIndex);
    }
    return deleted;
  }
  swapHeap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}
