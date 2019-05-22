var minDepth = function(root) {
    var depth = 0;
    var queue = [];
    if (root) {
        root.level = 1;
        queue.push(root);
    }
    var cur = null
    while (queue.length) {
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

var minDepth = function(root) {
    if (root === null) return 0;
    let min = 0;
    let queue = [
        [root]
    ];
    while (queue.length > 0) {
        let nodes = queue.shift();
        let levelNode = [];
        min++;
        while (nodes.length > 0) {
            let node = nodes.shift();
            if (node.left === null && node.right === null) {
                return min;
            }
            if (node.left) {
                levelNode.push(node.left);
            }
            if (node.right) {
                levelNode.push(node.right);
            }
        }
        if (levelNode.length > 0) {
            queue.push(levelNode);
        }
    }
    return min;
};


var minDepth = function(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    if (root.left && root.right) return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    if (root.left) {
        return minDepth(root.left) + 1;
    }
    if (root.right) {
        return minDepth(root.right) + 1;
    }
}