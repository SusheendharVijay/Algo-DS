class simplePriorityQueue {
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
    const nodes = new simplePriorityQueue();
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
