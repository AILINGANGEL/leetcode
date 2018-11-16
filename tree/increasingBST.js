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
var head = null;
var increasingBST = function(root) {
    let node = root;
    console.log('-----');
    console.log(node);
    let tmp = null;
    if(node && node.left) {
        node = node.left;
        tmp = node;
        while(node.right) {
            node = node.right;
        }
        node.right = root;
    }
    if(root) {
        head = root;
        root.left = null;
        increasingBST(tmp);
        increasingBST(root.right);
    }
    return head;
}

var test = {
    val: 5,
    left: null,
    right: {
        val: 6,
        left: null,
        right: {
            val: 8,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 9,
                left: null,
                right: null
            }
        }
    }
}
increasingBST(test);
console.log(test);


// {
//         val: 3,
//         left: {
//             val:1,
//             left: null,
//             right: {
//                 val: 2,
//                 left: null,
//                 right: null
//             }
//         },
//         right: {
//             val: 4,
//             left: null,
//             right: null
//         }
//     },

