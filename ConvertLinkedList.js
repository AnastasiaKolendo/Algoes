var sortedListToBST = function(head) {
    if(!head || head.val === undefined) return null;
    
    let nums = [];
    let curr = head;
    
    while(curr){
        nums.push(curr.val);
        curr = curr.next;
    }
    
    return helper(nums, 0, nums.length - 1);
};

function helper(nums, start, end){
    if(nums.length === 0) return 0;
    if(nums.length === 1) return new TreeNode(nums[0], null, null);
    
    if(start > end) return null;
    
    let mid = Math.ceil((start + end) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = helper(nums, start, mid - 1);
    node.right = helper(nums, mid + 1, end);
    return node;
 }


