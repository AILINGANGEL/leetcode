var detectCycle = function(head) {
    let node = head;
    while (node) {
        if (node.visited) {
            return node;
        }
        node.visited = true;
        node = node.next;
    }
    return null;
};


var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            break;
        }
    }
    if (!fast || !fast.next) return null;
    while (head !== fast) {
        fast = fast.next;
        head = head.next;
    }
    return head;
}