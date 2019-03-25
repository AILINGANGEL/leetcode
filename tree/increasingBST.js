// var increasingBST = function(root) {
//     var arr = [];
//     helper(root, arr);
//     let head = null;
//     let node = {
//         val: -1,
//         left: null,
//         right: null
//     };
//     arr.forEach(item=>{
//         let tmp = {
//                 val: item,
//                 left: null,
//                 right: null
//             };
//         if(head === null) {
//             head = tmp;  
//         }
//         node.right = tmp;
//         node = node.right;
//     });
//     return head;
// };

// var helper = function(root, arr) {
//     if(root) {
//         helper(root.left, arr);
//         arr.push(root.val);
//         helper(root.right, arr);
//     }
// };

var cur;

var increasingBST = function(root) {
    let node = {
        val: -1,
        left: null,
        right: null
    }
    cur = node;
    inOrder(root);
    return node.right;
};

var inOrder = function(root) {
    if (root) {
        inOrder(root.left);
        root.left = null;
        cur.right = root;
        cur = root;
        inOrder(root.right);
    }
}

var increasingBST = function(root) {
    let arrNodes = [];
    inorderTranverse(arrNodes, root);
    let newRoot = {
        val: arrNodes[0],
        left: null,
        right: null
    };
    let node = newRoot;
    for (let i = 1; i < arrNodes.length; i++) {

        node.right = {
            val: arrNodes[i],
            left: null,
            right: null
        }
        node = node.right;
    }
    return newRoot;
};

var inorderTranverse = function(arr, root) {
    if (root) {
        inorderTranverse(arr, root.left);
        arr.push(root.val);
        inorderTranverse(arr, root.right);
    }
};