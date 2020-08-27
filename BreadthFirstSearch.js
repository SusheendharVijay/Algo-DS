/*
This is only for binary trees 
*/

class Node {
  constructor() {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (newNode.val > current.val) {
        if (current.right) current = current.right;
        else {
          current.right = newNode;
          return this;
        }
      } else {
        if (current.left) current = current.left;
        else {
          current.left = newNode;
          return this;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return undefined;

    let current = this.root;
    while (current) {
      if (val === current.val) {
        return current;
      } else if (val > current.val) {
        if (current.right) current = current.right;
        else return undefined;
      } else if (val <= current.val) {
        if (current.left) current = current.left;
        else return undefined;
      }
    }
    return undefined;
  }
  contains(val) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (val === current.val) {
        return true;
      } else if (val > current.val) {
        if (current.right) current = current.right;
        else return false;
      } else if (val <= current.val) {
        if (current.left) current = current.left;
        else return false;
      }
    }
    return false;
  }

  BFS() {
    let queue = [this.root];
    let visited = [];
    let current;
    while (queue.length !== 0) {
      current = queue.pop();
      visited.push(current.val);
      if (current.left) queue.unshift(current.left);
      if (current.right) queue.unshift(current.right);
    }
    return visited;
  }
  DFSPreOrder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
  DFSPostOrder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(current);
    return visited;
  }
  DFSInOrder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
  }
}
