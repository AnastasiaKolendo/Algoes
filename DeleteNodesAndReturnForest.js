class Tree{
    constructor(val, left, right){
        this.val = val;
        this.left = left;
        this.right = right
    }
}


let root = new Tree(1, new Tree(2, new Tree(4, null, null), new Tree(5, null, null)), new Tree(3, new Tree(6, null, null), new Tree(7, null, null)))

var delNodes = function(root, to_delete) {
    let set = new Set();
    let result = [];
    to_delete.forEach(element => {
        set.add(element)
    });

    helper(root, set, true, result);
    return result;
};

function helper(root, set, isRoot, result){
    if(!root) return null;

    let isDeleted = set.has(root.val)
    if(isRoot && !isDeleted){
        result.push(root);
    }
    root.left = helper(root.left, set, isDeleted, result);
    root.right = helper(root.right, set, isDeleted, result);
    return isDeleted ? null : root;
}

console.log(delNodes(root, [3,5]));