var addTwoNumbers = function(l1, l2) {
    let node1 = l1;
    let node2 = l2;
    let tmp = 0;
    let node = {
        val: 0,
        next: null
    }
    let ans = node;
    while (node1 && node2) {
        let val = (node1.val + node2.val + tmp) % 10;
        tmp = Math.floor((node1.val + node2.val + tmp) / 10);
        node1 = node1.next;
        node2 = node2.next;
        node.next = {
            val: val,
            next: null
        }
        node = node.next;
    }
    while (node2) {
        let val = (node2.val + tmp) % 10;
        tmp = Math.floor((node2.val + tmp) / 10);
        node2 = node2.next;
        node.next = {
            val: val,
            next: null
        }
        node = node.next;
    }
    while (node1) {
        let val = (node1.val + tmp) % 10;
        tmp = Math.floor((node1.val + tmp) / 10);
        node1 = node1.next;
        node.next = {
            val: val,
            next: null
        }
        node = node.next;
    }
    if (tmp) {
        node.next = {
            val: tmp,
            next: null
        }
    }
    return ans.next;
};

let l1 = {
    val: 0,
    next: null
}

let l2 = {
    val: 7,
    next: {
        val: 3,
        next: null
    }
}

console.log(addTwoNumbers(l1, l2));