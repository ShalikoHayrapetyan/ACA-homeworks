/*4. Given an array and a number N.  Write a recursive function that rotates an array N places to the left. 
(Hint: to add element to the beginning use arr.unshift())*/ 

// Tarberak 1

function recursiveRotates(arr, num, i = arr.length - 1) {

    if (i < num) {
        return arr
    }
    arr.unshift(arr[arr.length - 1])
    arr.pop()
    return recursiveRotates(arr, num, i - 1)

}
console.log(recursiveRotates(['a', 'v', 'd', 'g', 'j', 'f', ], 2))

//Tarberak 2

function recursiveRotates1(arr, num, i = arr.length - 1) {

    if (num > arr.length - 1) {
        return arr
    }
    arr.unshift(arr[arr.length - 1])
    arr.pop()
    return recursiveRotates1(arr, num + 1)

}
console.log(recursiveRotates1(['a', 'v', 'd', 'g', 'j', 'f', ], 3))