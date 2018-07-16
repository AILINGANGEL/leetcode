var removeNthFromEnd = function(head, n) {
    var len = 1;
    var node = head;
    while (node.next) {
        len++;
        node = node.next;
    }
    var pos = len - n;
    var i = 1;
    node = head;
    while (i < pos && node.next) {
        node = node.next;
        i++;
    }
    if (pos === 0) {
        head = head.next;
    } else {
        node.next = node.next.next;
    }
    return head;
};
