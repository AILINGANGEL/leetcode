var mergeTwoLists = function(l1, l2) {
    var node1 = l1;
    var node2 = l2;
    var newNode ={
        val: 0,
        next: null
    };
    var newHead = newNode;
    if (node1 === null) {
        return l2;
    }
    if (node2 === null) {
        return l1;
    }
    while(node1 && node2) {
        if (node1.val < node2.val) {
            newNode.next = node1;
            node1 = node1.next;
        } else {
            newNode.next = node2;
            node2 = node2.next;
        }
        newNode = newNode.next;
    }
    if (node2) {
        newNode.next = node2;
    }
    
    if (node1) {
        newNode.next = node1;
    }
    return newHead.next;
};
