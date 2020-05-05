var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    let newHead = mergeTwoLists(l1.next, l2.next);
    // 如果新生成的链表是null
    if(!newHead) {
        if(l1.val < l2.val) {
            l1.next = l2;
            return l1;
        } else {
            l2.next = l1;
            return l2;
        }
    }
    newHead = helper(newHead, l1);
    newHead = helper(newHead, l2);
    return newHead;
};

var helper = function(head, node) {
    // 将节点node插入到链表head中去
    if(!head) {
        return node;
    }
    if(!node){
        return head;
    }
    let pre = {
        next: head
    }
    let dummy = pre;
    while(head && head.val < node.val) {
        head = head.next;
        pre = pre.next;
    }
    node.next = head;
    pre.next = node;
    return dummy.next;
}