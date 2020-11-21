/*2. Write a function filterRange(arr, a, b) that gets an array, looks for elements between a
and b in it and returns an array of them.*/
function filterRange(arr, a, b) {
    const newArray = []
    for (index in arr) {
        if (arr[index] > a && arr[index] < b) {
            newArray.push(arr[index])
        }
    }
    return newArray
}

console.log(filterRange([1, 10, 20, 30], -2, 23))