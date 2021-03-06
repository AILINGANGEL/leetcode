var isSymmetric = function(root) {
    return isMirror(root, root);
};

function isMirror(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    return (t1.val === t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}


var isSymmetric = function(root) {
    let queue = [];
    queue.push(root);
    queue.push(root);
    while (queue.length > 0) {
        let t1 = queue.shift();
        let t2 = queue.shift();
        if (t1 === null && t2 === null) continue;
        if (t1 === null || t2 === null) return false;
        if (t1.val !== t2.val) return false;
        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }
    return true;
}


var isSymmetric = function(root) {
    if(root) {
        return helper(root.left, root.right);
    }
    return true;
};

var helper = function(roota, rootb) {
    if(roota === null && rootb === null) return true;
    if(roota === null || rootb === null) return false;
    return roota.val === rootb.val && helper(roota.right, rootb.left) && helper(roota.left, rootb.right);
};
