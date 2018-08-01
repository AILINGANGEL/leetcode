var oddEvenList = function(head) {
    if (head && head.next) {
        let odd = head;
        let evenHead = head.next;
        let even = evenHead;
        while (even.next) {
            odd.next = even.next;
            odd = odd.next;
            if (odd.next) {
                even.next = odd.next;
                even = even.next
            } else {
                break;
            }
        }
        odd.next = evenHead;
        even.next = null;
    }
    return head;
};
