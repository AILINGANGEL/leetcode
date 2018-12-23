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

var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            return true;
        }
    }
    return false;
};
