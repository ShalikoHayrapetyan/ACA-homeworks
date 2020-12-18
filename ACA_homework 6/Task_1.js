/*
1. Given a word and a list of possible anagrams, select the correct sublist.
*/ 
let result = []

function anagrams(word, arr) {
    arr.forEach(element => {
        if (word.length === element.length) {
            let cond = true;
            for (let i = 0; i < word.length; i++) {
                if (!element.includes(word[i])) {
                    cond = false
                    break;
                }
            }
            if (cond) result.push(element)
        }
    })
    return result
}

let arr = ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']

console.log(anagrams('pencil', arr))