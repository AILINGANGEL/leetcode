// var deleteNode = function(root, key) {
//     let pre = null;
//     let node = root;
//     while (node !== null && node.val !== key) {
//         pre = node;
//         if (node.val > key) {
//             node = node.left;
//         } else if (node.val < key) {
//             node = node.right;
//         }
//     }

//     // 要删除的是根节点
//     if (pre === null) {
//         return deleteNodeRootNode(root);
//     } else if (pre.left === node) {
//         pre.left = deleteNodeRootNode(node);
//     } else if (pre.right === node) {
//         pre.right = deleteNodeRootNode(node);
//     }
//     return root;
// };


// var deleteNodeRootNode = function(root) {
//     if (root === null) {
//         return null;
//     } else if (root.left === null) {
//         return root.right;
//     } else if (root.right === null) {
//         return root.left;
//     } else {
//         let next = root.right;
//         let pre = null;
//         while (next.left !== null) {
//             pre = next;
//             next = next.left;
//         }
//         next.left = root.left;

//         if (root.right !== next) {
//             pre.left = next.right;
//             next.right = root.right;
//         }
//         return next;
//     }
// }

var deleteNode = function(root, key) {
    if (root === null) {
        return null;
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        } else {
            let node = root.right;
            while (node.left) {
                node = node.left;
            }
            root.val = node.val;
            root.right = deleteNode(root.right, node.val);
        }
    }
    return root;
};




var test = {
    val: 5,
    right: {
        val: 6,
        left: null,
        right: {
            val: 7,
            left: null,
            right: null
        }
    },
    left: {
        val: 3,
        right: {
            val: 4,
            left: null,
            right: null
        },
        left: {
            val: 2,
            left: null,
            right: null
        }
    }
}
// var test = {
//     val: 0,
//     right: null,
//     left: null
// }

// var test = {
//     val: 1,
//     right: {
//         val: 2,
//         left: null,
//         right: null
//     },
//     left: null
// }

console.log(deleteNode(test, 3));