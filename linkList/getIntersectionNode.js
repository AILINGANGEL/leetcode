// 暴力法
var getIntersectionNode = function(headA, headB) {
    var node1 = headA;
    while (node1 !== null) {
        var node2 = headB;
        while (node2 !== null) {
            if (node2 === node1) {
                return node1;
            } else {
                node2 = node2.next;
            }
        }
        node1 = node1.next;
    }
    return null;
};

//双指针法
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;
    var node1 = headA;
    var node2 = headB;
    while (node1 !== node2) {
        node1 = node1 === null ? headB : node1.next;
        node2 = node2 === null ? headA : node2.next;
    }
    return a;
};
var getIntersectionNode = function(headA, headB) {
    let node1 = headA;
    let node2 = headB;
    while (node1 && node2) {
        node1 = node1.next;
        node2 = node2.next;
    }
    let steps1 = 0;
    while (node1) {
        node1 = node1.next;
        steps1++;
    }
    let steps2 = 0;
    while (node2) {
        node2 = node2.next;
        steps2++;
    }
    node1 = headA;
    node2 = headB;
    while (steps1) {
        node1 = node1.next;
        steps1--;
    }
    while (steps2) {
        node2 = node2.next;
        steps2--;
    }
    while (node1 && node2) {
        if (node1 === node2) {
            return node1;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    return null;
};