/* Given a number. Write a function that calculates its sum of the digits 
and if that sum has more than 1 digit find the sum of digits of that number.
 Repeat that process if needed and return the result */

 function SumOfDigits(num) {
    if (num <= 9) return num
    let sum = 0
    while (num !== 0) {
        sum += num % 10
        num = (num - num % 10) / 10
    }
    if (sum <= 9) return sum
    return SumOfDigits(sum)
}

console.log(SumOfDigits(97))