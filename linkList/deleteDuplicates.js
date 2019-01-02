var deleteDuplicates = function(head) {
    let node = head;
    while (node && node.next) {
        if (node.next.val === node.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
}


var deleteDuplicates = function(head) {
    if(head === null) return head;
    let pre = head;
    let next = head.next;
    while(next) {
        if(next.val !== pre.val){
            pre.next = next;
            pre = next;
        }
        next = next.next;
    }
    pre.next = next;
    return head;
};
