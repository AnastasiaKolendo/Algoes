var getIntersectionNode = function(headA, headB) {
    const headALength = caclulateLength(headA);
    const headBLength = caclulateLength(headB);
    
    let diff = Math.abs(headALength - headBLength);
 
    if(headALength > headBLength){
        headA = moveHead(headA, diff);
    } else if(headALength < headBLength){
        headB = moveHead(headB, diff);
    }
    
    while(headA && headB){
        if(headB === headA) return headA;
        headB = headB.next;
        headA = headA.next;
    }
    
    return null;
};

function caclulateLength(node){
    let length = 0;
    
    while(node){
        length++;
        node = node.next;
    }
    
    return length;
}
function moveHead(node, diff){
    for(let i = 0; i < diff; i++){
        node = node.next;
    }
    
    return node;
}