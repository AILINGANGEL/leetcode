/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let node1 = l1;
    let node2 = l2;
    let tmp = 0;
    let pre = {
        val: 0,
        next: node1
    }
    while(node1 && node2) {
        let sum = node1.val + node2.val;
        node1.val = (sum + tmp) % 10;
        tmp = Math.floor((sum + tmp) / 10);
        node1 = node1.next;
        node2 = node2.next;
        pre = pre.next;
    }
    if (node1 === null) {
        pre.next = node2;
    }
    let cur = pre.next;
    while(cur) {
        if (tmp) {
            let sum = cur.val + tmp;
            tmp = Math.floor(sum / 10);
            cur.val = sum % 10;
        }
        if (tmp === 0) break;
        cur = cur.next;
        pre = pre.next;
    }
    if (cur === null && tmp > 0) {
        pre.next = {
            val: tmp,
            next: null
        }
    }
    return l1;
};