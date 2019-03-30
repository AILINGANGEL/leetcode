var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let tmp = [];
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            tmp.push(nums1[i]);
            i++;
        } else {
            tmp.push(nums2[j]);
            j++;
        }
    }
    if(i < nums1.length) {
        Array.prototype.push.apply(tmp, nums1.slice(i));
    }
    if(j < nums2.length) {
         Array.prototype.push.apply(tmp, nums2.slice(j));
    }
    let n = nums1.length + nums2.length;
    if(n %2 === 0) {
        return (tmp[n/2 - 1] + tmp[n/2]) / 2;
    } else {
        return tmp[Math.floor(n/2)];
    }
};