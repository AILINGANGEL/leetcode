// 递归解法
var isValidBST = function(root) {
    var arr = [];
    inOrderTranverse(root, arr);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
}

var inOrderTranverse = function(root, arr) {
    if (root) {
        inOrderTranverse(root.left, arr);
        arr.push(root.val);
        inOrderTranverse(root.right, arr);
    }
}

// 循环遍历解法
var isValidBST = function(root) {
    let lastVal;
    let stack = [];
    let curr = root;
    while (stack.length > 0 || curr !== null) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if (lastVal === undefined) {
            lastVal = curr.val;
        } else {
            if (curr.val <= lastVal) {
                return false;
            } else {
                lastVal = curr.val;
            }
        }
        curr = curr.right;
    }
    return true;
}

var test = {
    val: 0,
    left: null,
    right: {
        val: -1,
        left: null,
        right: null
    }
}

console.log(isValidBST(test));