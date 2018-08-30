var mergeTrees = function(t1, t2) {
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    t1 = t1.val + t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};


var mergeTrees = function(t1, t2) {
    if (t1 === null) return t2;
    var queue = [
        [t1, t2]
    ];
    while (queue.length > 0) {
        let [node1, node2] = queue.shift();
        if (node1 === null || node2 === null) {
            continue;
        }
        node1.val += node2.val;
        if (node1.left === null) {
            node1.left = node2.left;
        } else {
            queue.push([node1.left, node2.left]);
        }

        if (node1.right === null) {
            node1.right = node2.right;
        } else {
            queue.push([node1.right, node2.right]);
        }
    }
    return t1;
};

mergeTrees(t1, t2);