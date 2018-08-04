/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    // this.val = val;
    // this.next = null;
    this.head = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.length) return -1;
    var i = 0;
    var node = this.head;
    while (i !== index) {
        node = node.next;
        i++;
    }
    return node.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.head = {
        val,
        next: this.head
    };
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var node = {
        val,
        next: null
    };
    var cur = this.head;
    if (!cur) {
        this.head = node;
    } else {
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = node;
    }
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.length) return;
    if (index === 0) {
        this.addAtHead(val);
    } else {
        var i = 0;
        var cur = this.head;
        while (i !== index - 1) {
            cur = cur.next;
            i++;
        }
        cur.next = {
            val,
            next: cur.next
        }
        this.length++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.length || index < 0) return
    if (index === 0) {
        this.head = this.head.next;
    } else {
        var i = 0;
        var node = this.head;
        while (i !== index - 1) {
            node = node.next;
            i++;
        }
        node.next = node.next.next;
    }
    this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
