var cloneGraph = function(node) {
    if(!node) return null;
    
    return dfs(node, new Map());
};

function dfs(node, graph){
    if(graph.has(node)){
        return graph.get(node);
    }
    
    const copyNode = new Node(node.val);
    graph.set(node, copyNode);
    
    for(let child of node.neighbors){
         copyNode.neighbors.push(dfs(child, graph));
    }
    
    return copyNode;  
}