// var preorderTraversal = function(root) {
//     let arr = [];
//     preorderTree(root, arr);
//     return arr;
// };

// var preorderTree = function(root, arr) {
//     if (root){
//         arr.push(root.val);
//         preorderTree(root.left, arr);
//         preorderTree(root.right, arr);
//     }
// }

var preorderTraversal = function(root) {
    let arr = [];
    let stack = [];
    let node = root;
    while (stack.length > 0 || node) {
        if (node) {
            arr.push(node.val);
            if (node.right) {
                stack.push(node.right);
            }
            node = node.left;
        } else {
            node = stack.pop();
        }
    }
    return arr;
};

var test = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            right: null,
            left: null
        },
        right: null
    }
}

console.log(preorderTraversal(test))