var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    var slow = head;
    var fast = head.next;
    while (fast && fast.next) {
        if (fast == slow) {
            return true;
        }
        slow = slow.next;
        fast = fase.next.next;
    }
    return false;
};
