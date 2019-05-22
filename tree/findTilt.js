// 解法1
var findTilt = function(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 0;
    let leftVal = helper(root.left);
    let rightVal = helper(root.right);
    return findTilt(root.left) + findTilt(root.right) + Math.abs(leftVal - rightVal);
};

var helper = function(root) {
    if (root === null) return 0;
    return helper(root.left) + helper(root.right) + root.val;
}


// 解法2
var findTilt = function(root) {
    let obj = { val: 0 };
    helper(root, obj);
    return obj.val;
};

var helper = function(root, obj) {
    if (root === null) return 0;
    let left = helper(root.left, obj);
    let right = helper(root.right, obj);
    obj.val += Math.abs(left - right);
    return left + right + root.val;
}


var test = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: null
    }
}

console.log(findTilt(test));