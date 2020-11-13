
/*3. Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated.*/ 

function findIndex(array) {
    let index = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            index = i + 1;
            break;
        }
    }
    return index;
}
console.log(findIndex([2, 12, 15, 48, 64]))
console.log(findIndex([-9, -4, -4, 3, 12, 4, 5]))