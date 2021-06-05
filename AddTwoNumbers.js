var addTwoNumbers = function (l1, l2) {

    if (!l1) return l1;
    if (!l2) return l2;

    let newHead = new ListNode(null, null);
    let curr = newHead;

    let reminder = 0;

    while (l1 && l2) {

        let sum = l1.val + l2.val + reminder;

        if (sum >= 10) {

            let newNode = new ListNode(Number(sum % 10), null)
            reminder = Math.floor((sum) / 10);
            curr.next = newNode;
            curr = newNode;
        } else {
            newNode = new ListNode(sum, null)
            reminder = 0
            curr.next = newNode
            curr = newNode
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        if (reminder > 0) {
            let newNode = new ListNode((l1.val + reminder) % 10, null)
            reminder = Math.floor((l1.val + reminder) / 10)
            curr.next = newNode
            curr = newNode
        } else {
            let newNode = new ListNode(l1.val, null)
            curr.next = newNode
            curr = newNode
        }
        l1 = l1.next
    }

    while (l2) {
        if (reminder > 0) {
            let newNode = new ListNode((l2.val + reminder) % 10, null);
            reminder = Math.floor((l2.val + reminder) / 10);
            curr.next = newNode;
            curr = newNode;
        } else {
            let newNode = new ListNode(l2.val, null);
            curr.next = newNode;
            curr = newNode;
        }
        l2 = l2.next;
    }

    if (reminder > 0) {
        let newNode = new ListNode(reminder, null);
        curr.next = newNode;
        curr = newNode;
    }
    return newHead.next

};