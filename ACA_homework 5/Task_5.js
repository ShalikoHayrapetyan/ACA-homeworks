/* Given a sorted array and an element from that array. Find the index of that element using binary search.
 Please research about binary search please don't copy and paste the solution, just try to understand it.. 
*/ 

let arr = [1, 2, 6, 7, 8, 9, 10, 11, 12, 13]

function binarySearch(arr, num, lastMiddle = 0) {
    let area
    let indexOfmiddel = Math.floor((arr.length - 1) / 2)
    if (arr[indexOfmiddel] == num) {
        return `The index of number is  ${indexOfmiddel+lastMiddle}`
    }
    if (arr[indexOfmiddel] > num) {

        area = arr.slice(0, indexOfmiddel + 1)
    } else {
        area = arr.slice(indexOfmiddel + 1)
        lastMiddle += indexOfmiddel + 1
    }
    return binarySearch(area, num, lastMiddle)
}

console.log(binarySearch(arr, 12))