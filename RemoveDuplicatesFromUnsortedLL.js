class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function removeDuplicates(head){
    let curr = head;
    while(curr){
        let runner = curr;
        while(runner && runner.next){
            if(runner.next.val === curr.val){
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        curr = curr.next;
    }
    return head;
}

let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(1);
console.log(removeDuplicates(head))
