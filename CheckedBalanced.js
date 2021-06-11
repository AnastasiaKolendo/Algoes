// Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of 
// this question, a balanced tree is de
// to be a tree such that the heights of the two subtrees of any node never differ by more than one.

function balanced (root){
    if(!root) return true;
    let diff = Math.abs(isBalanced(root.left) - isBalanced(root.right))
    if(diff > 1) return false;
    else {
        return balanced(root.left) && balanced(root.right)
    }
}

function isBalanced(node){
    return 1 + Math.max(isBalanced(node.left), isBalanced(node.right))
}