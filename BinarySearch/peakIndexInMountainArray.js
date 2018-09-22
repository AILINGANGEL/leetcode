var peakIndexInMountainArray = function(A) {
   let lo = 0;
    let hi = A.length;
   while(lo < hi) {
       let mi = lo + Math.floor((hi-lo)/2);
       if(A[mi] < A[mi+1]) {
           lo = mi + 1;
       } else {
           hi = mi;
       }
   }
    return hi;
};
