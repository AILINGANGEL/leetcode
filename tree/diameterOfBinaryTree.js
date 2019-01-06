let d;
var diameterOfBinaryTree = function(root) {
    d = 0;
    helper(root);
    return d;
};

var helper = function(root) {
    if (root === null) return -1;
    let left = helper(root.left);
    let right = helper(root.right);

    d = Math.max(d, left + right + 2);
    return Math.max(left, right) + 1;
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
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

diameterOfBinaryTree(test);
console.log(d);