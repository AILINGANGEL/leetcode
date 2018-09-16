/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
     if (root === null) return 0;
     if (root.left === null && root.right === null) return 0;
     let leftVal = helper(root.left);
     let rightVal = helper(root.right);
     return findTilt(root.left) + findTilt(root.right) + Math.abs(leftVal - rightVal);
};

var helper = function(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return root.val;
    return helper(root.left) + helper(root.right) + root.val;
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
