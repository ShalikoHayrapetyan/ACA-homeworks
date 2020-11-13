/*7. Given an array of integers. 
Write a function that return new array from first array,
 where removed even numbers, and odd numbers was multiplied with new array length 
*/

function newArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 === 0 || element % 2 === -0) {} else {
            newArray.push(element)
        }
    }
    for (let j = 0; j < newArray.length; j++) {
        newArray[j] *= newArray.length;
    }
    console.log(newArray)
}
newArray([5, 4, 78, 0, -3, 7]);
newArray([2, 4, 6, 88])