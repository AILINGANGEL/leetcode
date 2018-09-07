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