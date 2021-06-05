
var hasCycle = function(head) {
    if(!head) return false;
    if(!head.next) return false;
    
    let array = [];
    let curr = head;
    while(curr.next){
        if(array.includes(curr)){
            return true;
        } else {
            array.push(curr)
        }
        curr = curr.next
    }
    return false
};