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

var isValidBST = function(root) {
    let arr = [];
    inOrder(root, arr);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

var inOrder = function(root, arr) {
    if (root) {
        inOrder(root.left, arr);
        arr.push(root.val);
        inOrder(root.right, arr);
    }
}


// 递归解法

var isValidBST = function(root) {
    if (root === null) return true;
    return helper(root, undefined, undefined);
};

var helper = function(root, low, high) {
    if (low !== undefined && root.val <= low) {
        return false;
    }
    if (high !== undefined && root.val >= high) {
        return false;
    }

    let isLeftValid = root.left ? helper(root.left, low, root.val) : true;
    if (!isLeftValid) {
        return false;
    } else {
        let isRightValid = root.right ? helper(root.right, root.val, high) : true;
        return isRightValid;
    }
};