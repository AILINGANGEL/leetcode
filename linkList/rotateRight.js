/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // 链表为空或者是只包含一个节点就直接返回
    if (head === null || head.next === null) return head;
    let len = 0;
    let node = head;
    // 计算链表的长度
    while (node) {
        node = node.next;
        len++;
    }
    k = k % len; // 真正要移动的位置

    if (k === 0) return head; //如果要移动的距离就是链表的长度就相当于不移动节点

    // 找到倒数第k个点
    let slow = head;
    let fast = head;
    let i = 0;
    // 初始化fast和slow节点的间距是k
    while (i < k) {
        fast = fast.next;
        i++;
    }
    // 当fast.next是null时此时slow指向的正式倒数第k个点的头一个点
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    let newhead = slow.next;
    slow.next = null;
    fast.next = head;
    return newhead;
};

var rotateRight = function(head, k) {
    if(head === null) return null;
    let n = 0; // 链表的长度
    let node = head;
    while(node) {
        n++;
        node = node.next;
    }
    k = k % n; //实际上要移动的距离
    if(k === 0) return head; //如果k=0就返回原链表
    
    node = head;
    let tail = head;
    let i = 0;
    while(i < k) {
        i++;
        tail = tail.next;
    }
    
    while(tail.next) {
        node = node.next;
        tail = tail.next;
    }
    let newHead = node.next;
    node.next = null;
    tail.next = head;
    return newHead;
};
