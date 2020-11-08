//Given a number. Print “odd” if the number is odd and “even” if it’s even.

//Version 1
function numType(num) {
    if(num%2===0 || num%2===-0 ){
        return ("Number is Even")
    }
    else if(num%2===1 || num%2===-1 ){
        return ("Number is Odd")
    }
    else {
        return ("Number is not Integer")
    }
}
console.log(numType(131))

/*
// Version 2
let num=+prompt("Write a number")
let result = (num%2===0 || num%2===-0 ) ?  ("Number is Even") : (num%2===1 || num%2===-1 ) ? ("Number is Odd") : ("It is not Integer")
console.log(result)
*/

// We can olso use method Number.isInteger()
