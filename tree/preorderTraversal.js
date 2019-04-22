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
    let node = root;
    let res = [];
    let stack = [];
    while (stack.length > 0 || node !== null) {
        if (node) {
            res.push(node.val);
            if (node.right) {
                stack.push(node.right);
            }
            node = node.left;
        } else {
            node = stack.pop();
        }
    }
    return res;
};

var test = {
    val: 3,
    right: null,
    left: {
        val: 1,
        right: {
            val: 2,
            right: null,
            left: null
        },
        left: null
    }
}

console.log(preorderTraversal(test))

var preorderTraversal = function(root) {
    
    let ans = [];
    let stack = [];
    let node = root;
    while(node !== null || stack.length > 0) {
        if(node) {
            ans.push(node.val);
            stack.push(node);
            node = node.left;
            continue;
        }
        node = stack.pop().right;
    }
    return ans;
};