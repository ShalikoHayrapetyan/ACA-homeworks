/*2. Given a string of digits,
 output all the contiguous substrings of length n in that string. 
 */

function subStrings(str, num) {
    if (str.length === num) console.log(str)
    else if (str.length > num && num > 0) {
        console.log(str.slice(0, num))
        subStrings(str.slice(1), num)
    } else {
        console.log("Something wrong with your number")
    }

}

subStrings("asdfghj", 4)

subStrings("asddfgfghj", -4)