var swapPairs = function(head) {
    if (head === null || head.next === null) return head;
    let newHead = swapPairs(head.next.next);
    let next = head.next;
    head.next = newHead;
    next.next = head;
    return next;
};