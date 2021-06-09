class Graph{
    constructor(numOfVertices){
        this.numOfVertices = numOfVertices;
        this.AdjList = new Map();
    }

    //addVertex
    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w){
        this.AdjList.get(v).push(w)
        this.AdjList.get(w).push(v)
    }

    printGraph(){
        let keys = this.AdjList.keys();

        for(let key of keys){
            let vals = this.AdjList.get(key)
            for (let val of vals){
                console.log('Key ' + key + '. Value: ' + val )
            }
        }
    }
}

let graph = new Graph(6);
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for(let vertice of vertices){
    graph.addVertex(vertice)
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');

graph.printGraph();