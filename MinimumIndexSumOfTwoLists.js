/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let temp = {}
    for(let i=0; i<list1.length; i++){
        let pos = list2.indexOf(list1[i])
        if(pos!==-1){
            if(temp[pos+i]!==undefined){
                temp[pos+i].push(list1[i])   
            }else{
                temp[pos+i] =[]
                temp[pos+i].push(list1[i])
            }
        }
    }
    return temp[Object.keys(temp).sort(function(a,b){return a-b})[0]]
};
