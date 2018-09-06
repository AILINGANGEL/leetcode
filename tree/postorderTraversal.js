// var postorderTraversal = function(root) {
//     let arr = [];
//     helper(root, arr);
//     return arr;
// };

// var helper = function(root, arr) {
//     if (root) {
//         helper(root.left, arr);
//         helper(root.right, arr);
//         arr.push(root.val);
//     }
// }

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