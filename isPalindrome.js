var isPalindrome = function (head) {
    if (!head) return true;
    if (!head.next) return true;

    let curr = head;
    let arr = [curr.val]

    while (curr.next) {
        curr = curr.next
        arr.push(curr.val)
    }

    let point1 = 0;
    let point2 = arr.length - 1;

    while (point1 < point2) {
        if (arr[point1] !== arr[point2]) {
            return false;
        }
        point1++;
        point2--;
    }

    return true;
};