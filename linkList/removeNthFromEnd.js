var removeNthFromEnd = function(head, n) {
    var len = 1;
    var node = head;
    while (node.next) {
        len++;
        node = node.next;
    }
    var pos = len - n;
    var i = 1;
    node = head;
    while (i < pos && node.next) {
        node = node.next;
        i++;
    }
    if (pos === 0) {
        head = head.next;
    } else {
        node.next = node.next.next;
    }
    return head;
};

//一次循环
var removeNthFromEnd = function(head, n) {
    if (n === 0) return head;
    var fast = head;
    var slow = head;
    while (n != 0) {
        fast = fast.next;
        n--;
    }
    //如果经过n次迭代之后fast指向null,说明要删除头结点
    if (fast === null) {
        return head.next;
    }
    // fast指向最后一个结点的时候， slow的距离恰好和他是n,
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};


var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    let i = 0;
    while(fast && i < n) {
        fast = fast.next;
        i++;
    }
    if(!fast) {
        return head.next;
    }
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};

var removeNthFromEnd = function(head, n) {
    let i = 0;
    let fast = head;
    while(fast && i < n + 1) {
        fast = fast.next;
        i++;
    }
    if(i === n) {
        return head.next;
    }
    let slow = head;
    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
