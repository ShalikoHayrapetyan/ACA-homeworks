/* 4. Write a function which works as Array.concat but working with infinite number of arrays 
 */

function arrConcat(...args) {
    const result = []
    for (keyOfArgs of args) {
        for (keyOfKey of keyOfArgs) result.push(keyOfKey)
    }
    return result
}

console.log(arrConcat([1, 2,'hi'], [2, 3], [[3], 4],['asd',{}]))