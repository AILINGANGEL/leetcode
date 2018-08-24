var middleNode = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    let slow = head;
    let fast = head.next.next;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.next;
};
