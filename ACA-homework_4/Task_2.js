/*
2. Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given value create an array.
*/

obj = {
    a: '1',
    b: '2',
    c: '2',
    d: '2',
    e: '3'
}

console.log(invert(obj))

function invert(obj) {
    let newObj = {}
    for (let key in obj) {

        if (!newObj.hasOwnProperty(obj[key])) {
            newObj[obj[key]] = key
        } else {
            newObj[obj[key]] = Array.from(newObj[obj[key]])
            newObj[obj[key]].push(key)
        }

    }
    return newObj
}

