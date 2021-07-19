var lowestCommonAncestor = function(root, p, q) {
    return helper(root, p, q);
};

function helper(root, p, q){
    if(!root) return root;
    
    if(root.val < p.val && root.val < q.val){
        return helper(root.right, p, q);
    }
    
    if(root.val > p.val && root.val > q.val){
        return helper(root.left, p, q);
    }
    
    
    if(root.val >= p.val && root.val <= q.val){
        return root;
    }

    if(root.val <= p.val && root.val <= q.val){
        return root;
        
    }   
    return root;
}