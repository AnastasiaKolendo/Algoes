function findRoute(graph, node1, node2){
    if(node1 === node2) return true
    let seen = {}
    let q = [];
    q.push(node1)
    seen[node1] = true;

    while(q.length){
        let curr = q.shift();
        let neighbords = graph[curr];

        for(let neighbor in neighbords){
            if(!seen[neighbords]){
                if(neighbor === node2){
                    return true;
                }
                seen[neighbor] = true;
                q.push(neighbor)
            }
        }
    }
    return false;
}