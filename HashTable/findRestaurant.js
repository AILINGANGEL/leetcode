var findRestaurant = function(list1, list2) {
    let map = {};
    list1.forEach((item, index)=> {
        map[item] = {};
        map[item].index = index;
        map[item].common = false;
    });
    list2.forEach((item, index)=> {
        if(map[item] !== undefined) {
            map[item].index += index;
            map[item].common = true;
        }
    });
    let res = [];
    let minIndex = list1.length + list2.length;
    for(let key in map) {
        if(map.hasOwnProperty(key)) {
            if(map[key].common) {
                if(map[key].index < minIndex) {
                    minIndex = map[key].index;
                    res = [key];
                } else if (map[key].index === minIndex) {
                    res.push(key);
                }
            }
        }
    }
    return res;
};


var findRestaurant = function(list1, list2) {
    let map = {};
    for(let i = 0; i < list1.length; i++) {
        map[list1[i]] = i;
    }
    let maxIndex = list1.length + list2.length;
    let res = [];
    for(let i = 0; i < list2.length; i++) {
        let index = map[list2[i]];
        if( index !== undefined) {
            if(index + i < maxIndex) {
                res = [list2[i]];
                maxIndex = index + i;
            } else if (index + i === maxIndex) {
                res.push(list2[i]);
            }
        }
    }
    return res;
};



let test1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
let test2 = ["KFC", "Shogun", "Burger King"]

console.log(findRestaurant(test1, test2));