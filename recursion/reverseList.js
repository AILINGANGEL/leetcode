var reverseList = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

var reverseList = function(head){
    let cur = head;
    let pre = null;
    while(cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}