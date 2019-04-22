//递归
var inorderTraversal = function(root) {
    let arr = [];
    inorderTree(root, arr);
    return arr;
};

var inorderTree = function(root, arr) {
    if (root) {
        inorderTree(root.left, arr);
        arr.push(root.val);
        inorderTree(root.right, arr);
    }
}


// 循环遍历
var inorderTraversal = function(root) {
    let arr = [];
    let stack = [];
    let curr = root;
    while (stack.length > 0 || curr !== null) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        arr.push(curr.val);
        curr = curr.right;
    }
    return arr;
};


var inorderTraversal = function(root) {
    let node = root;
    let stack = [];
    let nodes = [];
    while(stack.length > 0 || node) {
        while(node) {
            stack.push(node);
            node = node.left;
        };
        node = stack.pop();
        nodes.push(node.val);
        node = node.right;
    }
    return nodes;
};


var inorderTraversal = function(root) {
    let ans = [];
    let stack = [];
    let node = root;
    while(node !== null || stack.length > 0) {
        if(node) {
            stack.push(node);
            if(node.left) {
                node = node.left;
                continue;
            }
        }
       
        node = stack.pop();
        ans.push(node.val);
        node = node.right;
    }
    return ans;
};
