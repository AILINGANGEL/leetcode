var isPalindrome = function(head) {
    let node = head;
    let str = [];
    while(node) {
        str.push(node.val);
        node = node.next;
    }
    return str.join('') === str.reverse().join('');
};
