var detectCycle = function(head) {
    let node = head;
    while(node) {
        if(node.visited) {
            return node;
        }
        node.visited = true;
        node = node.next;
    }
    return null;
};
