/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 
function sortNumber(a,b)
{
    return a - b;
}
var findContentChildren = function(g, s) {
    g.sort(sortNumber)
    s.sort(sortNumber)
    let count=0;
    let i = g.length-1, j = s.length-1;
    while(i>-1&&j>-1){
        if(s[j]>=g[i]){
            count++;
            j--;
            i--;
        }else{
            i--;
        }
    }
    return count;
};
