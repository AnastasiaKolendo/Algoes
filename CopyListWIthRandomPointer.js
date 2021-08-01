var copyRandomList = function(head) {
    if(!head){
        return head;
    }
    
    let headCopy = new Node(head.val, null, null);
    
    let curr = head;
    let copyCurr = headCopy;
    
    while(curr.next){
        copyCurr.next = new Node(curr.next.val, null, null);
        curr = curr.next;
        copyCurr = copyCurr.next;
    }
    
    curr = head;
    copyCurr = headCopy;
    
    while(curr){
        if(curr.random !== null){
            let currRandom = head;
            let copyRandom = headCopy;
            
            while(currRandom !== curr.random){
                currRandom = currRandom.next;
                copyRandom = copyRandom.next;
            }
            
            copyCurr.random = copyRandom;
            
        } else {
            copyCurr.random = null;
        } 
        curr = curr.next;
        copyCurr = copyCurr.next;
    }
    
    return headCopy;
};


