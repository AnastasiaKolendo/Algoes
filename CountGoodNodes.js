var goodNodes = function(root, max = root.val) {
    if(!root) return 0;
    let sum = 0;
    if(root.val >= max){
        max = root.val;
        sum = 1;
    }   
    return sum + goodNodes(root.left, max) + goodNodes(root.right, max)
};