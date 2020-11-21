/* 6. Write a function that repeats the shorter string until it is equal to the length of the
longer string. */
function lengthen(str1, str2) {
    let newString
    let smallString = str1
    let bigString = str2
    if (str1.length > str2.length) {
        bigString = str1
        smallString = str2
    }
    newString = smallString.repeat(Math.trunc(bigString.length / smallString.length)) +
                smallString.slice(0, bigString.length % smallString.length)



    return newString

}

console.log(lengthen("aaaa", "bb"))