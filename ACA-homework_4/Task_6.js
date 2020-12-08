/*
6. Write a JavaScript function to get all possible subsets of given length of the given array.
Assume that all elements in the array are unique.
*/


let array = [1, 2, 3, 4, 5] // [ [1, 2],  [1, 3],  [1, 4],  [2, 3],  //[2, 4],  [3, 4] ]

function groupOfNumbers(array, num, result = []) {
 if (num == 2) {
        if (array.length == num) return [array];
            for (let j = 1; j < array.length; j++) {
            result.push([array[0], array[j]])
            }
    }
    else if (num == 3) {
        if (array.length == num) return [array];
        for (let j = 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++)
                result.push([array[0], array[j], array[k]])
        }       
    } else return "Number shuld be 2 or 3"

    array.shift()
    return result.concat(groupOfNumbers(array, num, result = []))
}


console.log(groupOfNumbers(array, 2))
