/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.buckets = 1000;
    this.items = 1000;
    this.map = new Array(this.buckets);
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let mod = key % this.buckets;
    let div = Math.floor(key / this.items);
    if(this.map[mod] === undefined) {
        this.map[mod] = [];
    }
    this.map[mod][div] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let mod = key % this.buckets;
    let div = Math.floor(key / this.items);
    if(this.map[mod] === undefined) {
        return -1;
    }
    return  this.map[mod][div] === undefined ? -1:this.map[mod][div]; 
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let mod = key % this.buckets;
    let div = Math.floor(key / this.items);
    if(this.map[mod] !== undefined) {
        this.map[mod][div] = undefined;
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
