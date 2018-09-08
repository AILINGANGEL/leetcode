// 循环遍历
var insertIntoBST = function(root, val) {
    let newNode = {
        val,
        right: null,
        left: null
    }
    if (root === null) {
        root = newNode;
    } else {
        let pNode = null;
        let node = root;
        while (node !== null) {
            pNode = node;
            if (node.val > val) {
                node = node.left;
            } else {
                node = node.right;
            }
        }

        if (pNode.val > val) {
            pNode.left = newNode;
        } else {
            pNode.right = newNode;
        }

    }
    return root;
};

// 递归
var insertIntoBST = function(root, val) {
    if (root === null) {
        return { val: val, right: null, left: null };
    } else if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    } else if (root.val < val) {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
};


var test = {
    val: 4,
    right: {
        val: 7,
        right: null,
        left: null
    },
    left: {
        val: 2,
        right: {
            val: 3,
            right: null,
            left: null
        },
        left: {
            val: 1,
            right: null,
            left: null
        }
    }
}

console.log(insertIntoBST(test, 5));