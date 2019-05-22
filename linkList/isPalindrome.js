var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // 如果fast不为null说明含有奇数个节点，slow指向中间那个
    let mid = fast ? slow.next : slow;
    mid = reverseList(mid);
    slow = head;
    while (slow && mid) {
        if (slow.val !== mid.val) {
            return false;
        }
        slow = slow.next;
        mid = mid.next;
    }
    return true;
};

var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}