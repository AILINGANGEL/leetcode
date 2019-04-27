var postorderTraversal = function(root) {
    if (root === null) return [];
    let arr = [];
    let stack = [root];
    while (stack.length > 0) {
        let node = stack.pop()
        if (node) {
            arr.push(node.val);
            stack.push(node.left);
            stack.push(node.right);
        }
    }
    return arr.reverse();
};

var postorderTraversal = function(root) {
    let node = root;
    let ans = [];
    let stack = [];
    while(node || stack.length) {
        while(node) {
            ans.push(node.val);
            stack.push(node);
            node = node.right;
        }
        node = stack.pop().left;
        while(node === null && stack.length > 0) {
            node = stack.pop().left;
        }
    }
    ans.reverse();
    return ans;
};

var test = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null
    }
}

console.log(postorderTraversal(test));