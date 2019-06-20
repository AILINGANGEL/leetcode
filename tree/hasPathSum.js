var hasPathSum = function(root, sum) {
    if (root == null) return false;
    if (root.left === null && root.right === null) {
        return sum - root.val === 0;
    }
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};


var hasPathSum = function(root, sum) {
    if (root === null) return false;
    let nodeStack = [root];
    let sumStack = [sum - root.val];
    while (nodeStack.length > 0) {
        let node = nodeStack.pop();
        let curSum = sumStack.pop();
        if (node.left === null && node.right === null && curSum === 0) return true;
        if (node.left) {
            nodeStack.push(node.left);
            sumStack.push(curSum - node.left.val);
        }

        if (node.right) {
            nodeStack.push(node.right);
            sumStack.push(curSum - node.right.val);
        }
    }
    return false;
};