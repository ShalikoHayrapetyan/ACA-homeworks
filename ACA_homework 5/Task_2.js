/*Write a recursive function to determine whether all digits of the number are odd or not. */

function isDigitsOdd(num){
    let numstring = num + ""
    if(numstring.length==0) return true
    if(numstring[0]%2==0) return false
    return isDigitsOdd((numstring.slice(1)))
}

console.log(isDigitsOdd(1))
console.log(isDigitsOdd(123))