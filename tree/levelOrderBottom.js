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



var levelOrderBottom = function(root) {
    let res = [];
    if(root === null) return res;
    let queue = [root];
    while(queue.length > 0) {
        let n = queue.length;
        let subQueue = [];
        let subres = [];
        for(let i = 0; i < n; i++) {
            let node = queue.shift();
            if(node.left) subQueue.push(node.left);
            if(node.right) subQueue.push(node.right);
            subres.push(node.val);
        }
        res.unshift(subres);
        queue = subQueue;
    }
    return res;
};
