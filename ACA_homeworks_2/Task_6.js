/*6.Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array*/
function sumArray(bigArray) {
    let result = [];
    for (let i = 0; i < bigArray.length; i++) {
        let sum = 0;
        for (let j = 0; j < bigArray[i].length; j++) {

            sum += bigArray[i][j]

        }
        result.push(sum)
    }
    console.log(result)
}

sumArray([[3, 4, 5],[1, 0, 0], [4, 5, 4], [8, 8, -1]])

sumArray([[8, 35, 2],[8],[5, 6, -5, -6],[1, 3, -9, 0, -1]])

sumArray([[1], [2],[3],[4]])