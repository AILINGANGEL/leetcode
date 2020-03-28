var swapPairs = function(head) {
    const node = {val:0, next: head};
    helper(head, node);
    return node.next;
 };
 
 var helper = function(head, newTail) {
     if(head && head.next) {
         // 记录下次递归要处理的头结点
         const next = head.next.next;
         // 开始交换两个节点的位置
         newTail.next = head.next;
         head.next.next = head;
         head.next = null;
         newTail = head;
         helper(next, newTail);
     } else {
         newTail.next = head;
     }
 }


// from leetcode
var swapPairs = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    const next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
}