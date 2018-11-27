var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    let node1 = l1;
    while(node1 !== null) {
        stack1.push(node1.val);
        node1 = node1.next;
    }
    let node2 = l2;
    while(node2 !== null) {
        stack2.push(node2.val);
        node2 = node2.next;
    }

    let head = null;
    let sum = 0;
    while(stack1.length > 0 || stack2.length > 0) {
        if(stack1.length > 0)sum += stack1.pop();
        if(stack2.length > 0)sum += stack2.pop();
        let node = {
            val: sum % 10,
            next: head
        };
        head = node;
        sum = Math.floor(sum / 10);
    }
    if(sum !== 0) {
        let node = {
            val: sum,
            next: head
        }
        head = node;
    }
    return head;
};

let head1 = {
    val: 0,
    next:null
}

let head2 = {
    val: 0,
    next:null
}
console.log(addTwoNumbers(head1, head2))