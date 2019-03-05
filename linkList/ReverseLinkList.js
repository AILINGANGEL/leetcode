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


// 5 -> 4 -> 3 -> 2-> 1-> null

// leetcode 递归解法
var reverseList = function(head) {
    if (head === null || head.next === null)
        return head;
    var p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}

// 2018-7-31-再次练习
var reverseList = function(head) {
    if (head === null) return head;
    var cur = head.next;
    var next;
    head.next = null;
    while (cur) {
        next = cur.next;
        cur.next = head;
        head = cur;
        cur = next;
    }
    return head;
};



// 2018-10-24-再次练习
var fakeHead;

var reverseList = function(head) {
    fakeHead = {
        val: 0,
        next: null
    }
    helper(head);
    return fakeHead.next;
};


var helper = function(head) {
    if (head === null) return fakeHead;
    let node = helper(head.next);
    node.next = head;
    head.next = null;
    return head;
};

let test = {
    val: 5,
    next: null
}



// 2019-3-5
var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    let last = null;
    let cur = head;
    while (cur && cur.next) {
        let nextNext = cur.next.next;
        let next = cur.next;
        cur.next.next = cur;
        cur.next = last;
        last = next;
        cur = nextNext;
    }
    if (cur) {
        cur.next = last;
        last = cur;
    }
    return last;
};