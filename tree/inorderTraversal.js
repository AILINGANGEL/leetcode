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