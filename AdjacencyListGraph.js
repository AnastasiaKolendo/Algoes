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

    bfs(startingNode){
        let visited = {};
        let q = [];
        q.push(startingNode);
        visited[startingNode] = true;

        while(q.length){
            let curr = q.shift()
            let edges = this.AdjList.get(curr);
            
            for(let vertex of edges){
                if(!visited[vertex]){
                    visited[vertex] = true;
                    q.push(vertex)
                }
                
            }
            console.log(curr);
        }
    }

    findRoute(node1, node2){
        if(node1 == node2) return true;
        console.log(node1, node2)
        let seen = {}
        let q = [];
        q.push(node1)
        seen[node1] = true;
    
        while(q.length){
            let curr = q.shift()
            let edges = this.AdjList.get(curr);
            
            for(let vertex of edges){
                if(!seen[vertex]){
                    if(vertex === node2){
                        return true
                    }
                    seen[vertex] = true;
                    q.push(vertex)
                }
            }
            console.log(curr);
        }
        return false;
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
graph.bfs('A')
console.log(graph.findRoute('A', 'C'))