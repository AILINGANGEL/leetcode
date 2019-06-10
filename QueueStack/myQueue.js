/**
 * Initialize your data structure here.
 */

var MyQueue = function() {
    this.stack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let tmp = [];
    while (this.stack.length > 1) {
        tmp.push(this.stack.pop());
    }
    let item = this.stack.pop();
    while (tmp.length > 0) {
        this.stack.push(tmp.pop());
    }
    return item;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let tmp = [];
    while (this.stack.length > 0) {
        tmp.push(this.stack.pop());
    }
    let item = tmp[tmp.length - 1];
    while (tmp.length > 0) {
        this.stack.push(tmp.pop());
    }
    return item;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */