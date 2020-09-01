class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    // can add error handling here like checking for valid vertex etc.
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
  dfsRecursive(vertex) {
    let traversal = [];
    let visited = {};
    function helperFunction(vertex) {
      if (!vertex) return;
      traversal.push(vertex);
      visited[vertex] = true;
      for (neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) helperFunction(neighbor);
      }
    }
    helperFunction(vertex);
    return traversal;
  }
  dfsIterative(vertex) {
    let stack = [vertex];
    let visited = {};
    let traversal = [];
    let current;
    while (stack.length) {
      current = stack.pop();
      traversal.push(current);
      visited[current] = true;
      for (let neighbor of this.adjacencyList[current]) {
        if (!visited[neighbor] && !stack.includes(neighbor))
          stack.push(neighbor);
      }
    }
    return traversal;
  }
}
