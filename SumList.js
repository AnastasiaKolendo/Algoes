function sumList(head1, head2){
    let curr1 = 0;
    let curr2 = 0;
    let result = new ListNode(0);
    let resCurr = result.next;
    let carry = 0;
    let sum = 0;

    while(curr1 || curr2){
        let curr1Val = (curr1 == null) ? 0 : curr1.val
        let curr2Val = (curr2 == null) ? 0 : curr2.val

        sum = curr1Val + curr2Val;

        carry += sum % 10;
        
        resCurr.next = new ListNode(carry);
        carry = Math.floor(sum / 10)
    }

    return result;
}

class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let head1 = new ListNode(7);
head1.next = new ListNode(1);
head1.next.next = new ListNode(6);

let head2 = new ListNode(5);
head2.next = new ListNode(9);
head2.next.next = new ListNode(2);

let arr = new Array(1, 3, 5)
console.log(arr, 'arr')

console.log(sumList(head1, head2))