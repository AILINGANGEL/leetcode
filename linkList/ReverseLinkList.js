var reverseList = function(head) {
    if (head && head.next) {
       let cur = head.next;
       head.next = null;
       while(cur) {
           let next = cur.next;
           cur.next = head;
           head = cur;
           cur = next;
       }
    }
    return head;
};
