/*Given a positive integer. Bring the last digit of the number to the beginning. Print the
new number. If the last digit of the inserted number is 0, number remains the same.*/
//Version 1
let num = +prompt('Write a positve integer')
let newNum = ""
while (!(num % 10 === 0)) {
    newNum += num % 10
    num = Math.trunc(num / 10)
}

num === 0 ? alert(+newNum) : alert(+(newNum += num))

//Version 2
/*
function newNumber(num) {
    let newNum = ""
    let strNum = num + ""
    for (let i = strNum.length - 1; i >= 0; i--) {
        if (strNum[i] == 0) {
            newNum += strNum.slice(0, i + 1)
            return +newNum
        } else {
            newNum += strNum[i]

        }
    }
    return +newNum
}
newNumber(1201)
*/
