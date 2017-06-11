/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.list1 = []
    this.list2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(this.list2.length!==0){
        this.list1.push(this.list2.pop())
    }
    this.list2.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.list1.length!==0){
        this.list2.push(this.list1.pop())
    }
    return this.list2.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.list1.length!==0){
        this.list2.push(this.list1.pop())
    }
    return this.list2[this.list2.length-1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.list1.length === 0 && this.list2.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
