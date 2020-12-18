/*5. Write your own
 filter,
 map,
 reduce,
 forEach functions
*/ 
let arr = [1, 2, 6, 7, 8, 9, 10, 11, 12, 13]

//Filter
function filter(array, callBack) {
    const result = []
    for (let index of array) {
        if (callBack(array[index], index, array)) {
            result.push(array[index])
        }

    }
    return result
}
console.log(filter(arr, function(val, ind, arr) {
    return val > 5
}))

// Map
function map(array, callBack) {
    const result = []
    for (let index in array) {
        result.push(callBack(array[index], index, array))
    }
    return result
}
console.log(map(arr, function(val, ind, arr) {
    return arr[ind] = 12
}))

// Reduce 
function reduce(array, initialValue = 0, reducer) {
    let accumulator
    if (initialValue) {
        accumulator = initialValue
    } else {
        accumulator = array[0]
        array.shift()
    }
    for (let index in array) {
        accumulator = reducer(accumulator, array[index], index, array)
    }
    return accumulator
}
console.log(reduce(arr, 2, (initialValue, currentValue) => initialValue + currentValue))

//forEach

function forEach(arr, callBack) {
    for (let index in arr) {
        callBack(arr[index], index, arr)
    }
    return
}

forEach(arr, function(val, ind, arr) {
    return console.log(ind)
})