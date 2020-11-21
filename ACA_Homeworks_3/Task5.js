/* 5. Write a function which removes all the words from array starting by a given letter */
const arr = ['Godfather', 'Game ofthrones', 'Whiplash', 'Social Network'];

console.log(removeByLetter(arr, 'g'))

function removeByLetter(array, letter) {

    const newArray = []
    for (index in array) {
        let firstLetter = array[index][0]
        if (firstLetter === letter.toUpperCase() || firstLetter === letter.toLowerCase()) {

        } else {
            newArray.push(array[index])
        }
    }
    return newArray
}

