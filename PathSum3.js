var pathSum = function(root, targetSum, curr = [], result = []) {
    if(!root) return [];
    
    curr.push(root.val);
    
    if(!root.left && !root.right){
        if(targetSum - root.val === 0){
            result.push(curr);
        }
    }
    
    pathSum(root.left, targetSum - root.val, [...curr], result);
    pathSum(root.right, targetSum - root.val, [...curr], result);
    
    return result;
};

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(5);
root.left = new Node(4);
root.right = new Node(8);
root.left.left = new Node(11);
root.right.left = new Node(13);
root.right.right = new Node(4);
root.right.right.left = new Node(5);
root.right.right.right = new Node(1);
root.left.left.left = new Node(7);
root.left.left.right = new Node(2);


console.log(pathSum(root, 22))
