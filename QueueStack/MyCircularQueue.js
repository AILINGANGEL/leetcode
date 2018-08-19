/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.size = k;
    this.queue = [];
    this.head = -1;
    this.tail = -1;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    if (this.isEmpty()) {
        this.queue[0] = value;
        this.head = 0;
        this.tail = 0;
        return true;
    }

    this.tail = (this.tail + 1) % this.size;
    this.queue[this.tail] = value;
    // if (this.tail < this.size - 1) {
    //     this.queue[this.tail + 1] = value;
    //     this.tail++;
    // } else {
    //     this.queue[0] = value;
    //     this.tail = 0;
    // }
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    if (this.head === this.tail) {
        this.head = -1;
        this.tail = -1;
        return true;
    }

    this.head = (this.head + 1) % this.size;
    return true;
    // if (this.head < this.size) {
    //     if (this.head < this.size - 1) {
    //         this.head++;
    //     } else {
    //         this.head = 0;
    //     }
    //     return true;
    // }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.tail === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.tail - this.head) === this.size - 1 || this.head - this.tail === 1;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// var test = new MyCircularQueue(8);
// console.log(test.enQueue(3));
// console.log(test.enQueue(9));
// console.log(test.enQueue(5));
// console.log(test.enQueue(0));
// console.log(test.queue);
// console.log(test.head);
// console.log(test.tail);
// console.log(test.deQueue());
// console.log(test.queue);
// console.log(test.head);
// console.log(test.tail);
// console.log(test.deQueue());
// console.log(test.queue);
// console.log(test.isEmpty());
// console.log(test.isEmpty(4));
// console.log(test.Rear());
// console.log(test.Rear());
// console.log(test.deQueue());