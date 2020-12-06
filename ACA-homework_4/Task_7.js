/* 
7. Create constructor function which instances would be objects with already implemented method 
"map" (like Array.map) .
*/

function WithMyMap(first, second) {
    this.first = first;
    this.second = second;

    this.MyMap = function(callBack) {
        const result = {}
        for (let key in this) {
            result[key] = callBack(this[key], key, this)
        }
        return result
    }
}

obj = new WithMyMap('4', '5')
console.log(obj.MyMap(function(val) {
    return val * 2
}))