/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.minArr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
    if(this.minArr.length === 0) {
        this.minArr.push(x);
    } else {
        this.minArr.push(Math.min(this.minArr[this.minArr.length - 1], x));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.length--;
    this.minArr.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minArr[this.minArr.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
