var levelOrder = function(root) {
    if(!root) return [];
    const result = [[]];
    traverseByLevels(root, result, [], 0)
    
    return result;
};

function traverseByLevels(node, result, current, level){
    if(!node) return;

    if(!result[level]){
        result[level] = [];
    }
    result[level].push(node.val);
    level++;
        
    if(node.children){
        for(let child of node.children){
            traverseByLevels(child, result, current, level)    
        }
    }
}