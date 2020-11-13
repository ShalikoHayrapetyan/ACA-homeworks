/*4. Given an array of integers, find the pair of adjacent elements that has the largest
product and return that product.*/ 

function largeProduct(array) {
    let product = 0
    for (let i = 0; i < array.length; i++) {

        if (array[i] * array[i + 1] > product) product = array[i] * array[i + 1]
    }
    return product
}
console.log(largeProduct([1, 2, 3, 20, 4, 5, 6, 7, 8]))