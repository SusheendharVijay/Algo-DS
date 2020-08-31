class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    // can add error hadnling here like checking for valid vertex etc.
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }
}
