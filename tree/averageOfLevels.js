var averageOfLevels = function(root) {
    let queue = [root];
    let res = [];
    let num = queue.length;
    let nextQueue = [];
    let sum = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        sum += node.val;
        if (node.left) {
            nextQueue.push(node.left);
        }
        if (node.right) {
            nextQueue.push(node.right);
        }

        if (queue.length === 0) {
            res.push(sum / num);
            num = nextQueue.length;
            queue = [...nextQueue];
            nextQueue = [];
            sum = 0;
        }
    }
    return res;
};