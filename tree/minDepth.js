var minDepth = function(root) {
    var depth = 0;
    var queue = [];
    if (root) {
        root.level = 1;
        queue.push(root);
    }
    var cur = null
    while(queue.length) {
        cur = queue.shift();
        depth = cur.level;
        if (!cur.left && !cur.right) {
            break;
        }
        if (cur.left) {
            cur.left.level = cur.level + 1;
            queue.push(cur.left);
        }
        if (cur.right) {
            cur.right.level = cur.level + 1;
            queue.push(cur.right);
        }
    }
    return depth;
};

var test5 = {
    val: 5,
    left: null,
    right: null
}

var test4 = {
    val: 4,
    left: null,
    right: null
}

var test3 = {
    val: 3,
    left: null,
    right: null
}

var test2 = {
    val: 2,
    left: test4,
    right: test5
}

var test1 = {
    val: 1,
    left: test2,
    right: test3
}

console.log(minDepth(test1))




