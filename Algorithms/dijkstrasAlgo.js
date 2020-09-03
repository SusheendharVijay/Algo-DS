class simplePriorityQueue {
  // a simple priority queue
  constructor() {
    this.queue = [];
  }
  enqueue(val, priority) {
    this.queue.push({ val, priority });
    this.sort(this.queue);
  }
  dequeue() {
    return this.queue.shift();
  }
  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  // fast priority queue log(n) insert and delete times. // smaller value is higher priority.
  constructor() {
    this.queue = [];
  }
  enqueue(val, priority) {
    let node = new Node(val, priority);
    let array = this.queue;
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
    let array = this.queue;
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
    [this.queue[idx1], this.queue[idx2]] = [this.queue[idx2], this.queue[idx1]];
  }
}

class weightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  Dijkstra(start, final) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.queue.length) {
      smallest = nodes.dequeue().val;
      if (smallest === final) {
        while (previous[smallest]) {
          path.push(smallest);
          path.push("->");
          smallest = previous[smallest];
        }
        path.push(smallest);
        return path.reverse().join("");
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          let calculated = neighbor.weight + distances[smallest];
          if (calculated < distances[neighbor.node]) {
            distances[neighbor.node] = calculated;
            previous[neighbor.node] = smallest;
            nodes.enqueue(neighbor.node, calculated);
          }
        }
      }
    }
  }
}
var graph = new weightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");
