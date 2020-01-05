var sufficientSubset = function(root, limit) {
    if(!root) return null;
    if(!root.left && !root.right) {
        if(root.val < limit) {
            return null;
        }
        return root;
    }
    let isSufficientLeft = sufficientSubset(root.left, limit - root.val);
    let isSufficientRight = sufficientSubset(root.right, limit - root.val);
    if(!isSufficientRight) {
        root.right = isSufficientRight;
    }
    if(!isSufficientLeft) {
        root.left = isSufficientLeft;
    }
    if(!isSufficientLeft && !isSufficientRight) {
        // 删掉node;
        return null;
    }
    return root;
};
