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



var minDepth = function(root) {
    if(root === null) return 0;
    let min = 0;
    let queue = [[root]];
    while(queue.length > 0) {
        let nodes = queue.shift();
        let levelNode = [];
        min++;
        while(nodes.length > 0) {
            let node = nodes.shift();
            if(node.left === null && node.right === null) {
                return min;
            }
            if(node.left) {
                levelNode.push(node.left);
            }
            if(node.right) {
                levelNode.push(node.right);
            }
        }
        if(levelNode.length > 0) {
            queue.push(levelNode);
        }
    }
    return min;
};
