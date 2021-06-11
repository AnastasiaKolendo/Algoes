// Minimal Tree: 
// Given a sorted (increasing order) array with unique integer elements, 
// write an algorithm to create a binary search tree with minimal height.
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function createBinarySearchTree(array){
    return helper(array, 0, array.length - 1)
}

function helper(array, start, end) {
    if(start > end){
        return null;
    }
    let middle = Math.floor((start + end) / 2)
    console.log(middle)
    let node = new TreeNode(array[middle]);
    node.left = helper(array, start, middle - 1)
    node.right = helper(array, middle + 1, end)
    return node;
}

console.log(createBinarySearchTree([1, 2, 3, 4, 5, 6, 7, 8]))