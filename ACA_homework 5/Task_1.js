/*
Determine if a word or phrase is an isogram. 
An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter
*/ 

// Tarberak 1

function isIsogram(word) {
    word=word.toUpperCase()
      for (let i = 0; i < word.length - 1; i++) {
          for (let j = i + 1; j < word.length; j++) {
              if (word[i] === word[j + 1]) return false
          }
      }
      return true
  }

console.log(isIsogram("Machine"))
console.log(isIsogram("isogram"))
console.log(isIsogram("Area"))

// Tarberak 2 by recursive function

  function isIsogramRec(word) {
    if (word.length <=1) return true
    word = word.toUpperCase()
    for (let i = 1; i < word.length; i++) {
        if (word[0] === word[i]) return false
    }

    return isIsogramRec(word.slice(1))

}

console.log(isIsogramRec("Machine"))
console.log(isIsogramRec("isogram"))
console.log(isIsogramRec("Area"))