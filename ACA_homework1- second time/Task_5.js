// Write a function to print X star pattern series using loop.

function printX(size, brush = "*") {
    let newsize = 2 * size - 1
    let space = " "
    let result = ""
    for (let i = 0; i <= newsize - 1; i++) {
        let row = ""
        for (let j = 0; j <= newsize - 1; j++) {
            if (j === i || i + j === newsize - 1) {
                row += brush
            } else {
                row += space
            }
        }
        result += row + "\n"
    }
    return result
}
console.log(printX(5))
  