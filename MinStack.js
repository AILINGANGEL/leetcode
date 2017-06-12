/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.list1 = []
    this.list2 = []
    this.min = Infinity
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.list1.push(x)
    if(x < this.min){
        this.min = x
    }
    this.list2.push(this.min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.list1.pop()
    this.list2.pop()
    if(this.list1.length===0){
        this.min = Infinity
    }else{
        this.min = this.list2[this.list2.length-1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.list1[this.list1.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.list2[this.list1.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
