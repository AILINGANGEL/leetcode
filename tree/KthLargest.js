/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.root = null;
    if (nums.length > 0) {
        this.root = {
            val: nums[0],
            cnt: 1,
            right: null,
            left: null
        }
    }
    let i = 1;
    while (i < nums.length) {
        addNode(this.root, nums[i]);
        i++;
    }
};
var helper = function(root, k) {
    if (root === null) return null;
    let rightCnt = root.right ? root.right.cnt : 0;
    if (k - rightCnt - 1 === 0) {
        return root.val;
    } else if (k - rightCnt - 1 > 0) {
        return helper(root.left, k - rightCnt - 1);
    } else if (k - rightCnt - 1 < 0) {
        return helper(root.right, k);
    }
};

var addNode = function(root, val) {
    let tempNode = {
        val: val,
        cnt: 1,
        left: null,
        right: null
    }
    let pre = null;
    let node = root;
    while (node !== null) {
        pre = node;
        node.cnt++;
        if (node.val <= val) {
            node = node.right;
        } else if (node.val > val) {
            node = node.left;
        }
    }
    if (pre.val > val) {
        pre.left = tempNode;
    } else if (pre.val <= val) {
        pre.right = tempNode;
    }

};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.root === null) {
        this.root = {
            val: val,
            cnt: 1,
            left: null,
            right: null
        }
    } else {
        addNode(this.root, val);
    }
    return helper(this.root, this.k);
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */


var test = [4, 5, 8, 2];
var k = 3;

kthLargest = new KthLargest(k, test);

console.log(kthLargest.add(3));
console.log(kthLargest.root);
console.log(kthLargest.add(5));
console.log(kthLargest.add(10));
console.log(kthLargest.add(9));
console.log(kthLargest.add(4));