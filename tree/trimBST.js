var trimBST = function(root, L, R) {
    if (root === null) return null;
    if (root.val >= L && root.val <= R) {
        console.log(123)
        root.left = trimBST(root.left, L, R);
        root.right = trimBST(root.right, L, R);
        return root;
    }
    if (root.val < L) {
        return trimBST(root.right, L, R);
    }
    if (root.val > R) {
        return trimBST(root.left, L, R);
    }
};

var test = {
    val: 3,
    left: {
        val: 0,
        left: null,
        right: {
            val: 2,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: null
        }
    },
    right: {
        val: 4,
        left: null,
        right: null
    }
}
console.log(trimBST(test, 1, 3))