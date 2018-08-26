var levelOrder = function(root) {
    if (root === null) return [];
    let queue = [root];
    let result = [];
    while (true) {
        let currentLevel = [];
        let nextLevel = [];
        while (queue.length > 0) {
            let node = queue.shift();
            if (node.left) {
                nextLevel.push(node.left);
            }

            if (node.right) {
                nextLevel.push(node.right);
            }
            currentLevel.push(node.val);
        }

        result.push(currentLevel);
        queue = nextLevel;

        if (queue.length === 0) {
            break;
        }
    }
    return result;
};


var levelOrder = function(root) {
    if (root === null) return [];
    let queue = [root];
    let result = [];
    while (queue.length > 0) {
        let subList = [];
        let nextLevel = [];
        for (let i = 0; i < queue.length; i++) {
            subList.push(queue[i].val);
            if (queue[i].left) {
                nextLevel.push(queue[i].left);
            }
            if (queue[i].right) {
                nextLevel.push(queue[i].right);
            }
        }
        result.push(subList);
        queue = nextLevel;
    }
    return result;
};