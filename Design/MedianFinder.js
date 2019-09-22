*
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.data = [];
    this.length = 0;
};

/** 
 * @param {number} num  [1,2,3,4,5,6]
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // let j = this.length - 1;
    // while(j > -1 && this.data[j] > num) {
    //     j--;
    // }
    let pos = findPos(this.data, num);
    this.data.splice(j+1, 0, num);
    this.length++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.length === 0) return null;
    if(this.length % 2 === 1) return this.data[Math.floor(this.length / 2)];
    let mid = this.length / 2;
    return (this.data[mid] + this.data[mid - 1]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()

 **/

function findPos(data, num) {
    let low = 0, high = data.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(data[mid] === num) {
            return mid + 1;
        }else if(data[mid] < num){
            if(data[mid + 1] >= num || data[mid + 1] === undefined) {
                return mid + 1;
            }
            low = mid + 1;
        } else {
            if(data[mid - 1] === undefined) return mid;
            high = mid;
        }
    }
 }