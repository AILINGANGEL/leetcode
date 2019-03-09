var isPalindrome = function(head) {
    let node = head;
    let str = [];
    while (node) {
        str.push(node.val);
        node = node.next;
    }
    return str.join('') === str.reverse().join('');
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverseList = function(head) {
    if (head && head.next) {
        let cur = head.next;
        head.next = null;
        while (cur) {
            let next = cur.next;
            cur.next = head;
            head = cur;
            cur = next;
        }
    }
    return head;
};



//用反转后半部分链表来做

var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;


    // 查找中间位置的点
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let rhead;



    // 下面的代码可以简化为
    // if (fast) slow = slow.next;
    // rhead = reverseList(slow);


    //链表有偶数个节点
    if (fast === null) {
        rhead = reverseList(slow);
    }

    //链表有奇数个节点
    if (fast && fast.next === null) {
        rhead = reverseList(slow.next);
    }

    while (rhead) {
        if (head.val !== rhead.val) {
            return false
        }
        rhead = rhead.next;
        head = head.next;
    }
    //走到队尾
    if (rhead === null) return true;
};

var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let tmpNode = { val: 0, next: head };
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        tmpNode = tmpNode.next;
    }
    // 偶数个,此时slow正好指向后半部分链表的表头,需要借助于tmpNode
    if (fast === null) {
        tmpNode.next = reverseList(slow);
        tmpNode = tmpNode.next;
    } else {
        //奇数个,slow正好指向中间节点
        slow.next = reverseList(slow.next);
        tmpNode = slow.next;
    }
    while (tmpNode) {
        if (head.val !== tmpNode.val) {
            return false;
        }
        tmpNode = tmpNode.next;
        head = head.next;
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


var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast != null) {
        //奇数个,slow正好指向中间节点
        slow = slow.next;
    }
    slow = reverseList(slow);
    while (slow) {
        if (head.val !== slow.val) {
            return false;
        }
        slow = slow.next;
        head = head.next;
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