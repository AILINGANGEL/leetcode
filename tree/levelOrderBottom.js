var levelOrderBottom = function(root) {
    if(root === null) return [];
    let queue = [root];
    let res = [];
    while(true) {
        let levelNode = [];
        let temp = [];
        while(queue.length > 0) {
            let node = queue.shift();
            levelNode.push(node.val);
            if(node.left) temp.push(node.left);
            if(node.right) temp.push(node.right);
        }
        res.unshift(levelNode);
        if(temp.length === 0) break;
        queue = temp;
    }
    return res;
};