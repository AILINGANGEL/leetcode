var removeElements = function(head, val) {
    var dumNode = {
        val: 0,
        next: head
    }
    var cur = dumNode;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next; //删除之后不移动cur 继续监测cur.next 防止两个一样值的节点接连着
        } else {
            cur = cur.next;
        }
    }
    return dumNode.next;
};