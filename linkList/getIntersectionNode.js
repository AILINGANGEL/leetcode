// 暴力法
var getIntersectionNode = function(headA, headB) {
    var node1 = headA;
    while(node1 !== null) {
        var node2 = headB;
        while(node2 !== null) {
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
        node1 = node1 === null ? headB: node1.next;
        node2 = node2 === null ? headA: node2.next;
    }
    return a;
};