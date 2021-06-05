var reverseList = function(head) {
    if(!head) return head;
    if(!head.next) return head;
  
    let curr = head;
    let arr = [curr.val]
  
    while(curr.next){
      curr = curr.next
      arr.push(curr.val)
    }
  
    let newHead = new ListNode()
    newCurr = newHead;
      
    for(let i = arr.length - 1; i >= 0; i--){
      let newListNode = new ListNode(arr[i], null)
       newCurr.next = newListNode;
       newCurr = newListNode
    }
    return newHead.next
  };