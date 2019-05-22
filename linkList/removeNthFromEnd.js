var removeNthFromEnd = function(head, n) {
    if (head === null) return head;
    let dummy = {
        val: 0,
        next: head
    }
    let node = head;
    while (n) {
        node = node.next;
        n--;
    }
    let pre = dummy;
    while (node) {
        node = node.next;
        pre = pre.next;
    }
    pre.next = pre.next.next;
    return dummy.next;
};