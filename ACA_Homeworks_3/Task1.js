/*1. Given an array of numbers Write a function to separate odd and even numbers in
different arrays*/
function newArrays(arr) {
    const oddArray = []
    const evenArray = []
    for (element in arr) {
        arr[element] % 2 ? oddArray.push(arr[element]) : evenArray.push(arr[element])
    }

    return {
        oddArray,
        evenArray
    }
}

console.log(newArrays([45, 12, 3, 6, 17, 0]))