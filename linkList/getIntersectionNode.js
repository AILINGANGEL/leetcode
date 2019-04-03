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

var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null;
    let lenA = 0;
    let nodeA = headA;
    while(nodeA) {
        lenA++;
        nodeA = nodeA.next;
    }
    
    let lenB = 0;
    let nodeB = headB;
    while(nodeB) {
        lenB++;
        nodeB = nodeB.next;
    }
    
    nodeA = headA;
    nodeB = headB;
    if(lenA > lenB) {
        for(let i = 0; i < lenA - lenB; i++) {
            nodeA = nodeA.next;
        }
    } else if (lenA < lenB) {
        for(let i = 0; i < lenB - lenA; i++) {
            nodeB = nodeB.next;
        }
    }
    
    while(nodeA && nodeB && nodeA !== nodeB) {
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    if(nodeA && nodeB) {
        return nodeA;
    }
    return null;
};