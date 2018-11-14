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
    console.log(map);
    let res = [];
    let minIndex = list1.length + list2.length;
    for(let key in map) {
        if(map.hasOwnProperty(key)) {
            if(map[key].common) {
                if(map[key].index < minIndex) {
                    res = [key];
                } else if (map[key].index === minIndex) {
                    res.push(key);
                }
            }
        }
    }
    return res;
};



let test1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
let test2 = ["KFC", "Shogun", "Burger King"]

console.log(findRestaurant(test1, test2));