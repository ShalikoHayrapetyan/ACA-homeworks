/*2. Write a function, which receives two numbers as arguments and finds all numbers
between them such that each digit of the number is even. The numbers obtained should be
printed in a comma-separated sequence on a single line.*/


function numbers(num1, num2) {
    let newNumber = "" ;
    for (let number = num1; number <= num2; number++) {
        let strNumber = number + ""
        let condition 
        for (let i = 0; i < strNumber.length; i++) {
            if (strNumber[i] % 2 === 0) {
                condition = true;

            } else {
                condition = false;
                break;
            }


        }
        if (condition) {
            newNumber+=strNumber + ","
        }

    }
    if (!newNumber == "") {
        return newNumber
    } else {
        return "Such numbers does not exist."
    }
}
console.log(numbers(19, 42))
console.log(numbers(99, 199))