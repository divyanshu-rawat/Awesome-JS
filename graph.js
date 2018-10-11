class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacentList[v1].push(v2);
    this.adjacentList[v2].push(v1);
  }

  // remove edge
  removerEdge(v1, v2) {
    this.adjacentList[v1] = this.adjacentList[v1].filter(v => {
      return v !== v2;
    });
    this.adjacentList[v2] = this.adjacentList[v2].filter(v => {
      return v !== v1;
    });
  }

  // remove vertex
  removeVertex(v1) {
    while (this.adjacentList[v1].length) {
      const v = this.adjacentList[v1].pop();
      this.removerEdge(v, v1);
    }
    delete this.adjacentList[v1];
  }

  // dfs recurssion
  dfsRecursion(start) {
    let result = [];
    let visited = {};
    const adjacentList = this.adjacentList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacentList[vertex].forEach(n => {
        if (!visited[n]) {
          dfs(n);
        }
      });
    })(start);
    return result;
  }
}

const g1 = new Graph();
g1.addVertex('A');
g1.addVertex('B');
g1.addVertex('C');
g1.addVertex('D');
g1.addVertex('E');
g1.addVertex('F');

g1.addEdge('A', 'B');
g1.addEdge('A', 'C');
g1.addEdge('B', 'D');
g1.addEdge('C', 'E');
g1.addEdge('D', 'E');
g1.addEdge('D', 'F');
g1.addEdge('E', 'F');
g1.dfsRecursion('A');
console.log(g1.dfsRecursion('A'));
