/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var limit = Math.pow(2, 31);
    var result;
    if (x < 0) {
       result = - String(-x).split('').reverse('').join('')
    } else {
       result =  + String(x).split('').reverse('').join('');
    }
    return result > limit || result < -limit ? 0: result;
};
