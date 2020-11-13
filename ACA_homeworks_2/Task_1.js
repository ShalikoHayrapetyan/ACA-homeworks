/*1. Write a function which receives an array and a number as arguments and returns a
new array from the elements of the given array which are larger than the given
number.*/

function newArr(array, number) {
    const newArr = []
    let arrItems = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > number) {
            newArr.push(element)
            arrItems++
        }

    }
    if (arrItems === 0) {
        return "Such values do not exist.";
    } else {
        return newArr;
    }

}

console.log(newArr([10, 25, 16, -5, 30, 15, 24], 16))
console.log(newArr([1, 1, 2, -3, 0, 8, 4, 0], 9))